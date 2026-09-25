import { Link } from 'react-router-dom'
import '../styles/colores-y-sonrisas.css'

export default function ColoresYSonrisas() {
  return (
    <div className="nido-demo">
      <div className="notice">
        Demo comercial con contenido referencial · <Link to="/">ver todas las demos</Link>
      </div>

      <header className="nav">
        <div className="wrap navin">
          <a className="logo" href="#inicio">
            <i>☀</i>
            <span>Colores <small>y Sonrisas</small></span>
          </a>

          <nav>
            <a href="#nosotros">Nosotros</a>
            <a href="#niveles">Niveles</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="btn mini" href="#contacto">Consultar matrícula</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="wrap heroGrid">
            <div>
              <p className="eyebrow">Aprender · descubrir · crecer</p>
              <h1>Un lugar donde cada día empieza con una sonrisa.</h1>
              <p className="lead">Una propuesta visual pensada para mostrar la esencia del nido y facilitar que las familias encuentren información y consulten desde su celular.</p>

              <div className="actions">
                <a className="btn" href="#contacto">Consultar vacantes</a>
                <a className="textLink" href="#nosotros">Conoce la propuesta ↓</a>
              </div>

              <div className="facts">
                <span><b>Responsive</b>Se adapta al celular</span>
                <span><b>Directo</b>Contacto por WhatsApp</span>
                <span><b>Claro</b>Información ordenada</span>
              </div>
            </div>

            <div className="art">
              <div className="sun">☀</div>
              <div className="bubble one"></div>
              <div className="bubble two"></div>
              <div className="quote">💛<br />Pequeños pasos,<br /><b>grandes descubrimientos.</b></div>
            </div>
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Nuestra esencia</p>
              <h2>Una web que transmita cercanía desde el primer vistazo.</h2>
            </div>
            <div className="copy">
              <p>La estructura prioriza lo que normalmente busca una familia: propuesta educativa, niveles, fotografías, ubicación y formas rápidas de contacto.</p>
              <p>En una versión final, estos textos se reemplazan con la información real proporcionada por la institución.</p>
            </div>
          </div>
        </section>

        <section className="section alt" id="niveles">
          <div className="wrap">
            <p className="eyebrow">Niveles</p>
            <h2>Información fácil de recorrer</h2>
            <div className="cards">
              <article><span className="n coral">1</span><h3>Primeros pasos</h3><p>Espacio para describir el primer nivel o grupo de edad.</p></article>
              <article><span className="n yellow">2</span><h3>Exploradores</h3><p>Espacio para presentar metodología, actividades y acompañamiento.</p></article>
              <article><span className="n mint">3</span><h3>Grandes curiosos</h3><p>Espacio para explicar el nivel previo a primaria o siguiente etapa.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="wrap exp">
            <div className="poster">
              <span>Jugar</span><span>Crear</span><span>Compartir</span><span>Crecer</span>
            </div>
            <div>
              <p className="eyebrow">Experiencia</p>
              <h2>La propuesta también puede contar historias.</h2>
              <ul>
                <li>Galería de actividades y espacios.</li>
                <li>Testimonios de familias.</li>
                <li>Metodología y valores.</li>
                <li>Proceso de matrícula y visitas.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="wrap box">
            <div>
              <p className="eyebrow">Matrículas</p>
              <h2>¿Quieres conocernos?</h2>
              <p>En la versión final, aquí irán los datos reales del nido.</p>
            </div>
            <div className="buttons">
              <a className="btn green" href="#contacto">WhatsApp</a>
              <a className="btn outline" href="#contacto">Llamar</a>
            </div>
          </div>

          <div className="wrap map">
            <b>Ubicación</b>
            <p>Bellavista, Callao</p>
            <small>La web final puede integrar Google Maps con la dirección oficial.</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>Demo comercial · Alan Burga Web</span>
          <Link to="/">Más demos</Link>
        </div>
      </footer>
    </div>
  )
}