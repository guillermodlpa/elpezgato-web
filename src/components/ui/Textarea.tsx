import { useId } from "react";

export default function Textarea({
  name,
  placeholder,
  required,
  disabled,
  label,
  value,
  onChange,
  containerProps,
  textareaProps,
  labelProps,
}: {
  name?: JSX.IntrinsicElements["textarea"]["name"];
  placeholder?: JSX.IntrinsicElements["textarea"]["placeholder"];
  required?: JSX.IntrinsicElements["textarea"]["required"];
  disabled?: JSX.IntrinsicElements["textarea"]["disabled"];
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  containerProps?: JSX.IntrinsicElements["div"];
  textareaProps?: JSX.IntrinsicElements["input"];
  labelProps?: JSX.IntrinsicElements["label"];
}) {
  const generatedTextareaId = useId();
  const textareaId = textareaProps?.id ?? generatedTextareaId;

  return (
    <div
      {...containerProps}
      className={`group ${containerProps?.className ?? ""}`}
    >
      {label && (
        <label
          htmlFor={textareaId}
          className="block mb-2 text-sm font-medium text-gray-900"
          {...labelProps}
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        className="bg-white disabled:bg-gray-100 border transition-shadow border-gray-300 text-gray-900 text-md rounded-lg group-hover:ring-1 group-hover:ring-primary-500 focus:ring-primary-500 focus:border-primary-500 focus-visible:outline-primary-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        name={name}
        value={value}
        // @ts-ignore
        onChange={onChange}
        {...textareaProps}
      />
    </div>
  );
}
