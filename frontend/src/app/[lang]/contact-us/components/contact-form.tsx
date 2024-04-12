"use client";
import { useFormState, useFormStatus } from "react-dom";
import { ContactFormSubmit } from "../../actions/contact-form";
import { useRef } from "react";
import { useFormReset } from "../../utils/useFormReset";
import translate from "../../utils/translate";
import { EMPTY_FORM_STATE, FieldError } from "../../utils/FieldError";
import SubmitButton from "../../utils/submit-button";

export default function ContactForm(params: { data: any }) {
  let data = params.data;
  const [formState, action] = useFormState(ContactFormSubmit, EMPTY_FORM_STATE);
  const formRef = useFormReset(formState);

  return (
    <>
      <form ref={formRef} action={action} className="space-y-8">
        {formState != undefined ? (
          formState.status === "SUCCESS" ? (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              {translate("contact-us.validations.success", data)}
            </div>
          ) : formState.status == "UNSET" ? (
            ""
          ) : formState.status == "ERROR" ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {translate("contact-us.validations.error", data)}
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {translate("contact-us.email", data)}
          </label>
          <input
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            required
          />

          <FieldError formState={formState} name="email" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {translate("contact-us.name", data)}
          </label>
          <input
            type="text"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            required
          />
          <FieldError formState={formState} name="name" />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {translate("contact-us.subject", data)}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            required
          />
          <FieldError formState={formState} name="subject" />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {translate("contact-us.message", data)}
          </label>
          <textarea
            name="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          ></textarea>
          <FieldError formState={formState} name="message" />
        </div>

        <SubmitButton
          label={translate("contact-us.submit-form", data)}
          loading={translate("contact-us.submit-form-loading", data)}
        />
      </form>
    </>
  );
}
