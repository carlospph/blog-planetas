export function Campo({ type, placeholder }) {
  return (
    <>
      <input type={type} 
      placeholder={placeholder}
        className="border border-gray-300 py-3 px-2 rounded-sm w-full bg-white"
      />
    </>
  );
}
