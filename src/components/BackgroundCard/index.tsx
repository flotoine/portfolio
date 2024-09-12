"use client"
import { useTranslations } from "next-intl"
import { motion, LayoutGroup } from 'framer-motion'

import './style.css'
import { useState } from "react"

export default function BackgroundCard () {

const t = useTranslations('Skills')
const backgroundTable = Array.from({length: 7}, (v, i) => i)

//usine à gaz

/*
const handleClick = (backgroundItem:number) => {
    ///change le - en + de la carte précédente
    const previousCard = document.getElementsByClassName('expanded')[0]
    if (previousCard === undefined) {
    } else {
    const previousCardExtra = document.getElementById(`backgroundExtra--card${backgroundItem}`) as HTMLInputElement
    previousCardExtra.classList.add('invisible')
    const previousCardButton = document.getElementById(`changingButton--${previousCard.id}`) as HTMLInputElement
    try{previousCardButton.textContent="+"}catch(err){console.log(err)}}

    ///change le + en - de la carte étendue et étend la carte + gestion clic de la même carte
    try{document.getElementsByClassName('expanded')[0].classList.remove('expanded')}catch(err){}
    const clickedCard = document.getElementById(`card${backgroundItem}`) as HTMLInputElement
    const changingButton = document.getElementById(`changingButton--card${backgroundItem}`) as HTMLInputElement
    const backgroundExtra = document.getElementById(`backgroundExtra--card${backgroundItem}`) as HTMLInputElement
    if (previousCard == clickedCard) {
        clickedCard.classList.remove('expanded')
        backgroundExtra.classList.remove('visible')
        backgroundExtra.classList.add('invisible')
    } else {
        clickedCard.classList.add('expanded')
        backgroundExtra.classList.add('visible')
        backgroundExtra.classList.remove('invisible')
    }
    try{clickedCard.classList.contains('expanded')? changingButton.textContent="-":changingButton.textContent="+"}catch(err){console.log(err)}
}
*/

let initialCardExpanded = [false,false,false,false,false,false,false]

const [cardExpanded, setCardExpanded] = useState(
    initialCardExpanded
  );

function handleClick(backgroundItem:number) {
    console.log(cardExpanded)
    const nextCardStatus = cardExpanded.map((c, i) => {
        if (i === backgroundItem) {
          // Increment the clicked counter
          return !c;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCardExpanded(nextCardStatus);
      console.log(cardExpanded)
}

    return (
        <div className="grid grid-cols-3 grid-flow-dense gap-4 mx-auto my-12 w-3/4 ">
            {
                backgroundTable.map((backgroundItem)=>
                    <div key={backgroundItem} id={`card${backgroundItem}`}
                       className={cardExpanded[backgroundItem]?"expanded bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 flex flex-col justify-around px-4 aspect-square":"bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 flex flex-col justify-around px-4 aspect-square"}>
                        <div>
                            <div className="font-bold">{t(`BackgroundList.${backgroundItem}.title`)}</div>
                            <div>{t(`BackgroundList.${backgroundItem}.place`)}</div>
                        </div>
                        <div id={`backgroundExtra--card${backgroundItem}`} className={cardExpanded[backgroundItem]?"":"invisible"}>
                            <div>{t(`BackgroundList.${backgroundItem}.content`)}</div>     
                            <div>{t(`BackgroundList.${backgroundItem}.location`)}</div>   
                            <div>{t(`BackgroundList.${backgroundItem}.date`)}</div>
                        </div>    
                        <div>
                            <button id={`changingButton--card${backgroundItem}`} onClick={()=>handleClick(backgroundItem)}>{cardExpanded[backgroundItem]?"-":"+"}</button>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}