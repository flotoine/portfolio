"use client"
import { useTranslations } from "next-intl"
import { motion, LayoutGroup } from 'framer-motion'

import './style.css'
import { useState } from "react"

export default function BackgroundCard () {

const t = useTranslations('Skills')
const backgroundTable = Array.from({length: 7}, (v, i) => i)

let initialCardExpanded = [false,false,false,false,false,false,false]

const [cardExpanded, setCardExpanded] = useState(
    initialCardExpanded
  );

function handleClick(backgroundItem:number) {
    const nextCardStatus = cardExpanded.map((c, i) => {
        if (c === true) { //reset all cards to false
            return !c
        } else {} 
        if (i === backgroundItem) {  // turn clicked card to true
          return !c;
        } else {
          return c;
        }
      });
      setCardExpanded(nextCardStatus);

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
                        <div id={`backgroundExtra--card${backgroundItem}`} className={cardExpanded[backgroundItem]?"text-left list-disc list-inside":"invisible"}>  
                            <div className="pb-4">{t.rich(`BackgroundList.${backgroundItem}.content`, {
                                p: (context) => <li>{context}</li>
                            })}</div>   
                            <div>{t(`BackgroundList.${backgroundItem}.location`)}</div>   
                            <div>{t(`BackgroundList.${backgroundItem}.date`)}</div>
                        </div>    
                        <div>
                            <button className="text-xl font-medium" id={`changingButton--card${backgroundItem}`} onClick={()=>handleClick(backgroundItem)}>{cardExpanded[backgroundItem]?"–":"+"}</button>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}