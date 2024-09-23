import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import '../css/embla.css'
// embla carousel for technologies
const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true, loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App: React.FC = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)

export default function Carousel() {
  return(
    <div className='h-full flex'>
      <App />
    </div>
  )
}
