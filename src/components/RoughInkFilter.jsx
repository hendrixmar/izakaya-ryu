function RoughInkFilter() {
  return (
    <svg className="filter-source">
      <filter id="rough-ink">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.05"
          numOctaves="3"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="3"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  )
}

export default RoughInkFilter
