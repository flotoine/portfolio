import projectList from "./projects.json"
import Image from 'next/image'

export default function Project () {
    return (
        <div className="grid gap-4 grid-flow-col">
        {
            projectList.map((projectItem) => 
                <div key ={projectItem.id} className="shadow-lg group/project relative transition-all" >
                    <div >
                        <Image 
                        src={require(`${projectItem.src}`).default}
                        alt="Aperçu du projet"
                        width={500}
                        height={400}
                        className="min-h-72 max-h-72 object-cover object-left-top group-hover/project:blur-sm"
                        />
                    </div>
                    <div className="h-10 bg-zinc-50 place-content-center dark:bg-zinc-700 group-hover/project:blur-sm">
                        <p className=" text-zinc-900 pl-4 dark:text-zinc-50">{projectItem.title}</p>
                    </div>
                    <div className="absolute bg-slate-50 bg-opacity-80 backdrop-blur-lg top-1/3 p-10 hidden group-hover/project:inline">
                        <p className=""> {`${projectItem.backText}`} </p>
                        <div>Consulter le projet sur GitHub</div>
                    </div>
                </div>
            )
        } 
        </div> 
    )
}
