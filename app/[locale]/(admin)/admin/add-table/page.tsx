import TableAddForm from '@/components/table/TableAddForm';

import React from 'react';

const AddTablePage = () => {
  return (
    <>
      <h2 className="my-2 text-center text-xl"> Tablo Ekleme </h2>
      <p className="text-red-500 text-center">
        Saat Datasını tipsbet'de gördüğünüz gibi girin!
      </p>
      <TableAddForm />
    </>
  );
};

export default AddTablePage;
