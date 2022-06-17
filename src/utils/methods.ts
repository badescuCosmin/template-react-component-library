import moment from "moment";

type DateProps = Date | string | undefined | null;

type GetErrorMessageProps = {
  value: string | Date | null;
  label: string | React.ReactNode;
  isPhone?: boolean;
};

export const phoneMask = "+1 (999) 999-9999";

export const notValidYear = (date: DateProps) =>
  Number(moment(date).calendar().split("/")[2]) < 1900;

const validateDate = (date: DateProps) => {
  if (notValidYear(date)) {
    return "Invalid Date";
  }
  return moment(date).locale("en").format("L");
};

export const getDateToDisplay = (date: DateProps) =>
  date ? validateDate(date) : "";

export const getDateToSend = (date: string | undefined) => {
  const isValid = moment(date).isValid();
  return isValid && date ? moment(date).locale("en").format("YYYY-MM-DD") : "";
};

const validateTime = (h: string, mm: string) => {
  if (Number(h) > 24 || Number(mm) > 59) {
    return true;
  }
  return false;
};

export const checkTimeInput = (isValid: boolean, value: string) => {
  if (isValid) {
    const [hour, minutes] = value.split(":");
    return validateTime(hour, minutes);
  }
  return true;
};

export const convertMaskInput = (value: string | Date) =>
  value.toString().replace(/\D+/g, "");

export const getErrorMessage = ({
  value,
  label,
  isPhone,
}: GetErrorMessageProps) => {
  if (!value || (isPhone && convertMaskInput(value).length === 1)) {
    return `${label} is required`;
  }
  if (typeof label === "string")
    return `Invalid ${label.replace("(optional)", "")}`;
  return `Invalid ${label}`;
};
