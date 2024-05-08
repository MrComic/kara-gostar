"use client";
import { useFormState, useFormStatus } from "react-dom";
import { RegisterApplication } from "../actions/register-application";
import { useEffect, useRef, useState } from "react";
import { useFormReset } from "../utils/useFormReset";
import translate from "../utils/translate";
import { EMPTY_FORM_STATE, FieldError } from "../utils/FieldError";
import SubmitButton from "../utils/submit-button";
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";
import { ReCaptcha } from "next-recaptcha-v3";

export default function RegisterApplicationForm(params: { data: any }) {
  let data = params.data;
  const [formState, action] = useFormState(
    RegisterApplication,
    EMPTY_FORM_STATE
  );
  const formRef = useFormReset(formState);
  const [token, setToken] = useState<string>("");

  const { executeRecaptcha } = useReCaptcha();

  useEffect(() => {
    if (token) {
      // Validate token and make some actions if it's a bot
      //validateToken(token);
    }
  }, [token]);

  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey="6Lc64L4pAAAAAKva-hxCikSP7JmgKABPFLRrJ2lH"
        language="fa"
      >
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
          <div className="mx-auto flex flex-col items-center justify-center">
            <label
              htmlFor="email"
              className="block mt-10 mb-2 me-5 pe-5 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {translate("register-application.file", data)}
            </label>
            <input type="file" name="file" id="file" />

            <FieldError formState={formState} name="email" />

            <ReCaptcha onValidate={setToken} action="page_view" />
            <br />
            <br />
            <SubmitButton
              label={translate("register-application.submit-form", data)}
              loading={translate("contact-us.submit-form-loading", data)}
            />
          </div>
        </form>
      </ReCaptchaProvider>
    </>
  );
}
