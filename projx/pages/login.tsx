import React from 'react';
import { signIn, getProviders } from "next-auth/react";
import type { LiteralUnion, ClientSafeProvider } from "next-auth/react";

interface LoginProps {
  providers: Record<LiteralUnion<string, string>, ClientSafeProvider> | null;
}

function Login({ providers }: LoginProps) {
  if (!providers) return null;

  return (
    <div className='flex items-center justify-center h-screen'>
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default Login;
