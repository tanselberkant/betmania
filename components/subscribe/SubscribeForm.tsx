'use client';

import { useState, useEffect, FormEvent } from 'react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { addSubscriber } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { useLocale } from 'next-intl';

import confetti from 'canvas-confetti';

const runConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const SubscribeForm = () => {
  const locale = useLocale();
  const [state, formAction] = useFormState(addSubscriber, undefined);
  const [email, setEmail] = useState('');
  const [isExist, setIsExist] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // CATCHING THE STATE OF THE FORM
  useEffect(() => {
    if (state === 'Subscriber saved successfully') {
      setShowMessage(true);
      setIsExist(false);
      setEmail('');
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      runConfetti();
      return () => clearTimeout(timer); // cleartimeout when component unmount
    } else if (state === 'Mail allready exist') {
      setShowMessage(true);
      setIsExist(true);
      setEmail('');

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer); // cleartimeout when component unmount
    }
  }, [state]);

  // SUBMITTIN THE FORM
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('formData', email);
    formAction(email);
  };

  return (
    <div className="relative mt-2 rounded-md shadow-sm w-[90%] md:w-[80%]">
      <form onSubmit={handleSubmit}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          className=" w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className=" absolute inset-y-0 right-0 flex items-center ">
          <button
            type="submit"
            className="h-full w-full text-white bg-orbitPurple px-2 md:px-4 rounded-r-md "
          >
            Submit
          </button>
        </div>
      </form>
      {showMessage && (
        <p className="absolute text-betOrbitMainSilver mt-4">
          {isExist
            ? locale === 'tr'
              ? 'Zaten bir kaydınız var'
              : 'You have a registration already'
            : locale === 'tr'
            ? 'Kaydınız başarıyla oluşturuldu, teşekkürler...'
            : 'Your registration has been successfully created, thank you...'}
        </p>
      )}
    </div>
  );
};

export default SubscribeForm;
