import EdgeZone from './EdgeZone'
import GraphicZone from './GraphicZone'
import ContentZone from './ContentZone'
import InfoZone from './InfoZone'
import Marquee from './Marquee'
import RoughInkFilter from './RoughInkFilter'
import AudioPlayer from './AudioPlayer'

function IzakayaLabel() {
  return (
    <>
      <RoughInkFilter />
      <div className="label-container">
        <div className="label-wrapper">
          <EdgeZone />
          <GraphicZone />
          <ContentZone />
          <InfoZone />
          <AudioPlayer />
        </div>
        <Marquee />
      </div>
    </>
  )
}

export default IzakayaLabel
