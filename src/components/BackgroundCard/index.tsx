"use client"
import { useTranslations } from "next-intl"

import './style.css'
import { useState } from "react"

export default function BackgroundCard () {
/// generates a grid from background elements in messages

const t = useTranslations('Skills')
const backgroundTable = Array.from({length: 7}, (v, i) => i) ///set the number of displayed cards

let initialCardExpanded = [false,false,false,false,false,false,false] // set cards to close

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
        <div className="grid  grid-cols-2 md:grid-cols-3 grid-flow-dense gap-4 mx-auto my-12 md:w-3/4 "> {/*grid creation*/}
            {
                backgroundTable.map((backgroundItem)=>
                    <div key={backgroundItem} id={`card${backgroundItem}`}
                       className={cardExpanded[backgroundItem]?"expanded backdrop-brightness-90 dark:text-zinc-50 flex flex-col justify-around px-4 aspect-square rounded shadow-lg":"shadow-lg backdrop-brightness-90 dark:text-zinc-50 flex flex-col justify-around px-4 aspect-square rounded"}>
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