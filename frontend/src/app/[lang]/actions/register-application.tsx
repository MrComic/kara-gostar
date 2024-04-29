"use server";
import { z, ZodError } from "zod";
import { getStrapiURL } from "../utils/api-helpers";
import { promises } from "dns";
import { FormState, fromErrorToFormState } from "../utils/FieldError";
import { useReCaptcha } from "next-recaptcha-v3";

const RegisterApplicationObject = z.object({
  resume: z.any().refine((files) => files?.length == 1, "File is required."),
});

export const ContactFormSubmit = async (
  formState: FormState,
  formData: FormData
): Promise<any> => {
  try {
    var form = {
      resume: formData.get("resume"),
      reviewd: false,
      accepted: null,
      comment: "",
    };

    var data = RegisterApplicationObject.parse(form);

    const endpoint = getStrapiURL("/api/register-applications");
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    console.log(token);
    const options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { ...form } }),
    };

    const response = await fetch(endpoint, options);
    console.log(response.status);

    const result = await response.json();
    if (response.status == 200)
      return { status: "SUCCESS", timestamp: +new Date() };
    else
      return {
        status: "Error",
        message: response.json,
        timestamp: +new Date(),
      };
  } catch (error) {
    var Validation = fromErrorToFormState(error);
    Validation.timestamp = +new Date();
    console.log(Validation);
    return Validation;
  }
};
