export function Card({ children, ...props }) {
  return <div className="bg-white rounded-lg shadow p-4" {...props}>{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}