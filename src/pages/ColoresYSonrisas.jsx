import { Link } from 'react-router-dom'
import '../styles/colores-y-sonrisas.css'

function Wordmark() {
  return (
    <span className="wordmark" aria-label="Colores y Sonrisas">
      <span className="c-coral">C</span><span className="c-yellow">o</span><span className="c-teal">l</span><span className="c-coral">o</span><span className="c-mint">r</span><span className="c-teal">e</span><span className="c-yellow">s</span>
      <span className="wordmark-y"> y </span><span className="c-teal">Sonrisas</span>
    </span>
  )
}

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
            <img src="/colores-y-sonrisas/logo.png" alt="Colores y Sonrisas Nido" />
          </a>

          <nav>
            <a href="#matricula">Matrícula 2027</a>
            <a href="#niveles">Niveles</a>
            <a href="#requisitos">Requisitos</a>
            <a href="#preguntas">Preguntas</a>
            <Link className="admin-demo-link" to="/demos/colores-y-sonrisas/admin">Admin demo</Link>
          </nav>

          <a className="btn mini" href="#formulario">Quiero matricularme</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-blob hero-blob-one"></div>
          <div className="hero-blob hero-blob-two"></div>
          <div className="wrap heroGrid">
            <div className="hero-copy">
              <p className="eyebrow pill">Matrículas 2027 abiertas</p>
              <h1>Grandes comienzos para un futuro lleno de <span>colores.</span></h1>
              <p className="lead">Conoce nuestros niveles, revisa la información de matrícula y completa el proceso desde tu celular.</p>

              <div className="actions">
                <a className="btn" href="#formulario">Quiero matricularme <span>→</span></a>
                <a className="textLink" href="#matricula">Ver información de matrícula</a>
              </div>

              <div className="hero-benefits">
                <div><i>🌱</i><span><b>Juego con propósito</b><small>Aprender descubriendo</small></span></div>
                <div><i>♥</i><span><b>Acompañamiento real</b><small>Familias siempre cerca</small></span></div>
                <div><i>★</i><span><b>Entorno seguro</b><small>Espacios para crecer</small></span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="sun-doodle">☀</div>
              <div className="photo-frame">
                <img className="hero-photo" src="/colores-y-sonrisas/hero.png" alt="Niña sonriendo en un aula infantil" />
              </div>
              <div className="hero-message">Pequeños hoy,<br /><b>grandes mañana</b> ♡</div>
              <div className="spark spark-one">✦</div>
              <div className="spark spark-two">● ● ●</div>
            </div>
          </div>
        </section>

        <section className="section" id="matricula">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Información de matrícula</p>
              <h2>Todo claro antes de dar el primer paso.</h2>
              <p className="soft">La información importante vive en un solo lugar para que las familias no tengan que buscarla entre publicaciones y mensajes.</p>
            </div>
            <div className="info-panel">
              <div className="info-yellow"><i>📅</i><b>Inicio de clases</b><span>Dato referencial</span></div>
              <div className="info-coral"><i>🕘</i><b>Horario</b><span>Turnos según disponibilidad</span></div>
              <div className="info-mint"><i>✓</i><b>Proceso</b><span>Ficha → revisión → confirmación</span></div>
              <div className="info-teal"><i>💬</i><b>Atención</b><span>Contacto directo con el nido</span></div>
            </div>
          </div>
        </section>

        <section className="section alt" id="niveles">
          <div className="wrap">
            <p className="eyebrow">Nuestros niveles</p>
            <h2>Una etapa distinta, la misma alegría de aprender.</h2>
            <div className="cards level-cards">
              <article><div className="level-photo"><img src="/colores-y-sonrisas/nivel-2.png" alt="Nivel 2 años" /></div><span className="n yellow">2</span><h3>2 años</h3><p>Información del aula, horario y vacantes.</p><a href="#formulario">Quiero matricular →</a></article>
              <article><div className="level-photo"><img src="/colores-y-sonrisas/nivel-3.png" alt="Nivel 3 años" /></div><span className="n coral">3</span><h3>3 años</h3><p>Información del aula, horario y vacantes.</p><a href="#formulario">Quiero matricular →</a></article>
              <article><div className="level-photo"><img src="/colores-y-sonrisas/nivel-4.png" alt="Nivel 4 y 5 años" /></div><span className="n mint">4–5</span><h3>4 y 5 años</h3><p>Información del aula, horario y vacantes.</p><a href="#formulario">Quiero matricular →</a></article>
            </div>
          </div>
        </section>

        <section className="section" id="requisitos">
          <div className="wrap requirements">
            <div>
              <p className="eyebrow">Proceso sencillo</p>
              <h2>Matricular desde el celular, paso a paso.</h2>
              <p className="soft">En la versión final, el nido define exactamente qué datos, documentos y validaciones necesita.</p>
              <div className="process-steps">
                <span><b>01</b> Revisa la información</span>
                <span><b>02</b> Completa la ficha</span>
                <span><b>03</b> Recibe la confirmación</span>
              </div>
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
            <div className="form-intro">
              <p className="eyebrow">Matrícula online</p>
              <h2>Quiero matricularme</h2>
              <p className="soft">Completa los datos principales. Esta demo muestra la experiencia; el formulario final se adapta al proceso real del nido.</p>
              <div className="form-note-card">🔒 <span>Información organizada y disponible para el equipo autorizado del nido.</span></div>
            </div>

            <form className="enrollment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-progress"><span className="active">1</span><i></i><span>2</span><i></i><span>3</span></div>
              <h3>Datos principales</h3>
              <div className="form-grid">
                <label>Nombre del niño o niña<input type="text" placeholder="Ej. Mateo Pérez" /></label>
                <label>Edad<select defaultValue=""><option value="" disabled>Selecciona</option><option>2 años</option><option>3 años</option><option>4 años</option><option>5 años</option></select></label>
                <label>Padre, madre o apoderado<input type="text" placeholder="Nombre completo" /></label>
                <label>WhatsApp<input type="tel" placeholder="999 999 999" /></label>
                <label>Nivel<select defaultValue=""><option value="" disabled>Selecciona</option><option>2 años</option><option>3 años</option><option>4 años</option><option>5 años</option></select></label>
                <label>Turno<select defaultValue=""><option value="" disabled>Selecciona</option><option>Mañana</option><option>Tarde</option></select></label>
              </div>
              <label>Comentario opcional<textarea rows="4" placeholder="Cuéntanos algo que debamos saber"></textarea></label>
              <button className="btn submit" type="submit">Continuar matrícula <span>→</span></button>
              <small className="form-note">Demo visual: este formulario todavía no guarda información.</small>
            </form>
          </div>
        </section>

        <section className="section faq" id="preguntas">
          <div className="wrap">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Respuestas antes de matricular.</h2>
            <div className="faq-grid">
              <article><span>+</span><b>¿Cómo sé si hay vacantes?</b><p>La información puede mostrarse aquí o confirmarse luego de enviar la ficha.</p></article>
              <article><span>+</span><b>¿Puedo iniciar desde mi celular?</b><p>Sí. Todo el flujo está pensado para móvil.</p></article>
              <article><span>+</span><b>¿La matrícula queda confirmada al enviar?</b><p>El nido define su proceso de revisión y confirmación.</p></article>
            </div>
          </div>
        </section>

        <section className="section dashboard-preview">
          <div className="wrap dashboard-callout">
            <div>
              <p className="eyebrow">Para el nido</p>
              <h2>Y detrás de la landing, un panel simple para organizar las matrículas.</h2>
              <p>El equipo puede revisar solicitudes, niveles y estados sin depender de conversaciones dispersas.</p>
            </div>
            <Link className="btn dashboard-btn" to="/demos/colores-y-sonrisas/admin">Ver dashboard demo <span>→</span></Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="footer-brand"><img src="/colores-y-sonrisas/logo.png" alt="Colores y Sonrisas Nido" /><small>Bellavista, Callao</small></div>
          <Link to="/">Volver al selector de demos</Link>
        </div>
      </footer>
    </div>
  )
}