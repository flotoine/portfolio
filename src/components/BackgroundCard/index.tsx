"use client"
import { useTranslations } from "next-intl"

import './style.css'

export default function BackgroundCard () {

const t = useTranslations('Skills')
const backgroundTable = Array.from({length: 7}, (v, i) => i)


const handleClick = (backgroundItem:number) => {
    ///change le - en + de la carte précédente
    const previousCard = document.getElementsByClassName('expanded')[0]
    if (previousCard === undefined) {
    } else {
    const previousCardButton = document.getElementById(`changingButton--${previousCard.id}`) as HTMLInputElement
    try{previousCardButton.textContent="+"}catch(err){console.log(err)}}

    ///change le + en - de la carte étendue et étend la carte + gestion clic de la même carte
    try{document.getElementsByClassName('expanded')[0].classList.remove('expanded')}catch(err){}
    const clickedCard = document.getElementById(`card${backgroundItem}`) as HTMLInputElement
    const changingButton = document.getElementById(`changingButton--card${backgroundItem}`) as HTMLInputElement
    if (previousCard == clickedCard) {
        clickedCard.classList.remove('expanded')
    } else {
        clickedCard.classList.add('expanded')
    }
    try{clickedCard.classList.contains('expanded')? changingButton.textContent="-":changingButton.textContent="+"}catch(err){console.log(err)}
}


    return (
        <div className="grid grid-cols-3 grid-flow-dense gap-4 mx-auto my-12 w-3/4">
            {
                backgroundTable.map((backgroundItem)=>
                    <div key={backgroundItem} id={`card${backgroundItem}`}
                       className="bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 flex flex-col justify-around px-4 aspect-square">
                        <div>
                            <div className="font-bold">{t(`BackgroundList.${backgroundItem}.title`)}</div>
                            <div>{t(`BackgroundList.${backgroundItem}.place`)}</div>
                        </div>
                        <div>
                            <button id={`changingButton--card${backgroundItem}`} onClick={()=>handleClick(backgroundItem)}>+</button>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}