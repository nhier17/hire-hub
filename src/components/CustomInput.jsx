import React from 'react';

const CustomInput = ({ type, name, value, placeholder, onChange, icon, toggleIcon, onToggle, showPassword }) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black">
        {icon}
      </div>
      <input
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {toggleIcon && (
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-lg"
          onClick={onToggle}
        >
          {showPassword ? toggleIcon.hide : toggleIcon.show}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
