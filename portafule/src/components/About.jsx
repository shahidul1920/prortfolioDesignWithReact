import React from 'react'

export default function About() {
  return (
    <div className='aboutPage bg-[var(--dark)] py-[6rem] grid md:gap-[1rem]'>
        
      <div className="textSection container mx-auto">
        <h2 className='text-[var(--pure)] text-wrap text-4xl text-center font-extrabold leading-[1.6] tracking-wide'>
            I am a <span className='text-[var(--primary)]'>Full Stack Developer</span> with a passion for creating beautiful and functional user experiences. I have a strong foundation in full-stack web development, and I am always looking to learn new <span className='text-[var(--primary)]'>technologies and improve</span> my skills. I am currently seeking new opportunities to work on exciting projects with a <span className='text-[var(--primary)]'>talented team.</span>
        </h2>
      </div>
      
      <div className="container mx-auto gridDev mt-[4rem]">

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

        <div className="right">
            <div className="titleHd">
                <span className='text-[18px] text-[var(--primary)] font-bold'>About Me</span>
                <h2 className='text-[50px] text-[var(--pure)] font-extrabold'>
                Boost Business Strategic <br />
                Solutions 
                    <span className='text-[var(--primary)]'> with me.</span>
                </h2>
            </div>
        </div>

      </div>

    </div>
  )
}
