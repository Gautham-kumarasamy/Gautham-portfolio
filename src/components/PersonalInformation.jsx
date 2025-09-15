import React from 'react';
import PropTypes from 'prop-types';

const PersonalInformation = ({ name, email, location, phone }) => {
  return (
    <div className="bg-gray-700 rounded-lg px-4 py-2 ml-4 flex flex-col items-start text-xs text-left min-w-[160px]">
      <div className="font-semibold text-white mb-1">Personal Info</div>
      <div className="text-gray-200">Name: <span className="font-medium">{name}</span></div>
      <div className="text-gray-200">Email: <span className="font-medium">{email}</span></div>
      <div className="text-gray-200">Location: <span className="font-medium">{location}</span></div>
      <div className="text-gray-200">Phone: <span className="font-medium">{phone}</span></div>
    </div>
  );
};

PersonalInformation.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default PersonalInformation;
