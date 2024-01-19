'use client';

import { getSession, signIn } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import CompanyImage from '../CompanyImage';
import { Link } from '@/navigation';
// import { useFormState } from 'react-dom';

const LoginForm = () => {
  // const [state, formAction] = useFormState(login, undefined);

  const locale = useLocale();
  const [error, setError] = useState<string>();
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (error) setError(undefined);

    const formData = new FormData(event.currentTarget);
    console.log('formData', formData);
    await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false,
    }).then(async (result) => {
      if (result?.error) {
        setError(result.error);
      } else {
        await getSession(); // Oturumu yenile
        router.push('/' + locale);
      }
    });
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <CompanyImage classes={'mx-auto h-10 w-auto'} />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Giriş yap
        </h2>
        <div className="mt-2 flex justify-center">
          <Link href={'/'} className="text-blue-500">
            Anasayfaya Dön{' '}
          </Link>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="/api/auth/callback/credentials"
          method="post"
          onSubmit={onSubmit}
        >
          {/* <form className="space-y-6" action={formAction} method="post"> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        {error && (
          <p className="mt-10 text-center text-sm text-gray-500">{error}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
