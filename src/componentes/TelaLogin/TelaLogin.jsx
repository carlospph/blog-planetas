import { Botao } from '../Botao/Botao.jsx';
import { Campo } from '../Campo/Campo.jsx';
import { NavLink } from 'react-router-dom';
export function TelaLogin() {
  return (
    <section className="flex flex-row items-center justify-center h-screen px-3">
      <div className="flex flex-col gap-5 px-2 bg-gray-200 w-md rounded-md pt-3 pb-8">
        <h3 className="text-center text-4xl font-semibold mt-5 mb-2">
          Área de login
        </h3>
        <Campo type="text" placeholder="Nome" />
        <Campo type="email" placeholder="E-mail" />
        <Botao text="Acessar" bgcolor="bg-green-600" />
        <p className="text-center mt-3">
          <NavLink
            to="/esqueciMinhaSenha"
            className="text-black font-semibold hover:bg-red-200 p-2"
          >
            Esqueceu sua administrativa?
          </NavLink>
        </p>
      </div>
    </section>
  );
}
