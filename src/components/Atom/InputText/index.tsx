import React, { ChangeEventHandler } from "react";

interface InputTextProps {
  id: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export default function InputText(props: InputTextProps) {
  const { id, label, onChange, value } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-poppins-semibold text-black uppercase"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        className="bg-slate-50 border border-slate-300 text-slate-900 text-lg rounded-lg focus:ring-blue-400 focus:ring-2 outline-none transition-all ease-in-out duration-300 block w-full p-3 placeholder:text-base placeholder:font-poppins-medium mb-6"
        placeholder="Tambahkan nama activity"
        onChange={onChange}
      />
    </div>
  );
}
