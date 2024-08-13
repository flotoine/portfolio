import projectList from "./projects.json"
import Image from 'next/image'

export default function Project () {
    return (
        <div className="grid gap-4 grid-flow-col">
        {
            projectList.map((projectItem) => 
                <div key ={projectItem.id} >
                    <div >
                        <Image 
                        src={require(`${projectItem.src}`)}
                        alt="Aperçu du projet"
                        width={500}
                        height={400}
                        className="min-h-72 max-h-72 object-cover"
                        />
                    </div>
                    <div className="h-10 bg-zinc-200 place-content-center">
                        <p className=" text-zinc-800">{projectItem.title}</p>
                    </div>
                </div>
            )
        } 
        </div> 
    )
}
