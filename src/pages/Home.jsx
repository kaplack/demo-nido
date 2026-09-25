import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap top">
          <strong>Alan Burga Web</strong>
          <span>Demos para nidos</span>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <p className="kicker">Páginas web estáticas · rápidas · responsivas</p>
          <h1>Elige una demo</h1>
          <p>Propuestas visuales que pueden adaptarse al logo, colores, fotografías e información de cada institución.</p>
        </section>

        <section className="grid">
          <Link className="card" to="/demos/colores-y-sonrisas">
            <div className="cover c1"><span>Demo 01</span></div>
            <div className="body">
              <small>Educación inicial</small>
              <h2>Colores y Sonrisas</h2>
              <p>Propuesta cálida y moderna, orientada a consultas de matrícula desde celular y WhatsApp.</p>
              <b>Ver demo →</b>
            </div>
          </Link>

          <div className="card off" aria-disabled="true">
            <div className="cover c2"><span>Próximamente</span></div>
            <div className="body">
              <small>Nueva propuesta</small>
              <h2>Demo 02</h2>
              <p>Espacio preparado para la siguiente demo.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">demo-nido.alanburga.com</footer>
    </>
  )
}