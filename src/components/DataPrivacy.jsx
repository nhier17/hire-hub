import React from 'react';

const DataPrivacy = () => {
  return (
    <div className="data-privacy-settings space-y-6">
      <h2 className="text-2xl font-bold">Data Privacy</h2>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Download Your Data</label>
        <button className="p-2 bg-blue-500 text-white rounded-md">
          Download
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600">Manage Data Collection</label>
        <button className="p-2 bg-red-500 text-white rounded-md">
          Manage Data
        </button>
      </div>

      <p className="text-gray-500">
        Control how your data is collected and managed. You can download your personal data or manage data collection settings.
      </p>
    </div>
  );
};

export default DataPrivacy;
