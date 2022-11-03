import { Button } from '@mui/material';
import React from 'react';
import { useSignInWithPopup } from '../hooks/useSignInWithPopup';

export const SignIn =()=> {
  return (
    <div>
      <Button onClick={useSignInWithPopup}>Googleでログインする</Button>
    </div>
  )
}
