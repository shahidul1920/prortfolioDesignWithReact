import { MoveRight, Paperclip, Speaker } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <div className='aboutPage bg-[var(--dark)] py-[6rem] grid md:gap-[1rem]'>
        
      <div className="textSection container mx-auto p-[2rem]">
        <h2 className='text-[var(--pure)] text-wrap text-2xl md:text-4xl text-center font-extrabold leading-[1.6] tracking-wide'>
            I am a <span className='text-[var(--primary)]'>Full Stack Developer</span> with a passion for creating beautiful and functional user experiences. I have a strong foundation in full-stack web development, and I am always looking to learn new <span className='text-[var(--primary)]'>technologies and improve</span> my skills. I am currently seeking new opportunities to work on exciting projects with a <span className='text-[var(--primary)]'>talented team.</span>
        </h2>
      </div>
      
      <div className="container mx-auto p-[2rem] mt-[2rem] md:mt-[5rem]">

        <div className="left relative flex justify-center items-center">
            <div className="experience flex flex-col justify-center items-center gap-[2.2rem] relative z-10">
                <div className="title h-[400px] grid items-center text-[var(--pure)] text-center text-4xl font-extrabold">
                    5 Years of <br /> Experience
                </div>
                <div className="subTitle text-[var(--pure)] text-center text-2xl font-extrabold h-[120px] grid items-center">
                    In Full Stack Development
                </div>
            </div>
        </div>

        <div className="right mt-[4rem] xl:mt-0">
            <div className="titleHd">
                <span className='text-[18px] text-[var(--primary)] font-bold'>About Me</span>
                <h2 className='text-[50px] text-[var(--pure)] font-extrabold'>
                Boost Business Strategic <br />
                Solutions 
                    <span className='text-[var(--primary)]'> with me.</span>
                </h2>
            </div>
            <div className="prg text-[var(--pure)] font-thin leading-[1.6] tracking-wide">
                <p>
                Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                </p>
            </div>

            <div className="crds grid grid-cols-1 md:grid-cols-2 gap-5 mt-[2rem]">
                <div className="crd bg-[var(--mid-dark)] p-[2rem] rounded-[10px]">
                    <div className="icnNtitle flex gap-4 items-center">
                        <div className="icn size-[50px] bg-[var(--primary)] rounded-full flex justify-center items-center">
                            <Paperclip className='text-[var(--pure)]' />
                        </div>
                        <div className="ttl">
                            <h3 className='text-[var(--pure)] text-2xl font-bold'>Business Solutions</h3>
                        </div>

                    </div>
                    <div className="prg text-[var(--pure)] font-thin text-[18px] leading-[1.6] tracking-wide mt-4">
                        <p>
                        Each one showcases my approach and dedication to detail, creativity
                        </p>
                    </div>
                </div>
                <div className="crd bg-[var(--mid-dark)] p-[2rem] rounded-[10px]">
                    <div className="icnNtitle flex gap-4 items-center">
                        <div className="icn size-[50px] bg-[var(--primary)] rounded-full flex justify-center items-center">
                            <Speaker className='text-[var(--pure)]' />
                        </div>
                        <div className="ttl">
                            <h3 className='text-[var(--pure)] text-2xl font-bold'>Business Solutions</h3>
                        </div>

                    </div>
                    <div className="prg text-[var(--pure)] font-thin text-[18px] leading-[1.6] tracking-wide mt-4">
                        <p>
                        Each one showcases my approach and dedication to detail, creativity
                        </p>
                    </div>
                </div>

                <button className='max-w-[250px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--primary)] rounded-full'>
                    <p>
                        Read More About Me
                    </p>
                    <MoveRight />
                </button>

            </div>
        </div>

      </div>

    </div>
  )
}
