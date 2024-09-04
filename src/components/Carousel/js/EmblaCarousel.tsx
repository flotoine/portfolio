import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className='embla__slide'>
            
            <Image 
              src="/assets/techLogos/NextJS.png"
              alt='logo Next.js'
              width={200}
              height={200}
              className='dark:invert'
            />
          </div>
          <div className='embla__slide'>
            <Image 
                src="/assets/techLogos/TailwindCSS.svg"
                alt='logo tailwind css'
                width={200}
                height={200}
                className='block dark:hidden'
              />
            <Image 
              src="/assets/techLogos/TailwindCSSDarkmode.svg"
              alt='logo tailwind css'
              width={200}
              height={200}
              className='hidden dark:block'
            />
          </div>
          <div className='embla__slide'>
            <Image 
                src="/assets/techLogos/nodejsStacked.svg"
                alt='logo NodeJS'
                width={200}
                height={200}
                className='block dark:hidden'
              />
              <Image 
                src="/assets/techLogos/nodejsStackedDarkmode.svg"
                alt='logo NodeJS'
                width={200}
                height={200}
                className='hidden dark:block'
              />
          </div>
          <div className='embla__slide'>
            <Image 
                src="/assets/techLogos/MongoDB.png"
                alt='logo MongoDB'
                width={200}
                height={200}
                className='block dark:hidden'
              />
              <Image 
                src="/assets/techLogos/MongoDBDarkmode.png"
                alt='logo MongoDB'
                width={200}
                height={200}
                className='hidden dark:block'
              />
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
