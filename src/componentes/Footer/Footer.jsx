export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo / Nome do site */}
          <div>
            <h2 className="text-xl font-bold text-white">MeuSite</h2>
            <p className="mt-2 text-sm">
              Explorando o universo de planetas, estrelas e mares.
            </p>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Navegação</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Recursos</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-white font-semibold mb-2">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                🪐
              </a>
              {/* Saturno / planeta com anéis */}
              <a href="#" className="hover:text-white">
                🌍
              </a>
              {/* Terra */}
              <a href="#" className="hover:text-white">
                🌌
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © 2026 MeuSite. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
