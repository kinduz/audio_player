import {TextFieldProps} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import {InputStyled} from "../../../styles";

// Сейчас на defaultValue приходит undefined и из-за этого uncontrolled error в консоли, ошибка пропадает, если не типизириовать control и name

interface IInputProps<TFieldValues extends FieldValues>
  extends TextFieldProps<"outlined"> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  type: string;
  label: string;
  isRequired?: boolean;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
}

export const Input = <TFieldValues extends FieldValues>({
  control,
  name,
  type,
  isRequired = false,
  defaultValue,
  label,
}: IInputProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field, fieldState: {error: fieldError}}) => (
        <InputStyled
          {...field}
          fullWidth
          type={type}
          required={isRequired}
          label={label}
          error={!!fieldError}
          helperText={fieldError ? fieldError.message : null}
          variant="outlined"
        />
      )}
    />
  );
};
