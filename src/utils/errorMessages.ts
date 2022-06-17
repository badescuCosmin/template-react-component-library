import React from 'react';
import { convertMaskInput } from './utils';

type GetErrorMessageProps = {
  value: string | Date | null;
  label: string | React.ReactNode;
  isPhone?: boolean;
};

export const getErrorMessage = ({ value, label, isPhone }: GetErrorMessageProps) => {
  if (!value || (isPhone && convertMaskInput(value).length === 1)) {
    return `${label} is required`;
  }
  if (typeof label === 'string') return `Invalid ${label.replace('(optional)', '')}`;
  return `Invalid ${label}`;
};
export const baseDriverErrorMassage = 'The Driver has not been';
export const driverErrorMessage = (action: string, reason: string) =>
  `${baseDriverErrorMassage} ${action} because ${reason}.`;
