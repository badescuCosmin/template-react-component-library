import { TextFieldProps } from "@mui/material";
export type TextFieldBase = Omit<
  TextFieldProps,
  "FilledTextFieldProps" | "variant"
>;

export interface WithLabelInputProps extends TextFieldBase {
  type?: string;
  validationRule?: RegExp;
  onChangeInput: Function;
  required?: boolean;
  initialValue?: string;
  withMask?: boolean;
  postSubmitError?: boolean;
  multipleValidation?: boolean;
  debounceInput?: boolean;
  mask?: string;
}

export interface WithLabelDateInputProps extends TextFieldBase {
  label: string;
  required?: boolean;
  onChangeInput: Function;
  initialValue?: Date;
}
