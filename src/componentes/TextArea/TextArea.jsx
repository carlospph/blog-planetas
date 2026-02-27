export function TextArea({ placeholder }) {
  return (
    <textarea
      className="border border-gray-300 py-3 px-2 rounded-sm w-full min-h-[200px] resize-none bg-white"
      placeholder={placeholder}
    ></textarea>
  );
}
