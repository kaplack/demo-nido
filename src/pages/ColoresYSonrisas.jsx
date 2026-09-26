import { Link } from 'react-router-dom'
import '../styles/colores-y-sonrisas.css'

export default function ColoresYSonrisas() {
  return (
    <div className="nido-demo">
      <div className="demo-strip">
        <span>Demo comercial · contenido referencial</span>
        <div>
          <Link to="/">Más demos</Link>
          <a href="mailto:contacto@alanburga.com?subject=Quiero%20una%20web%20de%20matrícula%20para%20mi%20nido">Quiero una como esta</a>
        </div>
      </div>

      <header className="nav">
        <div className="wrap navin">
          <a className="logo" href="#inicio">
            <i>☀</i>
            <span>Colores <small>y Sonrisas</small></span>
          </a>

          <nav>
            <a href="#matricula">Matrícula 2027</a>
            <a href="#niveles">Niveles</a>
            <a href="#requisitos">Requisitos</a>
            <a href="#preguntas">Preguntas</a>
          </nav>

          <a className="btn mini" href="#formulario">Quiero matricularme</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="wrap heroGrid">
            <div>
              <p className="eyebrow">Matrículas 2027</p>
              <h1>Tu peque puede empezar una nueva aventura con nosotros.</h1>
              <p className="lead">Conoce los niveles disponibles, revisa la información de matrícula y completa el proceso desde tu celular.</p>

              <div className="actions">
                <a className="btn" href="#formulario">Quiero matricularme</a>
                <a className="textLink" href="#matricula">Ver información de matrícula ↓</a>
              </div>

              <div className="facts">
                <span><b>01</b>Revisa la información</span>
                <span><b>02</b>Completa la ficha</span>
                <span><b>03</b>El nido te contacta</span>
              </div>
            </div>

            <div className="art">
              <div className="sun">☀</div>
              <div className="bubble one"></div>
              <div className="bubble two"></div>
              <div className="quote">💛<br />Matrícula 2027<br /><b>simple y desde el celular.</b></div>
            </div>
          </div>
        </section>

        <section className="section" id="matricula">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Información de matrícula</p>
              <h2>Todo lo que una familia necesita saber antes de iniciar.</h2>
            </div>
            <div className="info-panel">
              <div><b>Inicio de clases</b><span>Dato referencial</span></div>
              <div><b>Horario</b><span>Turnos según disponibilidad</span></div>
              <div><b>Proceso</b><span>Ficha → revisión → confirmación</span></div>
              <div><b>Atención</b><span>Contacto directo con el nido</span></div>
            </div>
          </div>
        </section>

        <section className="section alt" id="niveles">
          <div className="wrap">
            <p className="eyebrow">Niveles disponibles</p>
            <h2>Elige el nivel que corresponde a tu peque.</h2>
            <div className="cards">
              <article><span className="n coral">2</span><h3>2 años</h3><p>Información del aula, horario y vacantes.</p></article>
              <article><span className="n yellow">3</span><h3>3 años</h3><p>Información del aula, horario y vacantes.</p></article>
              <article><span className="n mint">4–5</span><h3>4 y 5 años</h3><p>Información del aula, horario y vacantes.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="requisitos">
          <div className="wrap requirements">
            <div>
              <p className="eyebrow">Requisitos</p>
              <h2>Antes de empezar tu matrícula.</h2>
              <p className="soft">En la versión final, el nido define exactamente qué documentos y datos necesita.</p>
            </div>
            <div className="checklist">
              <span>✓ Datos del niño o niña</span>
              <span>✓ Datos del padre, madre o apoderado</span>
              <span>✓ Nivel y turno</span>
              <span>✓ Información de contacto</span>
              <span>✓ Documentos, si el nido los solicita</span>
            </div>
          </div>
        </section>

        <section className="section form-section" id="formulario">
          <div className="wrap form-layout">
            <div>
              <p className="eyebrow">Matrícula online</p>
              <h2>Quiero matricularme</h2>
              <p className="soft">Esta es una demostración del flujo. Los campos finales se adaptan al proceso real del nido.</p>
            </div>

            <form className="enrollment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <label>Nombre del niño o niña<input type="text" placeholder="Ej. Mateo Pérez" /></label>
                <label>Edad<select defaultValue=""><option value="" disabled>Selecciona</option><option>2 años</option><option>3 años</option><option>4 años</option><option>5 años</option></select></label>
                <label>Padre, madre o apoderado<input type="text" placeholder="Nombre completo" /></label>
                <label>WhatsApp<input type="tel" placeholder="999 999 999" /></label>
                <label>Nivel<select defaultValue=""><option value="" disabled>Selecciona</option><option>2 años</option><option>3 años</option><option>4 años</option><option>5 años</option></select></label>
                <label>Turno<select defaultValue=""><option value="" disabled>Selecciona</option><option>Mañana</option><option>Tarde</option></select></label>
              </div>
              <label>Comentario opcional<textarea rows="4" placeholder="Cuéntanos algo que debamos saber"></textarea></label>
              <button className="btn submit" type="submit">Enviar solicitud de matrícula</button>
              <small className="form-note">Demo visual: este formulario todavía no guarda información.</small>
            </form>
          </div>
        </section>

        <section className="section faq" id="preguntas">
          <div className="wrap">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Respuestas antes de matricular.</h2>
            <div className="faq-grid">
              <article><b>¿Cómo sé si hay vacantes?</b><p>La información puede mostrarse aquí o confirmarse luego de enviar la ficha.</p></article>
              <article><b>¿Puedo iniciar desde mi celular?</b><p>Sí. Todo el flujo está pensado para móvil.</p></article>
              <article><b>¿La matrícula queda confirmada al enviar?</b><p>No necesariamente. El nido define su proceso de revisión y confirmación.</p></article>
            </div>
          </div>
        </section>

        <section className="section dashboard-preview">
          <div className="wrap dashboard-callout">
            <div>
              <p className="eyebrow">Para el nido</p>
              <h2>Las solicitudes llegan a un panel resumen.</h2>
              <p>El dueño o administrador puede ver interesados, solicitudes y estados sin depender de conversaciones dispersas.</p>
            </div>
            <Link className="btn dashboard-btn" to="/demos/colores-y-sonrisas/admin">Ver dashboard demo</Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>Demo comercial · Alan Burga Web</span>
          <Link to="/">Volver al selector de demos</Link>
        </div>
      </footer>
    </div>
  )
}