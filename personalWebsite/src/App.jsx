import './index.css';
import { WiMoonAltThirdQuarter } from "react-icons/wi";

function App() {

  return (
    <main className='bg-white px-10'>
      <section>
        <nav className='flex justify-between py-8 mb-10'>
          <h1 className='text-2xl'>SefaCiftci</h1>
          <ul className='flex items-center text-l'>
            <li><WiMoonAltThirdQuarter className='text-3xl cursor-pointer'/></li>
            <li className='ml-3 text-xl py-1 px-3 rounded-lg'> <a>Blog</a></li>
            <li className='ml-3 text-xl py-1 px-3 rounded-lg'>Resume</li>
          </ul>
        </nav>

        <div>
          <h3></h3>
          <p></p>
        </div>

        <div>
          <a></a>
          <a></a>
          <a></a>
        </div>

        <div>
          <img></img>
        </div>

      </section>
    </main>
  )
}

export default App
