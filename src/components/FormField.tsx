import React, { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

interface BaseFieldProps {
  id: string;
  label?: string;
  error?: string;
  touched?: boolean;
  helperText?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type InputFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends BaseFieldProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'options'> {
  options: SelectOption[];
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  error,
  touched,
  helperText,
  required,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  helperClassName = '',
  leftIcon,
  rightIcon,
  ...props
}) => {
  const showError = touched && error;
  const inputBaseClasses = 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors';
  const inputStateClasses = showError
    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';
  const inputWithIconClasses = leftIcon ? 'pl-10' : '';
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}
        
        <input
          id={id}
          className={`${inputBaseClasses} ${inputStateClasses} ${inputWithIconClasses} ${inputClassName}`}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={showError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
      
      {showError && (
        <div 
          id={`${id}-error`} 
          className={`mt-1 text-sm text-red-600 flex items-center ${errorClassName}`}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
      
      {helperText && !showError && (
        <div id={`${id}-helper`} className={`mt-1 text-sm text-gray-500 ${helperClassName}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  label,
  error,
  touched,
  helperText,
  required,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  helperClassName = '',
  ...props
}) => {
  const showError = touched && error;
  const textareaBaseClasses = 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors';
  const textareaStateClasses = showError
    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={id}
        className={`${textareaBaseClasses} ${textareaStateClasses} ${inputClassName}`}
        aria-invalid={showError ? 'true' : 'false'}
        aria-describedby={showError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        {...props}
      />
      
      {showError && (
        <div 
          id={`${id}-error`} 
          className={`mt-1 text-sm text-red-600 flex items-center ${errorClassName}`}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
      
      {helperText && !showError && (
        <div id={`${id}-helper`} className={`mt-1 text-sm text-gray-500 ${helperClassName}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  error,
  touched,
  helperText,
  required,
  options,
  placeholder,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  helperClassName = '',
  ...props
}) => {
  const showError = touched && error;
  const selectBaseClasses = 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors';
  const selectStateClasses = showError
    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <select
        id={id}
        className={`${selectBaseClasses} ${selectStateClasses} ${inputClassName}`}
        aria-invalid={showError ? 'true' : 'false'}
        aria-describedby={showError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {showError && (
        <div 
          id={`${id}-error`} 
          className={`mt-1 text-sm text-red-600 flex items-center ${errorClassName}`}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
      
      {helperText && !showError && (
        <div id={`${id}-helper`} className={`mt-1 text-sm text-gray-500 ${helperClassName}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export const CheckboxField: React.FC<Omit<InputFieldProps, 'leftIcon' | 'rightIcon'>> = ({
  id,
  label,
  error,
  touched,
  helperText,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  helperClassName = '',
  ...props
}) => {
  const showError = touched && error;
  
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${inputClassName}`}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={showError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
        
        {label && (
          <label htmlFor={id} className={`ml-2 block text-sm text-gray-700 ${labelClassName}`}>
            {label}
          </label>
        )}
      </div>
      
      {showError && (
        <div 
          id={`${id}-error`} 
          className={`mt-1 text-sm text-red-600 flex items-center ${errorClassName}`}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
      
      {helperText && !showError && (
        <div id={`${id}-helper`} className={`mt-1 text-sm text-gray-500 ${helperClassName}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export const RadioField: React.FC<Omit<InputFieldProps, 'leftIcon' | 'rightIcon'> & { options: SelectOption[] }> = ({
  id,
  label,
  error,
  touched,
  helperText,
  options,
  className = '',
  labelClassName = '',
  inputClassName = '',
  errorClassName = '',
  helperClassName = '',
  ...props
}) => {
  const showError = touched && error;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <div className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName}`}>
          {label}
        </div>
      )}
      
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${id}-${option.value}`}
              type="radio"
              value={option.value}
              className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${inputClassName}`}
              aria-invalid={showError ? 'true' : 'false'}
              {...props}
            />
            <label htmlFor={`${id}-${option.value}`} className="ml-2 block text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      {showError && (
        <div 
          id={`${id}-error`} 
          className={`mt-1 text-sm text-red-600 flex items-center ${errorClassName}`}
        >
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
      
      {helperText && !showError && (
        <div id={`${id}-helper`} className={`mt-1 text-sm text-gray-500 ${helperClassName}`}>
          {helperText}
        </div>
      )}
    </div>
  );
}; 