import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
