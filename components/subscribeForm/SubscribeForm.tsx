import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
const SubscribeForm = () => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm w-[80%]">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="email"
        name="email"
        className=" w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
        placeholder="you@example.com"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  ">
        <button className="h-full w-full text-white bg-orbitPurple px-4 rounded-r-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
