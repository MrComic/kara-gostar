import { ZodError, z } from "zod";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

export const FieldError = ({ formState, name }: FieldErrorProps) => {
  return formState.fieldErrors && formState.fieldErrors.hasOwnProperty(name) ? (
    <span className="text-xs text-red-400">
      {formState?.fieldErrors[name]?.[0]}
    </span>
  ) : (
    ""
  );
};

export type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_FORM_STATE: FormState = {
  status: "UNSET" as const,
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToFormState = (error: unknown) => {
  if (error instanceof ZodError) {
    return {
      status: "ERROR" as const,
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      timestamp: +Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: "ERROR" as const,
      message: error.message,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    return {
      status: "ERROR" as const,
      message: "An unknown error occurred",
      fieldErrors: {},
      timestamp: +Date.now(),
    };
  }
};

export const toFormState = (
  status: FormState["status"],
  message: string
): FormState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  };
};
