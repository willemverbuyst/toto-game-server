import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { ReactElement } from 'react';
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

interface IProps<T> extends UseControllerProps<T> {
  error: FieldError | undefined;
  label: string;
}

const ControllerTextInput = <T extends FieldValues>({
  control,
  defaultValue,
  error,
  label,
  name,
}: IProps<T>): ReactElement => {
  return (
    <Controller
      control={control}
      rules={{ required: 'This field is required' }}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            variant="outlined"
            margin="normal"
            fullWidth
            label={label}
          />
          {error && <Typography color="error">{error?.message}</Typography>}
        </>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
};

export default ControllerTextInput;
