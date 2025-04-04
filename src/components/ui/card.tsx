import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, ...props }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4" {...props}>
      {children}
    </div>
  );
}

type CardContentProps = {
  children: ReactNode;
};

export function CardContent({ children }: CardContentProps) {
  return <div className="mt-2">{children}</div>;
}
