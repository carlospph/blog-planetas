import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const ocultarMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  return (
    <header className="bg-white py-3 shadow-md fixed w-full z-[10]">
      <div className="navbar flex justify-between max-w-6xl mx-auto items-center">
        {/* LOGO */}
        <Link to="/">
          <h2 className="text-2xl font-bold text-blue-600 text-3xl flex items-center">
            <i className="fas fa-bolt"></i>
            <p>BlogFire</p>
          </h2>
        </Link>

        {/* Menu DESKTOP */}
        <ul className="px-4 flex gap-5 hidden md:flex">
          <li>
            <NavLink to="/" className="text-[20px] text-blue-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="text-[20px] text-blue-500">
              Login
            </NavLink>
          </li>
        </ul>

        {/* MENU MOBILE */}
        {/* só mostrar quando a tela é menor e ao clicar no botão */}
        {showMenuMobile && (
          <ul className="px-4 flex flex-col gap-5 md:hidden absolute bg-blue-400 w-full h-screen top-[100%] pt-6">
            <li>
              <NavLink
                to="/"
                className="text-[20px] text-white"
                onClick={ocultarMenuMobile}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="text-[20px] text-white"
                onClick={ocultarMenuMobile}
              >
                Login
              </NavLink>
            </li>
            
          </ul>
        )}

        {/* Botão do MENU HAMBURGUER */}
        <button className="block md:hidden z-50" onClick={ocultarMenuMobile}>
          <i
            className={`fas ${
              showMenuMobile ? 'fa-times' : 'fa-bars'
            } text-[35px] cursor-pointer text-blue-600`}
          ></i>
        </button>
      </div>
    </header>
  );
}
