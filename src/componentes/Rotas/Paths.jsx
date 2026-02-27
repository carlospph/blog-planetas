import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Blog } from '../Pages/Blog/Blog.jsx';
import { TelaLogin } from '../TelaLogin/TelaLogin.jsx';
import { TelaGerirPostagem } from '../TelaGerirPostagem/TelaGerirPostagem.jsx';
import { TelaEsqueciSenha } from '../TelaEsqueciSenha/TelaEsqueciSenha';
import { Footer } from '../Footer/Footer';

export function Paths() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/painelAdmin" element={<TelaGerirPostagem />} />
        <Route path="/esqueciMinhaSenha" element={<TelaEsqueciSenha />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
