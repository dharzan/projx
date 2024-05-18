import React from 'react';
import { signIn, getProviders } from "next-auth/react";
import type { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import LandingPage from './landingPage';

export interface LoginProps {
  providers: Record<LiteralUnion<string, string>, ClientSafeProvider> | null;
}
function Login({ providers }: LoginProps) {
  if (!providers) return null;

  return (
    <>
    <LandingPage/>
    <div className='flex items-center justify-center h-screen'>
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button className='bg-twitterWhite pl-1 pr-4 py-1 text-black rounded-full flex items-center  hover:bg-blue-700 hover: opacity-100 font-helvetica'onClick={() => signIn(provider.id)}>
            <img src='/google.png' alt="google icon" className='h-5 px-2'/>
           
             Sign in with {provider.name}
          </button>
        </div>
        
      ))}
    </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default Login;
