"use client"
import EmblaCarousel from "@/components/Carousel/js/index";

export default function Skills() {
    return (
      <div className="bg-zinc-200 p-4 dark:bg-zinc-700 transition-all">
        <h2 className="text-zinc-900 text-3xl pb-4 dark:text-zinc-50">/Compétences</h2>
        <p>Principales technos</p>
        <EmblaCarousel />
        <p>Autres technos</p> 
        <p>Ouvrir le CV</p> 
      </div>
    );
  }