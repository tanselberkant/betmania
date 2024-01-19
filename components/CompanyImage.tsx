import React from 'react';

type Props = {
  classes: string;
};

const CompanyImage = ({ classes }: Props) => {
  return (
    <>
      <img
        className={classes}
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="betmania"
      />
    </>
  );
};

export default CompanyImage;
