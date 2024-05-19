import React from 'react';
import { signIn, getProviders } from "next-auth/react";
import type { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { Button, TextField, Typography, Box, Container, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

export interface LoginProps {
  providers: Record<LiteralUnion<string, string>, ClientSafeProvider> | null;
}

function Login({ providers }: LoginProps) {
  if (!providers) return null;

  return (
    <>
     <Container component="main" maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'black',
          borderRadius: '16px',
          maxHeight:'40vh',
          paddingLeft: '20'
        
  
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 3 }} color={'white'} paddingTop={5} fontFamily={'cursive'}>
          Login
        </Typography>

        <div className='flex items-center justify-center h-screen'>
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              className='bg-twitterWhite pl-1 pr-4 py-1 text-black rounded-full flex items-center hover:bg-blue-700 hover:opacity-100'
              onClick={() => signIn(provider.id, { callbackUrl: '/landingPage' })} // Redirect to landing page
            >
              <img src='/google.png' alt="google icon" className='h-5 px-2' />
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      

        </Box>

      </Container>
    </>
  );
}

export async function getServerSideProps() {
  try {
    console.log('Fetching providers...');
    const providers = await getProviders();
    console.log('Providers fetched:', providers);

    return {
      props: { providers },
    };
  } catch (error) {
    console.error('Error fetching providers:', error);
    return {
      props: { providers: null },
    };
  }
}

export default Login;
