const menuItems = [
  {
    name: 'TONKOTSU RAMEN',
    price: '$220',
    description:
      'Caldo cremoso de cerdo, chashu, huevo ajitama, fideos artesanales.',
  },
  {
    name: 'SHOYU RAMEN',
    price: '$210',
    description:
      'Base clara de soya, pollo, bambú, alga nori, cebollín fresco.',
  },
  {
    name: 'GYOZA 餃子',
    price: '$120',
    description:
      'Dumplings de cerdo y verdura, plancha crujiente, salsa ponzu. (6 pz)',
  },
  {
    name: 'KARAAGE',
    price: '$140',
    description: 'Pollo frito estilo japonés, mayo picante, limón.',
  },
  {
    name: 'EDAMAME',
    price: '$80',
    description: 'Vainas de soya al vapor con sal marina.',
  },
]

function ContentZone() {
  return (
    <div className="zone-content">
      <div className="header-block">
        <h1>
          JAMETARO
          <br />
          蛇目太郎
        </h1>
        <p>
          Ramen &amp; Gyoza auténticos. Arte en cada tazón. Eligió Ancona 167,
          CDMX. 60 publicaciones · 17K seguidores.

        </p>
      </div>

      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div
            key={item.name}
            className="menu-item"
            style={
              index === menuItems.length - 1 ? { borderBottom: 'none' } : {}
            }
          >
            <span className="menu-name">{item.name}</span>
            <span className="menu-price">{item.price}</span>
            <span className="menu-desc">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentZone
