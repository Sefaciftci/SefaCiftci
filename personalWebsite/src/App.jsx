import "./index.css";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  return (
    <main className="bg-white px-10 md:px-24">
      <section>
        <nav className="flex justify-end py-10  mb-12 md:mb-16">
          <ul className="flex items-center text-l">
            <li>
              <WiMoonAltThirdQuarter className="text-3xl cursor-pointer" />
            </li>
            
          </ul>
        </nav>

        <div className="md:flex">
          <div className="text-center py-10 md:w-1/2">
            <h3 className="text-4xl mb-3 tracking-wide">SEFA CİFTCİ</h3>
            <h6 className="text-2xl text-gray-900 mb-5">Software Developer</h6>
            <p className="text-gray-700 md:my-8">
              Yeniliklere açık, öğrenmeye istekli ve takım çalışmasına yatkın
              biriyim. Kendimi sürekli geliştirmeye ve yeni bilgiler edinmeye
              çalışıp bireysel gelişimime önem veririm.
            </p>

            <div className="flex justify-center text-4xl my-8 md:my-16 gap-10 text-gray-600">
              <a className="cursor-pointer hover:text-gray-900 ease-in duration-300">
                <FaLinkedin />
              </a>
              <a className="cursor-pointer hover:text-gray-900 ease-in duration-300">
                <FaGithub />
              </a>
              <a className="cursor-pointer hover:text-gray-900 ease-in duration-300">
                <SiGmail />
              </a>
            </div>
          </div>

          <div className="flex justify-center mx-auto my-8 md:w-1/2 ">
            <img
              className="w-60 h-60  rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            ></img>
          </div>


        </div>

          <div className="flex justify-center py-6">
            <a className="py-4 px-10  text-xl rounded-lg cursor-pointer bg-gray-600 text-white hover:bg-gray-900 focus: ease-in duration-300">
            Resume
            </a>
          </div>
          

      </section>
    </main>
  );
}
export default App;
