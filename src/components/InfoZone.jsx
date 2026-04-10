function InfoZone() {
  return (
    <div className="zone-info">
      <div className="info-block">
        <span className="info-label">SISTEMA // LOCACIÓN</span>
        <div className="info-data">
          ELIGIÓ ANCONA 167
          <br />
          CDMX · MÉXICO
          <br />
          WA · 55 3273 7337
        </div>
      </div>

      <div className="info-block gold-bg">
        <span className="info-label" style={{ borderColor: 'var(--ink)' }}>
          OPERACIÓN // HORAS
        </span>
        <div className="info-data">
          LUN · MIE · JUE · DOM
          <br />
          13:00 — 18:30
          <br />
          VIE · SAB 13:00 — 19:30
          <br />
          <span className="closed">MAR · CERRADO</span>
        </div>

        <div className="cluster-stamp">
          <img
            src="/jametaro-logo.png"
            alt="JAMETARO 蛇目太郎"
            className="cluster-stamp-img"
          />
        </div>
      </div>
    </div>
  )
}

export default InfoZone
