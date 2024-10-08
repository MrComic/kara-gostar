"use server";
import { z, ZodError } from "zod";
import { getStrapiURL } from "../utils/api-helpers";
import { promises } from "dns";
import { FormState, fromErrorToFormState } from "../utils/FieldError";
import { useReCaptcha } from "next-recaptcha-v3";

const contactFormSchema = z.object({
  email: z.string().email().min(1).max(500),
  name: z.string().min(1).max(500),
  subject: z.string().min(1).max(500),
  message: z.string().min(1).max(1000),
});

export const ContactFormSubmit = async (
  formState: FormState,
  formData: FormData
): Promise<any> => {
  try {
    var form = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    var data = contactFormSchema.parse(form);
    // API endpoint where we send form data.
    const endpoint = getStrapiURL("/api/contact-uses");
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { ...form } }),
    };

    const response = await fetch(endpoint, options);

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
