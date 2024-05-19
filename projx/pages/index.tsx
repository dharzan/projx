import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/loginPage',
      permanent: false,
    },
  };
};

const Home = () => {
  return null; // This page will never render because of the redirect.
};

export default Home;
