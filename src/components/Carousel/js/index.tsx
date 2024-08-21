import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import '../css/embla.css'

const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App: React.FC = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)

export default function Carousel() {
  return(
    <div>
      <App />
    </div>
  )
}
