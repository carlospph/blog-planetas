export function Botao({ text, bgcolor }) {
  return (
    <button
      className={`${bgcolor} px-3 py-3 text-white font-semibold cursor-pointer`}
    >
      {text}
    </button>
  );
}
