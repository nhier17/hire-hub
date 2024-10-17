import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const FormFieldType = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  PHONE_INPUT: "phoneInput",
}

const RenderInput = ({ fieldType, name, value, placeholder, onChange, icon, toggleIcon, onToggle, showPassword, options, label, type, required }) => {
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="relative w-full">
          {icon && (
            <div className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black">
              {icon}
            </div>
          )}
          <input
            className="text-black border my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none  focus:ring focus:border-blue-300"
            type={type}
            name={name}
            label={label}
            placeholder={placeholder}
            value={value}  
            onChange={onChange}
            required={required}
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
    case FormFieldType.PHONE_INPUT:
      return (
        <div>
          <PhoneInput
            defaultCountry="KE"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={value}  
            name={name}
            onChange={(phone) => onChange({ target: { value: phone } })}
            required={required}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <textarea
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows="4"
        />
      );
    case FormFieldType.SELECT:
      return (
        <select
          className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};

const CustomInput = ({ fieldType, name, value, placeholder, onChange, icon, toggleIcon, onToggle, showPassword, options, label, type, required }) => {
  return (
    <div className="relative w-full">
      <RenderInput
        fieldType={fieldType}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        icon={icon}
        toggleIcon={toggleIcon}
        onToggle={onToggle}
        showPassword={showPassword}
        options={options}
        label={label}
        required={required}
      />
    </div>
  );
};


export default CustomInput;
