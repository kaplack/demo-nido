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
          <p className="kicker">Sistema de matrícula online para nidos</p>
          <h1>Demos para mostrar cómo podría funcionar.</h1>
          <p>Landing de matrícula, formulario para padres y un panel resumen para que el nido gestione solicitudes desde un solo lugar.</p>
          <div className="home-actions">
            <a className="primary-action" href="mailto:contacto@alanburga.com?subject=Quiero%20saber%20más%20sobre%20matrícula%20online">Quiero saber más</a>
            <span>Adaptamos el flujo al proceso real de cada nido.</span>
          </div>
        </section>

        <section className="grid">
          <Link className="card" to="/demos/colores-y-sonrisas">
            <div className="cover c1"><span>Demo 01</span></div>
            <div className="body">
              <small>Matrícula online</small>
              <h2>Colores y Sonrisas</h2>
              <p>Landing enfocada en matrícula, formulario de inscripción y dashboard de gestión.</p>
              <b>Ver experiencia →</b>
            </div>
          </Link>

          <div className="card off" aria-disabled="true">
            <div className="cover c2"><span>Próximamente</span></div>
            <div className="body">
              <small>Nueva propuesta</small>
              <h2>Demo 02</h2>
              <p>Otra propuesta visual y flujo de matrícula para un segundo nido.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">demo-nido.alanburga.com · demos comerciales</footer>
    </>
  )
}