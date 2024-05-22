import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { getProviders, signIn } from "next-auth/react";

export interface LoginProps {
  providers: Record<LiteralUnion<string, string>, ClientSafeProvider> | null;
}

function Login({ providers }: LoginProps) {
  if (!providers) return null;

  return (
    <>

   

      <AppBar position="static" color="default" elevation={0} sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'center', paddingTop:10}}>
          <img src="/logo.png" alt="Website Logo" style={{ height: '70px' , alignItems:'center', justifyItems:'center'}} />
        </Toolbar>
      </AppBar>

     
      <Container component="main" maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'black',
            borderRadius: '16px',
            maxHeight: '40vh',
            paddingLeft: '20'


          }}
        >
            <Typography component="h1" variant="h4" sx={{ mb: 3 }} color={'white'} paddingTop={5} fontFamily={'cursive'} textAlign={'center'}>
            Log In
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
    //console.log('Fetching providers...');
    const providers = await getProviders();
    //console.log('Providers fetched:', providers);

    return {
      props: { providers },
    };
  } catch (error) {
    //console.error('Error fetching providers:', error);
    return {
      props: { providers: null },
    };
  }
}

export default Login;
