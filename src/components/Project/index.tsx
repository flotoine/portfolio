import projectList from "./projects.json"
import Image from 'next/image'

export default function Project () {
    return (
        <div className="grid gap-4 grid-flow-col">
        {
            projectList.map((projectItem) => 
                <div key ={projectItem.id} className="shadow-lg hover:blur-sm transition-all" >
                    <div >
                        <Image 
                        src={require(`${projectItem.src}`).default}
                        alt="Aperçu du projet"
                        width={500}
                        height={400}
                        className="min-h-72 max-h-72 object-cover object-left-top"
                        />
                    </div>
                    <div className="h-10 bg-zinc-50 place-content-center">
                        <p className=" text-zinc-900 pl-4">{projectItem.title}</p>
                    </div>
                </div>
            )
        } 
        </div> 
    )
}
