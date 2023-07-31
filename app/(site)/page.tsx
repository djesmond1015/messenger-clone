import Image from 'next/image';

import AuthForm from './components/auth-form';

const AuthPage = () => {
  return (
    <div className='flex flex-col justify-center min-h-full py-12 bg-gray-100 sm:px-4 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          src='/images/logo.png'
          alt='Messenger Logo'
          width='48'
          height='48'
          className='w-auto mx-auto'
        />
        <h2 className='mt-6 text-3xl font-bold tracking-tight text-center text-gray-900'>
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
