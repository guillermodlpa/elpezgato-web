import { useId } from "react";

export default function Checkbox({
  name,
  required,
  disabled,
  label,
  helperText,
  checked,
  value = "",
  onChange,
  containerProps,
  inputProps,
  labelProps,
}: {
  name?: JSX.IntrinsicElements["input"]["name"];
  required?: JSX.IntrinsicElements["input"]["required"];
  disabled?: JSX.IntrinsicElements["input"]["disabled"];
  label: React.ReactNode;
  helperText?: string;
  checked: boolean;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  containerProps?: JSX.IntrinsicElements["div"];
  inputProps?: JSX.IntrinsicElements["input"];
  labelProps?: JSX.IntrinsicElements["label"];
}) {
  const generatedInputId = useId();
  const inputId = inputProps?.id ?? generatedInputId;

  return (
    <div
      {...containerProps}
      className={`mb-4 ${containerProps?.className ?? ""}`}
    >
      <div className={`flex items-center group`}>
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          name={name}
          className="w-4 h-4 cursor-pointer transition-shadow text-primary-600 accent-primary-500 bg-white disabled:bg-gray-100 border-gray-300 rounded group-hover:ring-primary-500 group-hover:ring-1 focus:ring-primary-500 focus-visible:outline-primary-500 focus:ring-2"
          {...inputProps}
        />
        <label
          htmlFor={inputId}
          className="pl-2 text-sm font-medium text-gray-900 cursor-pointer"
          {...labelProps}
        >
          {label}
        </label>
      </div>

      {helperText && (
        <p
          className="mt-1 ml-6 text-xs text-gray-500"
          id={`${inputId}-helper-text`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
