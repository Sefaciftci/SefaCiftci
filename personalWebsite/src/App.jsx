import "./index.css";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import profile from './assets/profile.jpeg';
import resume from './resume/Sefa.Ciftci.pdf';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode? 'dark' : '' }>

    
    <main className="bg-white px-10 md:px-24 dark:bg-gray-900 min-h-screen">
      <section>
        <nav className="flex justify-end py-10  mb-12 md:mb-16">
          <ul className="flex items-center text-l">
            <li onClick={()=> setDarkMode(!darkMode)}>
              <WiMoonAltThirdQuarter className="text-3xl cursor-pointer dark:bg-white dark:rounded-full" />
            </li>
            
          </ul>
        </nav>

        <div className="md:flex ">
          <div className="text-center py-10 md:w-1/2 dark:text-white">
            <h3 className="text-4xl mb-3 tracking-wide">SEFA CİFTCİ</h3>
            <h6 className="text-2xl text-gray-900 mb-5 dark:text-white">Software Developer </h6>
            <p className="text-gray-700 md:my-8 dark:text-white">
              Yeniliklere açık, öğrenmeye istekli ve takım çalışmasına yatkın
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
            </div>
          </div>

          <div className="flex justify-center mx-auto my-8 md:w-1/2 ">
            <img
              className="w-60 h-60 md:w-75 md:h-75 object-cover rounded-full"
              src={profile}
            ></img>
          </div>


        </div>

          <div className="flex justify-center py-6">
            <a  href={resume} download={resume} className="py-4 px-10  text-xl rounded-lg cursor-pointer bg-gray-600 text-white hover:bg-gray-900 focus: ease-in duration-300 dark:hover:bg-slate-500">
            Resume
            </a>
          </div>
          

      </section>
    </main>
    </div>
  );
}
export default App;
