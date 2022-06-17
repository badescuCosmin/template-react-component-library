import moment from "moment";
import { regexSeparators } from "./validationRules";

type DateProps = Date | string | undefined | null;

export const notValidYear = (date: DateProps) =>
  Number(moment(date).calendar().split("/")[2]) < 1900;

export const phoneMask = "+1 (999) 999-9999";
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

export const getPhoneNumberToDisplay = (input: string) =>
  input?.length
    ? `+${input.slice(0, 1)} (${input.slice(1, 4)}) ${input.slice(
        4,
        7
      )}-${input.slice(7, 11)}`
    : "";
export const getPhoneNumbertoSend = (phoneNumber: string | undefined) => {
  const transformedPhoneNumber = phoneNumber?.replace(/[^a-z0-9]/gi, "");
  if (transformedPhoneNumber?.length) {
    return {
      c: transformedPhoneNumber?.slice(0, 1),
      n: transformedPhoneNumber?.slice(1),
    };
  }
  return {};
};

// This is used to map get the postal code from the address for transportation provider
export const getAddressToSend = (
  address: string
): { postalCode: string; address: string } | null => {
  const postalCode = address.match(regexSeparators.addressPostalCode);

  if (!postalCode) return null;

  return {
    address: address
      .replace(regexSeparators.addressPostalCode, "")
      .trim()
      .replace(/[ ,;.]+$/, ""),
    postalCode: postalCode[0].replace(/[ ,;.]/, ""),
  };
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const handleActionWithDelay = (fn: Function) => {
  setTimeout(() => {
    fn();
  }, 250);
};
