import { Grid, Link, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import AvatarIconComponent from '../../Components/Avatar/AvatarIcon';
import SubmitForm from '../../Components/Button/SubmitForm';
import * as HISTORY from '../../history';
import { userLogIn } from '../../store/user/action-creators';
import { useStyles } from './styles';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm: SubmitHandler<Inputs> = (data) => {
    dispatch(
      userLogIn({
        email: data.email,
        password: data.password,
      }),
    );
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6} lg={4} className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
          <Grid container>
            <AvatarIconComponent icon={<LockOutlinedIcon />} />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <Typography color="error">This field is required</Typography>
            )}
            <TextField
              variant="outlined"
              type="password"
              margin="normal"
              fullWidth
              label="Password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <Typography color="error">This field is required</Typography>
            )}
          </Grid>
          <SubmitForm caption="LOG IN" color="primary" />
        </form>
        <Link href="#" onClick={HISTORY.gotoForgotPassword}>
          Forgot Password?
        </Link>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
