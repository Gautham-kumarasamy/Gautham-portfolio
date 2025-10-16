import React from 'react';
import { useSelector } from 'react-redux';
import Table from './common/Table.jsx';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
];

const AdditionalInfoTable = () => {
  const additionalInfo = useSelector((state) => state.additionalInfo.data);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Additional Information</h2>
        <Table data={additionalInfo} columns={columns} />
      </div>
    </div>
  );
};

export default AdditionalInfoTable;
