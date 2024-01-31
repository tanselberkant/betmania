import Image from 'next/image';
import React from 'react';

type Props = {
  classes: string;
};

const CompanyImage = ({ classes }: Props) => {
  return (
    <>
      <Image
        width={500}
        height={500}
        className={classes}
        src="/layout/logo.png"
        alt="betorbit-logo"
      />
    </>
  );
};

export default CompanyImage;
