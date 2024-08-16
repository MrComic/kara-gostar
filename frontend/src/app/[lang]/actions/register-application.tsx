"use server";
import { z, ZodError } from "zod";
import { getStrapiURL } from "../utils/api-helpers";
import { FormState, fromErrorToFormState } from "../utils/FieldError";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
function convertBlobToFile(blob: any, fileName: any) {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
}

async function uploadFile(file: any) {
  const formData = new FormData();
  formData.append("data", JSON.stringify({ path: "/resume" })); // Optional data for the Strapi entry
  formData.append("files", file);
  formData.append("path", "/resume");
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;
  const response = await axios.post(getStrapiURL("/api/upload"), formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data[0].id;
}

const fileSchema = z.object({
  file: z
    .any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false;
      else return true;
    }, "لطفا فایل را ارسال کنید")

    .refine(
      (file) =>
        file.type === "application/vnd.ms-excel" ||
        file.type.indexOf("application/vnd.openxmlformats") > -1,
      "لطفا  فقط فایل اکسل ارسال نمایید"
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, `Max file size is 5MB.`),
});

export const RegisterApplication = async (
  formState: FormState,
  formData: FormData
): Promise<any> => {
  try {
    const file = formData.get("file") as File;
    const validationResult = fileSchema.safeParse({ file: file });
    if (!validationResult.success) {
      return {
        status: "Error",
        message: validationResult.error.issues,
        timestamp: +new Date(),
      };
    } else {
      console.log("error");
    }

    let item = await uploadFile(file);

    var form = {
      resume: item,
      reviewd: false,
      accepted: null,
      comment: "",
    };
    const endpoint = getStrapiURL("/api/register-applications");
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const response = await axios.post(endpoint, { data: { ...form } });
    console.log(response.status);

    if (response.status == 200)
      return { status: "SUCCESS", timestamp: +new Date() };
    else
      return {
        status: "Error",
        message: response.data,
        timestamp: +new Date(),
      };
  } catch (error) {
    var Validation = fromErrorToFormState(error);
    Validation.timestamp = +new Date();
    return Validation;
  }
};
