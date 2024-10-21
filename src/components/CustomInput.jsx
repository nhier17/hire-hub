import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormFieldType = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
  PHONE_INPUT: "phoneInput",
  DATE_PICKER: "datePicker",
}

const RenderInput = ({ fieldType, value, name, placeholder, onChange, icon, toggleIcon, onToggle, showPassword, options, type, required, dateFormat }) => {
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
          className="text-black border my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none  focus:ring focus:border-blue-300"
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
      case FormFieldType.DATE_PICKER:
        return (
          <div className="relative w-full">
          {icon && (
            <div className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black">
              {icon}
            </div>
          )}
          <ReactDatePicker
          selected={value}
          onChange={(date) => onChange({ target: { value: date } })}
          dateFormat={dateFormat ?? "MM/dd/yyyy"}
          wrapperClassName="date-picker"
        />
        </div>
        )
    default:
      return null;
  }
};

const CustomInput = ({ fieldType, value, placeholder, onChange, icon, toggleIcon, onToggle, showPassword, options, type, required, dateFormat, name }) => {
  return (
    <div className="relative w-full">
      <RenderInput
        fieldType={fieldType}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        icon={icon}
        toggleIcon={toggleIcon}
        onToggle={onToggle}
        showPassword={showPassword}
        options={options}
        required={required}
        dateFormat={dateFormat}
      />
    </div>
  );
};


export default CustomInput;
