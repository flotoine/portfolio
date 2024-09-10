"use client"
import { useTranslations } from "next-intl"

import './style.css'

export default function BackgroundCard () {

const t = useTranslations('Skills')
const backgroundTable = Array.from({length: 7}, (v, i) => i)


const handleClick = (backgroundItem:number) => {
    console.log(`Button ${backgroundItem} clicked!`);
    try{document.getElementsByClassName('expanded')[0].classList.remove('expanded')}catch(err){}
    const specificCard = document.getElementById(`card${backgroundItem}`) as HTMLInputElement
    specificCard.classList.add('expanded')
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
                            <button onClick={()=>handleClick(backgroundItem)}>+</button>
                        </div>
                        
                    </div>
                    )
            }
        </div>
    )
}