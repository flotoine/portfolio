import projectList from "./projects.json"
import Image from 'next/image'

export default function Project () {
    return (
        <div className="grid grid-flow-dense grid-rows-2 grid-cols-3 gap-4">
        {
            projectList.map((projectItem) => 
                <div key ={projectItem.id} className={projectItem.className}>
                    <div>
                        <Image 
                        src={require(`${projectItem.src}`).default}
                        alt="Aperçu du projet"
                        width={300}
                        height={200}
                        />
                    </div>
                    <div>
                        <p className="bg-zinc-200 text-zinc-800">{projectItem.title}</p>
                    </div>
                </div>
            )
        } 
        </div> 
    )
}
