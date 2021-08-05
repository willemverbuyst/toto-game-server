import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PageTitle from '../../Components/Title/PageTitle';
import PageContent from '../../Sections/PageContent';
import { selectUser } from '../../store/user/selectors';
import SignUpForm from './SingUpForm';

const SignUp: React.FC = (): ReactElement => {
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user && !user.admin) history.push('/page-not-found');
  });

  return (
    <PageContent
      loadingText=""
      content={
        <>
          <PageTitle title="Sign up" color="secondary" />
          <SignUpForm />
        </>
      }
    />
  );
};

export default SignUp;
