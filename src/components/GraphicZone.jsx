function GraphicZone() {
  return (
    <div className="zone-graphic">
      <div className="graphic-top">
        <div className="bg-kanji">蛇</div>
        <div className="overlay-text-gold">
          CDMX
          <br />
          RAMEN
          <br />
          STREET
        </div>
      </div>

      <div className="graphic-bottom">
        <div className="bg-kanji">目</div>
        <div
          style={{
            position: 'absolute',
            bottom: '3rem',
            right: '1rem',
            fontFamily: 'var(--font-display)',
            fontSize: '8rem',
            color: 'var(--ink)',
            lineHeight: 0.7,
            opacity: 0.2,
          }}
        >
          RAMEN
          <br />
          GYOZA
        </div>
      </div>

      <div className="central-medallion">
        <img
          src="/jametaro-logo.png"
          alt="JAMETARO 蛇目太郎"
          className="jametaro-mark"
        />
      </div>
    </div>
  )
}

export default GraphicZone
