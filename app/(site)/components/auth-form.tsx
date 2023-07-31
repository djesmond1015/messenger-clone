'use client';

import { useState, useCallback } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';

import AuthSocialButton from './authSocial-button';
import Input from '@/components/inputs/input';
import Button from '@/components/button';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = () => {};
  const socialAction = () => {};

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6'
        >
          {variant === 'REGISTER' && (
            <Input
              id='name'
              label='Name'
              required
              disabled={isLoading}
              register={register}
              errors={errors}
            />
          )}
          <Input
            id='email'
            label='Email Address'
            required
            type='email'
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <Input
            id='password'
            label='Password'
            required
            type='password'
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type='submit'
            >
              {variant === 'LOGIN' ? 'Sign In' : 'Register'}
            </Button>
          </div>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 text-gray-500 bg-white'>
                Or continue with
              </span>
            </div>
          </div>
          <div className='flex gap-2 mt-6'>
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => {}}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className='flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500'>
          <div>
            {variant === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </div>
          <div
            onClick={toggleVariant}
            className='underline cursor-pointer'
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
