import { useId } from "react";

export default function Input({
  name,
  type,
  placeholder,
  required,
  disabled,
  label,
  value,
  onChange,
  helperText,
  iconRight,
  containerProps,
  inputProps,
  labelProps,
}: {
  name?: JSX.IntrinsicElements["input"]["name"];
  type?: JSX.IntrinsicElements["input"]["type"];
  placeholder?: JSX.IntrinsicElements["input"]["placeholder"];
  required?: JSX.IntrinsicElements["input"]["required"];
  disabled?: JSX.IntrinsicElements["input"]["disabled"];
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: React.ReactNode;
  containerProps?: JSX.IntrinsicElements["div"];
  inputProps?: JSX.IntrinsicElements["input"];
  labelProps?: JSX.IntrinsicElements["label"];
  iconRight?: React.ReactNode;
}) {
  const generatedInputId = useId();
  const inputId = inputProps?.id ?? generatedInputId;

  return (
    <div
      {...containerProps}
      className={`group ${containerProps?.className ?? ""}`}
    >
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 text-sm font-medium text-gray-900"
          {...labelProps}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          className={`bg-white disabled:bg-gray-100 border transition-shadow border-gray-300 text-gray-900 text-md rounded-lg group-hover:ring-1 group-hover:ring-primary-500 focus:ring-primary-500 focus-visible:outline-primary-500 focus:border-primary-500 block w-full p-2.5 ${
            iconRight ? "pr-4" : ""
          }`}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          aria-describedby={helperText ? `${inputId}-helper-text` : undefined}
          {...inputProps}
        />

        {iconRight && (
          <div
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={(event) => event.stopPropagation()}
          >
            {iconRight}
          </div>
        )}
      </div>

      {helperText && (
        <p className="mt-1 text-xs text-gray-500" id={`${inputId}-helper-text`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
