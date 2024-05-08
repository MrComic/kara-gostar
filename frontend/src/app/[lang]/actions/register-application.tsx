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

const MAX_FILE_SIZE = 5000000;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
  // try {
  //   const options: any = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: formData,
  //   };

  //   console.log("date mire");
  //   const response = await fetch(getStrapiURL("/api/upload"), options);
  //   console.log(response);
  //   return response;
  // } catch (error) {
  //   console.error("Failed to upload file:", error);
  // }
}

const imageSchema = z.object({
  image: z
    .any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false;
      else return true;
    }, "Please update or add new image.")

    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`),
});

export const RegisterApplication = async (
  formState: FormState,
  formData: FormData
): Promise<any> => {
  try {
    const file = formData.get("file") as File;

    let item = await uploadFile(file);
    console.log(item);

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
    console.log(Validation);
    return Validation;
  }
};
