import { useTranslations } from "next-intl"


export default function BackgroundCard () {

const t = useTranslations('Skills')
const backgroundTable = [0,1,2,3,4,5,6]
    return (
        <div className="flex flex-wrap gap-4 mx-auto my-12 w-10/12">
            {
                backgroundTable.map((backgroundItem)=>
                    <div key={backgroundItem} className="bg-zinc-300 h-36 w-52 flex flex-col justify-around px-4">
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