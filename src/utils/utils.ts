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
