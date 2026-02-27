import { Botao } from '../Botao/Botao';
import './ConteudoBlog.css';

export function ConteudoBlog() {
  return (
    <>
      <section className="pt-[5em] md:pt-[10em] flex items-center min-h-screen px-6">
        {/*CardsNoticias*/}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-7xl mx-auto lg:items-center">
          <div>
            <h4 className="text-5xl font-bold pb-3">
              NASA comemora o 250 o aniversário da América
            </h4>
            <h5 className="text-[20px] font-semibold my-2">
              Nosso espírito de aventura e inovação elevará nossa nação a novos
              patamares.
            </h5>
            <p className="text-[18px]">
              Desde os primeiros dias de exploração, até os primeiros passos na
              Lua e as missões que moldam nosso futuro, a NASA representa o
              espírito de descoberta que define nossa nação. À medida que os
              Estados Unidos se aproximam de seu semiquincentenário, a Freedom
              250 destaca como a inovação, a coragem e a liderança científica
              levaram a América adiante – e como a NASA continua a expandir a
              fronteira para a próxima geração.
            </p>
            <Botao text="Saiba mais" />
          </div>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1447433865958-f402f562b843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxlc3BhJUMzJUE3b3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Notícia principal"
              className="w-full "
            />
            <figcaption className="text-[13px] text-gray-500 pt-2">
              Imgem da internet capturada para demonstrar dados e noticiar
              informações. A Nasa vem com a ideia de que o centro de estudos é
              suficiente para estudos climáticos, analise da agricultura e
              formação de cultivo para o agronégocio.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-2 py-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-semibold mb-10">Notícias hoje</h3>

        <div className="grid-conteudo max-w-7xl mx-auto gap-5">
          {/* Card imagem 1 */}
          <div className="card-conteudo card-1">
            <img
              src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Planet azul"
              className="w-full"
            />
            <p>
              A Terra é o nosso único e vibrante oásis no cosmos, um delicado
              equilíbrio de vida e beleza que brilha como um ponto azul pálido
              na imensidão do espaço.
            </p>
          </div>

          {/* Card imagem 2 */}
          <div className="card-conteudo card-2">
            <img src="https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p>
              Em Marte o pôr do sol é azul devido à maneira como a poeira fina
              na atmosfera dispersa a luz.
            </p>
          </div>

          {/* Card imagem 3 */}
          <div className="card-conteudo card-3">
            <img src="https://images.unsplash.com/photo-1562832135-14a35d25edef?q=80&w=1245&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <p>
              A Lua é a guardiã silenciosa das nossas noites, uma lanterna
              cósmica que rege as marés
            </p>
          </div>

          {/* Card imagem 4 */}
          <div className="card-conteudo card-4">
            <img
              src="https://images.unsplash.com/photo-1674054698653-673d3664cd7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Aqui está uma frase que conecta a inovação tecnológica ao cultivo
              da terra, unindo tradição e futuro: "A tecnologia é a nova semente
              do campo: onde antes apenas o suor regia a colheita.
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 pt-6 pb-[100px] max-w-7xl mx-auto">
        <h3 className="text-4xl mb-10 mt-8">Notícias da hora</h3>
        <div className="flex-thumbnail gap-5">
          <div className="card-conteudo card-thumbnail">
            <img
              src="https://plus.unsplash.com/premium_photo-1717598582951-61aa2c602801?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Marte"
              className="w-100 h-[150px] object-cover"
            />
            <p>
              Marte guarda desertos vermelhos e segredos antigos, lembrando-nos
              da vastidão do universo.
            </p>
          </div>

          <div className="card-conteudo card-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1561046582-8f3224fcdab2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Estrela brilhante"
              className="w-100 h-[150px] object-cover"
            />
            <p>
              As estrelas cintilam como faróis eternos, guiando viajantes e
              inspirando sonhos sem fim.
            </p>
          </div>

          <div className="card-conteudo card-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mar profundo"
              className="w-100 h-[150px] object-cover"
            />
            <p>
              Os mares escondem mundos misteriosos, onde cada onda carrega
              histórias de vida e eternidade.
            </p>
          </div>

          <div className="card-conteudo card-thumbnail">
            <img
              src="https://plus.unsplash.com/premium_photo-1717550852933-972e61c7d6c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVwdGVyfGVufDB8fDB8fHww"
              alt="Planeta gigante"
              className="w-100 h-[150px] object-cover"
            />
            <p>
              Júpiter, com sua força colossal, é guardião dos céus e espetáculo
              de tempestades eternas.
            </p>
          </div>

          <div className="card-conteudo card-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1567866885012-3c7171d2c5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNvbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Constelação"
              className="w-100 h-[150px] object-cover"
            />
            <p>
              As constelações desenham mapas celestes, conectando mitos e
              esperanças através da noite.
            </p>
          </div>

          <div className="card-conteudo card-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1587923623987-c7e4083beb23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNvbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Mar tranquilo"
              className="w-100 h-[150px] object-cover"
            />
            <p>
              O mar tranquilo reflete o céu, lembrando que Terra e cosmos dançam
              em perfeita harmonia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
