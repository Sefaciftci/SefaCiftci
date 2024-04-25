import './index.css';
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {

  return (
    <main className='bg-white px-10'>

      
      <section>
        <nav className='flex justify-between py-8 mb-12'>
          <h1 className='text-2xl'>SefaCiftci</h1>
          <ul className='flex items-center text-l'>
            <li><WiMoonAltThirdQuarter className='text-3xl cursor-pointer'/></li>
            <li className='ml-3 text-xl py-1 px-3 rounded-lg'> <a>Blog</a></li>
            <li className='ml-3 text-xl py-1 px-3 rounded-lg'>Resume</li>
          </ul>
        </nav>

        <div className='text-center'>
          <h3 className='text-3xl mb-3 tracking-wide	'>SEFA CİFTCİ</h3>
          <h6 className='text-xl text-gray-500 mb-5' >Software Developer</h6>
          <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iusto, laudantium iure rem numquam et minus quia quisquam necessitatibus nemo?</p>
        </div>

        <div className='flex justify-center text-4xl my-8 gap-10'> 
          <a className='cursor-pointer'><FaLinkedin /></a>
          <a className='cursor-pointer'><FaGithub /></a>
          <a className='cursor-pointer'><SiGmail /></a>
        </div>
        
        <div className='w-60 h-60 flex my-10 mx-auto'>
          <img className='rounded-full' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'></img>
        </div>
      </section>


    </main>
  )
}

export default App
