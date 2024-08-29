import Project from "@/components/Project"
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations('Projects')

    return (
      <div className="bg-zinc-100 px-4 pt-4 pb-8 dark:bg-zinc-800 transition-all">
        <h2 className="text-zinc-900 text-3xl pb-4 dark:text-zinc-50">{t('title')}</h2>
        <div>
          <Project /> 
        </div>
      </div>
    );
  }
  // va contenir cartes projet (component)