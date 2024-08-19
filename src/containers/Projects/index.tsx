import Project from "../../components/Project"

export default function Projects() {
    return (
      <div className="bg-zinc-100 p-4 dark:bg-zinc-800">
        <h2 className="text-zinc-900 text-3xl pb-4 dark:text-zinc-50">/Projets</h2>
        <div>
          <Project /> 
        </div>
      </div>
    );
  }
  // va contenir cartes projet (component)