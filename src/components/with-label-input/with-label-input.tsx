import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { debounce } from "lodash";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField as MuiTextField, styled } from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/lab";
import InputMask from "react-input-mask";
import {
  getDateToDisplay,
  phoneMask,
  notValidYear,
  getErrorMessage,
} from "../../utils";
import {
  WithLabelInputProps,
  WithLabelDateInputProps,
} from "./with-label-input.types";
import { validationRules } from "../../utils/validation-rules";
import { useAfterInitialRender } from "../../hooks/use-after-initial-render";
import { constants } from "../../lib/theme/constants";
import { checkTimeInput, convertMaskInput } from "../../utils/methods";

const WithLabelInputStyle = styled(MuiTextField)(({ theme, ...props }) => {
  const errorColor = theme.colors.red70;
  const { error } = props;
  return {
    marginBottom: "19px",
    display: "block",
    [`.MuiOutlinedInput-root.MuiInputBase-root`]: {
      width: "100%",
      ...(!props.rows && {
        height: 48,
      }),
    },
    [`.MuiInputLabel-root`]: {
      ...(!props.rows && {
        marginTop: "-4px",
      }),
    },
    [`.MuiInputLabel-root.Mui-focused`]: {
      color: error ? errorColor : theme.colors.black50,
    },
  };
});

export const WithLabelInput = ({
  type = "text",
  validationRule = validationRules.required,
  required = true,
  onChangeInput,
  withMask = false,
  postSubmitError = false,
  initialValue = "",
  multipleValidation = false,
  debounceInput = true,
  mask = phoneMask,
  ...rest
}: WithLabelInputProps) => {
  const [value, setValue] = useState(initialValue);
  const [showPassword, togglePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const theme = useTheme();

  useAfterInitialRender(() => {
    setError(!validationRule.test(withMask ? convertMaskInput(value) : value));
    setErrorMessage(getErrorMessage({ value, label: rest.label }));
    if (multipleValidation) {
      onChangeInput({
        val: value,
      });
    }
  }, [validationRule]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChangeWithDebounce = useCallback(
    debounce((val) => {
      onChangeInput({ val });
    }, constants.debounceInterval),
    []
  );

  const changeValue = (val: string) => {
    setValue(val);
    if (debounceInput) {
      handleChangeWithDebounce(val);
    } else {
      onChangeInput({ val });
    }
  };

  const { confirm, red70, disabled } = theme.colors;

  const WithLabelBaseInput = (
    <WithLabelInputStyle
      {...rest}
      variant="outlined"
      type={showPassword ? "text" : type}
      value={!withMask ? value : undefined}
      required={required}
      onChange={!withMask ? (e) => changeValue(e.target.value) : undefined}
      onBlur={
        !withMask
          ? () => {
              setError(!validationRule.test(value));
              setErrorMessage(getErrorMessage({ value, label: rest.label }));
            }
          : undefined
      }
      error={error || postSubmitError}
      sx={{
        ...rest.sx,
        [`.MuiInputLabel-root.MuiInputLabel-animated`]: {
          ...(!error &&
            !postSubmitError &&
            value && {
              color: confirm,
            }),
          ...(error && {
            color: `${red70} !important`,
          }),
          ...(rest.disabled && {
            color: disabled,
          }),
        },
        [`.MuiOutlinedInput-root.MuiInputBase-root fieldset`]: {
          ...(!error &&
            value && {
              borderColor: confirm,
            }),
          ...(rest.disabled && {
            borderColor: disabled,
          }),
        },
      }}
      helperText={
        error || postSubmitError ? rest.helperText || errorMessage : null
      }
      InputProps={{
        ...rest.InputProps,
        ...(type === "password" && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => togglePassword(!showPassword)}
                onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) =>
                  event.preventDefault()
                }
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }),
      }}
    />
  );
  if (withMask) {
    return (
      <InputMask
        mask={mask}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeValue(e.target.value)
        }
        value={value}
        onBlur={() => {
          if (validationRule === validationRules.time) {
            setError(
              checkTimeInput(
                validationRule.test(convertMaskInput(value)),
                value
              )
            );
          } else {
            setError(!validationRule.test(convertMaskInput(value)));
          }
          setErrorMessage(
            getErrorMessage({ value, label: rest.label, isPhone: true })
          );
        }}
        maskChar="-"
        disabled={rest.disabled}
      >
        {() => WithLabelBaseInput}
      </InputMask>
    );
  }
  return WithLabelBaseInput;
};

export const WithLabelDateInput = ({
  required,
  label,
  onChangeInput,
  disabled = false,
  initialValue,
  ...rest
}: WithLabelDateInputProps) => {
  const [value, setValue] = useState<Date | null>(initialValue || null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useTheme();
  const valueToString = value?.toString();
  const disabledColor = theme.colors.disabled;

  const handleChangeWithDebounce = useCallback(
    debounce((newValue) => {
      onChangeInput({ val: getDateToDisplay(newValue) });
    }, constants.debounceInterval),
    []
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
    handleChangeWithDebounce(newValue);
  };

  const { confirm } = theme.colors;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        disabled={disabled}
        label={label}
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        onAccept={() => setError(false)}
        renderInput={(params) => (
          <WithLabelInputStyle
            {...params}
            value={value}
            variant="outlined"
            required={required}
            sx={{
              ...rest.sx,
              [`.MuiInputLabel-root.MuiInputLabel-formControl`]: {
                ...(!error &&
                  valueToString?.length && {
                    color: confirm,
                  }),
              },
              [`.MuiOutlinedInput-root.MuiInputBase-root fieldset`]: {
                ...(!error &&
                  valueToString?.length && {
                    borderColor: confirm,
                  }),
                ...(disabled && {
                  borderColor: disabledColor,
                }),
              },
              [`.MuiIconButton-root`]: {
                right: "25px",
              },
            }}
            error={error}
            helperText={error ? errorMessage : null}
            onBlur={() => {
              setError(
                valueToString === "Invalid Date" ||
                  notValidYear(value) ||
                  (required ? !valueToString?.length : false)
              );
              setErrorMessage(getErrorMessage({ value, label }));
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
