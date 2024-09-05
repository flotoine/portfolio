import { useTranslations } from "next-intl"
import backgroundList from './background.json'

export default function BackgroundCard () {

const t = useTranslations('Skills')

    return (
        <div className="flex flex-col">
            {
                backgroundList.map((backgroundItem)=>
                    <div key={backgroundItem.id}>
                        <div>{t(`BackgroundList.${backgroundItem.id}.title`)}</div>
                        <div>{t(`BackgroundList.${backgroundItem.id}.date`)}</div>
                        <div>{t(`BackgroundList.${backgroundItem.id}.place`)}</div>
                    </div>)
            }
        </div>
    )
}