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
            <div className="contact-actions" aria-label="Contactar a Alan Burga Web">
              <a
                className="contact-icon email"
                href="mailto:contacto@alanburga.com?subject=Quiero%20saber%20más%20sobre%20matrícula%20online"
                aria-label="Contactar por correo"
                title="Correo"
              >
                ✉
              </a>
              <a
                className="contact-icon whatsapp"
                href="https://wa.me/51980784509?text=Hola%20Alan,%20quiero%20saber%20más%20sobre%20la%20web%20de%20matrícula%20para%20mi%20nido."
                target="_blank"
                rel="noreferrer"
                aria-label="Contactar por WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16 3.2A12.5 12.5 0 0 0 5.37 22.27L3.6 28.8l6.7-1.75A12.5 12.5 0 1 0 16 3.2Zm0 22.73c-1.89 0-3.74-.52-5.35-1.5l-.38-.22-3.98 1.04 1.06-3.88-.25-.4A10.2 10.2 0 1 1 16 25.93Zm5.6-7.64c-.3-.15-1.8-.9-2.08-.99-.28-.1-.48-.15-.69.15-.2.3-.79.99-.97 1.19-.18.2-.36.22-.67.07-.3-.15-1.29-.47-2.46-1.5-.91-.81-1.53-1.81-1.71-2.12-.18-.3-.02-.46.13-.61.14-.14.3-.36.46-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.54-.07-.15-.68-1.65-.94-2.26-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.19 4.59.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.08-.12-.28-.2-.59-.35Z"/>
                </svg>
              </a>
            </div>
            <span>Adaptamos el flujo al proceso real de cada nido.</span>
          </div>
        </section>

        <section className="grid">
          <Link className="card" to="/demos/colores-y-sonrisas">
            <div className="cover c1 logo-cover">
              <span>Demo 01</span>
              <img
                src="/colores-y-sonrisas/logo.png"
                alt="Logo Colores y Sonrisas"
                className="demo-card-logo"
              />
            </div>
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