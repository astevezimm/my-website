import {useEffect, useState} from 'react'

const LIST = [
  "images/kirbslide/k1.jpg",
  "images/kirbslide/k2.jpg",
  "images/kirbslide/k3.jpg",
  "images/kirbslide/k4.jpg",
  "images/kirbslide/k5.jpg",
  "images/kirby.jpg",
]

export default function KirbySlideShow() {
  const [index, setIndex] = useState(Math.floor(Math.random() * LIST.length))
  const [className, setClassName] = useState('')

  useEffect(() => {
    if (!className.includes('leave')) return
    const prev = () => setIndex(index => (index + LIST.length - 1) % LIST.length)
    const next = () => setIndex(index => (index + 1) % LIST.length)
    const timeout = setTimeout(() => {
      setClassName('')
      if (className.includes('left')) prev()
      else if (className.includes('right')) next()
    }, 500)
    return () => clearTimeout(timeout);
  }, [className]);
  
  return (
    <div className="slideshow">
      <button onClick={() => setClassName('leave left')}>&lt;</button>
      <img src={LIST[index]} className={className} alt="Kirby"/>
      <button onClick={() => setClassName('leave right')}>&gt;</button>
    </div>
  )
}
