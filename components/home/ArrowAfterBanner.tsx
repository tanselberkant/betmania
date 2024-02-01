import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

const ArrowAfterBanner = () => {
  return (
    <div className="absolute top-0 flex bg-orbitOrange  justify-center w-full py-10">
      <div className="">
        <EnvelopeIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ArrowAfterBanner;
