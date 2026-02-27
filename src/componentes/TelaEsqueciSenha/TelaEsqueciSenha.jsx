import { NavLink } from 'react-router-dom';
import { Botao } from '../Botao/Botao.jsx';
import { Campo } from '../Campo/Campo.jsx';

export function TelaEsqueciSenha() {
  return (
    <section className="flex h-screen flex items-center justify-center px-2">
      <form className="flex flex-col gap-3 px-3 bg-gray-200 py-8 my-4 w-2xl rounded-md">
        <h3 className="text-center text-4xl font-semibold mt-5 mb-2">
          Esqueceu sua senha?
        </h3>
        <p className="text-center">
          Preencha com e-mail para reenviarmos as instruções para recuperar
          senha!
        </p>
        <Campo type="email" placeholder="E-mail" />
        <Botao text="Enviar/recuperar senha" bgcolor="bg-green-800" />
        <div className="p-2 text-center mx-auto">
          <NavLink to="/login" className="hover:bg-red-200 p-2">
            Retornar ao login
          </NavLink>
        </div>
      </form>
    </section>
  );
}
