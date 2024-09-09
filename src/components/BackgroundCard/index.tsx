import { useTranslations } from "next-intl"


export default function BackgroundCard () {

const t = useTranslations('Skills')
const backgroundTable = Array.from({length: 7}, (v, i) => i)
    return (
        <div className="flex flex-wrap gap-4 mx-auto my-12 w-3/4">
            {
                backgroundTable.map((backgroundItem)=>
                    <div key={backgroundItem} className="bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-50  h-36 w-52 flex flex-col justify-around px-4">
                        <div>
                            <div className="font-bold">{t(`BackgroundList.${backgroundItem}.title`)}</div>
                            <div>{t(`BackgroundList.${backgroundItem}.place`)}</div>
                        </div>
                        <div>+</div>
                    </div>)
            }
        </div>
    )
}