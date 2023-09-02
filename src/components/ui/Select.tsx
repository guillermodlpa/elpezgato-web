import { useId } from "react";

export default function Select({
  name,
  required,
  disabled,
  label,
  "aria-label": ariaLabel,
  helperText,
  value,
  onChange,
  options,
  allowEmpty = true,
  containerProps,
  selectProps,
  labelProps,
}: {
  name?: JSX.IntrinsicElements["select"]["name"];
  required?: JSX.IntrinsicElements["select"]["required"];
  disabled?: JSX.IntrinsicElements["select"]["disabled"];
  label?: string;
  "aria-label"?: string;
  helperText?: React.ReactNode;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  allowEmpty?: boolean;
  containerProps?: JSX.IntrinsicElements["div"];
  selectProps?: JSX.IntrinsicElements["select"];
  labelProps?: JSX.IntrinsicElements["label"];
}) {
  const generatedSelectId = useId();
  const selectId = selectProps?.id ?? generatedSelectId;

  return (
    <div
      {...containerProps}
      className={`group ${containerProps?.className ?? ""}`}
    >
      {label && (
        <label
          htmlFor={selectId}
          className="block mb-2 text-sm font-medium text-gray-900"
          {...labelProps}
        >
          {label}
        </label>
      )}

      <select
        id={selectId}
        className="bg-white disabled:bg-gray-100 border transition-shadow border-gray-300 text-gray-900 text-md rounded-lg group-hover:ring-1 group-hover:ring-primary-500 focus:ring-primary-500 focus:border-primary-500 focus-visible:outline-primary-500 block w-full p-2.5"
        required={required}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        {...selectProps}
      >
        <option
          value=""
          style={!allowEmpty ? { display: "none" } : undefined}
        ></option>

        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {helperText && (
        <p
          className="mt-1 text-xs text-gray-500"
          id={`${selectId}-helper-text`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
