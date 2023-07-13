import { styles } from '../styles'
import { github, mail, linkedin, medium, resume, ahmet } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-[440px] mx-auto'>
      <div className={`${styles.paddingX} absolute 
        inset-0 top-[120px] max-w-7xl mx-auto flex
        flex-row item-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <img src={ahmet} alt="ahmet" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'> Ahmet </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop pixel perfect and fully<br className='sm:block hidden' /> interactive user
            interfaces and web applications
          </p>
          <div
            className='flex gap-3 mt-3'
          >
            <span
              onClick={() => window.open('https://github.com/AhmetTasdemir', '_blank')}
              className='cursor-pointer'
            >
              <img src={github} alt="Github" className='w-9 h-9' />
            </span>
            <span
              onClick={() => window.open('https://www.linkedin.com/in/ahmet-tasdemir/', '_blank')}
              className='cursor-pointer'
            >
              <img src={linkedin} alt="LinkedIn" className='w-9 h-9' />
            </span>
            <span
              onClick={() => window.open('https://medium.com/@ahmettsdmr1312', '_blank')}
              className='cursor-pointer'
            >
              <img src={medium} alt="Instagram" className='w-9 h-9' />
            </span>
            <span
              onClick={() => window.open('mailto:ahmettsdmr1312@gmail.com', '_blank')}
              className='cursor-pointer'
            >
              <img src={mail} alt="Instagram" className='w-9 h-9' />
            </span>
            <span
              onClick={() => window.open('https://drive.google.com/file/d/1f-ev-8xOviwSRA_VacUZj7w9MXLRSR57/view?usp=sharing', '_blank')}
              className='cursor-pointer'
            >
              <img src={resume} alt="Instagram" className='w-9 h-9' />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
