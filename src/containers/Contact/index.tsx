import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

export default function Contact() {
    return (
      <div className="bg-zinc-900 flex flex-col place-items-center">
        <p className="text-zinc-50 text-xl">Me contacter </p>
        <div className="flex gap-2 ">
          <div className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faLinkedinIn} className='text-white'/></div>
          <div className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faPaperPlane} className='text-white'/></div>
          <div className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faGithub} className='text-white'/></div>
        </div>
      </div>
    );
  }