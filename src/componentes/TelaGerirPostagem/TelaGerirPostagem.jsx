import { Botao } from '../Botao/Botao.jsx';
import { Campo } from '../Campo/Campo.jsx';
import { TextArea } from '../TextArea/TextArea.jsx';
import { TituloSessao } from '../TituloSessao/TituloSessao.jsx';

export function TelaGerirPostagem({ titulo }) {
  return (
    <section className="flex h-screen items-center justify-center">
      <form className="flex flex-col gap-3 px-5 py-8 bg-gray-200 my-3 w-4xl rounded-md">
      <TituloSessao titulo={titulo} />
      <Campo type="text" placeholder="Titulo" />
      <Campo type="text" placeholder="Categoria" />
      <TextArea placeholder="Conteúdo da postagem" />
      <Campo type="text" placeholder="urlImagem" />
      <Botao text="Acessar" bgcolor="bg-green-600" />
      <Botao text="Cancelar" bgcolor="bg-red-600" />
    </form>
    </section>
  );
}
