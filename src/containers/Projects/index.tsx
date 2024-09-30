import Project from "@/components/Project"
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations('Projects')

    return (
      <section className="bg-stone-200 px-8 pt-4 pb-8 dark:bg-stone-800 transition-all">
        <h2 className="text-stone-800 text-3xl pb-4 dark:text-stone-200">{t('title')}</h2>
        <Project /> 
      </section>
    );
  }
