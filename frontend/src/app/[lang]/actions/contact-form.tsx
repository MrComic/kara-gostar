"use server";
export const ContactFormSubmit = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  var form = {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };
  console.log(form);
};
