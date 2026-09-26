import { Link } from 'react-router-dom'
import '../styles/dashboard.css'

const rows = [
  ['Valentina R.', '3 años', 'Mañana', 'Nuevo'],
  ['Mateo S.', '4 años', 'Mañana', 'Contactado'],
  ['Luciana P.', '2 años', 'Tarde', 'Confirmado'],
  ['Thiago C.', '5 años', 'Mañana', 'Nuevo'],
  ['Emma G.', '3 años', 'Tarde', 'En revisión'],
]

export default function DashboardDemo() {
  return (
    <div className="dashboard-demo">
      <aside className="side">
        <div className="side-brand"><span>☀</span><b>Colores y Sonrisas</b></div>
        <nav>
          <a className="active" href="#resumen">Resumen</a>
          <a href="#solicitudes">Solicitudes</a>
          <a href="#niveles">Niveles</a>
          <a href="#configuracion">Configuración</a>
        </nav>
        <Link to="/demos/colores-y-sonrisas">← Volver a la web</Link>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <small>Demo administrativa</small>
            <h1>Resumen de matrículas</h1>
          </div>
          <span className="period">Matrícula 2027</span>
        </div>

        <section className="stats" id="resumen">
          <article><span>Total solicitudes</span><strong>28</strong><small>+6 esta semana</small></article>
          <article><span>Nuevas</span><strong>9</strong><small>Por revisar</small></article>
          <article><span>Contactadas</span><strong>12</strong><small>Seguimiento activo</small></article>
          <article><span>Confirmadas</span><strong>7</strong><small>Matrículas cerradas</small></article>
        </section>

        <section className="dashboard-grid">
          <div className="panel">
            <div className="panel-head"><div><small>Solicitudes</small><h2>Últimas matrículas</h2></div><button>Ver todas</button></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Alumno</th><th>Nivel</th><th>Turno</th><th>Estado</th></tr></thead>
                <tbody>
                  {rows.map(([name, level, shift, status]) => (
                    <tr key={name}><td>{name}</td><td>{level}</td><td>{shift}</td><td><span className={'status ' + status.toLowerCase().replace(' ', '-')}>{status}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel levels-panel">
            <small>Por nivel</small>
            <h2>Solicitudes recibidas</h2>
            <div className="level-row"><span>2 años</span><b>5</b></div>
            <div className="level-row"><span>3 años</span><b>9</b></div>
            <div className="level-row"><span>4 años</span><b>8</b></div>
            <div className="level-row"><span>5 años</span><b>6</b></div>
          </div>
        </section>

        <div className="demo-warning">Datos ficticios para mostrar cómo podría verse el sistema final. El flujo real se adapta al proceso del nido.</div>
      </main>
    </div>
  )
}