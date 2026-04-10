import { useCallback, useEffect, useRef, useState } from 'react'

const SOFT_VOLUME = 0.15

const PLAYLIST = [
  {
    src: '/lamp.mp3',
    label: 'LAMP · HARUKA × NUJABES',
  },
  {
    src: '/love-talkin.mp3',
    label: "LOVE TALKIN' · TATSURO YAMASHITA",
  },
  {
    src: '/overture.mp3',
    label: 'OVERTURE · TOSHIKI KADOMATSU',
  },
]

// pick a random track, avoiding the previous one when possible
const pickNext = (currentIndex) => {
  if (PLAYLIST.length <= 1) return 0
  let next = currentIndex
  while (next === currentIndex) {
    next = Math.floor(Math.random() * PLAYLIST.length)
  }
  return next
}

function AudioPlayer() {
  const audioRef = useRef(null)
  const [trackIndex, setTrackIndex] = useState(() =>
    Math.floor(Math.random() * PLAYLIST.length),
  )
  const [isAudible, setIsAudible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const track = PLAYLIST[trackIndex]

  // advance to a new random track when the current one ends
  const handleEnded = useCallback(() => {
    setTrackIndex((i) => pickNext(i))
  }, [])

  // when trackIndex changes, load + play the new track
  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    el.volume = SOFT_VOLUME
    // first load is muted (browsers only autoplay muted); unmuted by gesture
    if (!isAudible) el.muted = true
    el.load()

    const playIt = async () => {
      try {
        await el.play()
        setIsPlaying(true)
      } catch {
        /* autoplay blocked, will retry on user gesture */
      }
    }
    playIt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex])

  // one-time setup: listen for first user gesture to unmute
  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    const unmute = async () => {
      if (el.paused) {
        try {
          await el.play()
          setIsPlaying(true)
        } catch {
          return
        }
      }
      el.muted = false
      el.volume = SOFT_VOLUME
      setIsAudible(true)
      window.removeEventListener('pointerdown', unmute)
      window.removeEventListener('keydown', unmute)
      window.removeEventListener('touchstart', unmute)
    }

    window.addEventListener('pointerdown', unmute)
    window.addEventListener('keydown', unmute)
    window.addEventListener('touchstart', unmute)

    return () => {
      window.removeEventListener('pointerdown', unmute)
      window.removeEventListener('keydown', unmute)
      window.removeEventListener('touchstart', unmute)
    }
  }, [])

  const toggle = async () => {
    const el = audioRef.current
    if (!el) return
    if (el.paused) {
      try {
        await el.play()
        setIsPlaying(true)
        if (isAudible) el.muted = false
      } catch {
        /* ignore */
      }
    } else if (el.muted || !isAudible) {
      el.muted = false
      el.volume = SOFT_VOLUME
      setIsAudible(true)
    } else {
      el.pause()
      setIsPlaying(false)
    }
  }

  const skip = (e) => {
    e.stopPropagation()
    setTrackIndex((i) => pickNext(i))
  }

  const label = !isAudible
    ? '♪ TAP FOR SOUND'
    : isPlaying
    ? `♪ ${track.label}`
    : `♪ PLAY · ${track.label.split(' · ')[0]}`

  return (
    <>
      <audio
        ref={audioRef}
        src={track.src}
        onEnded={handleEnded}
        preload="auto"
      />
      <div className={`audio-toggle-group${!isAudible ? ' kick' : ''}`}>
        <button
          type="button"
          className="audio-toggle"
          onClick={toggle}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
          title={track.label}
        >
          <span className="audio-toggle__dot" />
          <span className="audio-toggle__label">{label}</span>
        </button>
        <button
          type="button"
          className="audio-skip"
          onClick={skip}
          aria-label="Siguiente canción"
          title="Siguiente canción aleatoria"
        >
          ⤼
        </button>
      </div>
    </>
  )
}

export default AudioPlayer
