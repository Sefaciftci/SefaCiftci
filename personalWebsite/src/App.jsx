import "./index.css";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiMedium } from "react-icons/si";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import profile from './assets/profile.jpeg';
import resume from './assets/resume/Sefa.Ciftci.pdf';

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode? 'dark' : '' }>
    <main className="bg-white px-10 font-mono	 md:px-24 dark:bg-gray-900 min-h-screen">
      <section>
        <nav className="flex justify-end py-10  mb-12 md:mb-16">
          <ul className="flex items-center text-l">
            <li onClick={()=> setDarkMode(!darkMode)}>
              {darkMode ? <MdOutlineLightMode className="text-3xl cursor-pointer text-white  dark:rounded-full" /> : 
               <MdDarkMode className="text-3xl cursor-pointer  dark:rounded-full" /> }
            </li>
            
          </ul>
        </nav>

        <div className="md:flex shadow-lg">
          <div className="text-center py-10  md:w-1/2 dark:text-white ">
            <h3 className="text-4xl mb-3 tracking-wide">SEFA ÇİFTÇİ</h3>
            <h6 className="text-xl text-gray-900 mb-5 dark:text-white"> Software Developer </h6>
            <p className="text-gray-700 md:my-8 dark:text-white">
              Merhaba, ben Sefa. Frontend geliştiricisiyim. Yeniliklere açık, öğrenmeye istekli ve takım çalışmasına yatkın
              biriyim. Kendimi sürekli geliştirmeye ve yeni bilgiler edinmeye
              çalışıp bireysel gelişimime önem veririm.
            </p>

            <div className="flex justify-center text-4xl my-8 md:my-16 gap-10 text-gray-600 dark:text-gray-500 ">
              <a href="https://www.linkedin.com/in/sefaciftci/" className="cursor-pointer hover:text-gray-900 ease-in duration-300 hover:dark:text-gray-600">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Sefaciftci" className="cursor-pointer hover:text-gray-900 ease-in duration-300 hover:dark:text-gray-600">
                <FaGithub />
              </a>
              <a href="mailto:sefaciftci.cs@gmail.com" className="cursor-pointer hover:text-gray-900 ease-in duration-300 hover:dark:text-gray-600">
                <SiGmail />
              </a>
              <a href="https://medium.com/@sefaciftci.cs" className="cursor-pointer hover:text-gray-900 ease-in duration-300 hover:dark:text-gray-600">
                <SiMedium />
              </a>
            </div>
          </div>

          <div className="flex justify-center mx-auto my-8 md:w-1/2  ">
            <img
              className="w-60 h-60 md:w-75 shadow-2xl md:h-75 object-cover rounded-full"
              src={profile}
            ></img>
          </div>


        </div>

          <div className="flex justify-center py-6" >
            
            <a  href={resume} download={resume} className="py-4 px-10 shadow-lg text-white text-xl rounded-lg cursor-pointer bg-gray-600 hover:bg-gray-900 hover:text-white focus: ease-in duration-300 dark:hover:bg-slate-500">
            Resume
            </a>
          </div>
          

      </section>
    </main>
    </div>
  );
}
export default App;
