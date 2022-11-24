import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useSignInWithPopup } from '../hooks/useSignInWithPopup';

export const SignIn:FC =()=> {
  return (
    <div>
      <Button onClick={useSignInWithPopup}>Googleでログインする</Button>
    </div>
  )
}
