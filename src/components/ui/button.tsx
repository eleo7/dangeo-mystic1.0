export function Button({ children, ...props }) {
  return <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded" {...props}>{children}</button>;
}