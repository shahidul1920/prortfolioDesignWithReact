import React from 'react'

export default function ExpertAreas() {
  return (
    <div className="expertAreas bg-[var(--dark)] py-[6rem]" id="expertAreas">
        <div className="container gridDev mx-auto bg-[var(--mid-dark)] p-14 rounded-2xl">
            <div className="textSection">
                <span className="text-[var(--primary)] font-bold text-2xl">My Skill</span>
                <h1 className="text-[var(--pure)] my-4 text-4xl">My Experts Areas Where I
                Gained Skill</h1>
                <p className="text-[var(--pure)] text-[16px] mt-4 max-w-[650px]">Business consulting consultants provide expert advice and guida busi nesses to help them improve their performance, efficiency, and organ izational Business consulting consultants provide</p>
            </div>
            <div className="expertSkills grid grid-cols-2 gap-8">
                <div className="card p-8 border-1 border-[var(--primary)] rounded-[10px]">
                    <div className="icon size-[60px] border-1 border-[var(--primary)] rounded-full grid place-items-center">
                        <img className='invert-100' src="./icon-01.png" alt="" />
                    </div>
                    <h1 className="text-[var(--pure)] my-4 text-2xl font-extrabold">Framer</h1>
                    <p className="text-[var(--pure)] text-[16px]">The personal portfol category includes websites or physic Your
                    Journey Your Story</p>
                </div>
                <div className="card p-8 border-1 border-[var(--primary)] rounded-[10px]">
                    <div className="icon size-[60px] border-1 border-[var(--primary)] rounded-full grid place-items-center">
                        <img className='invert-100' src="./icon-02.png" alt="" />
                    </div>
                    <h1 className="text-[var(--pure)] my-4 text-2xl font-extrabold">Webflow</h1>
                    <p className="text-[var(--pure)] text-[16px]">The personal portfol category includes websites or physic Your
                    Journey Your Story</p>
                </div>
                <div className="card p-8 border-1 border-[var(--primary)] rounded-[10px]">
                    <div className="icon size-[60px] border-1 border-[var(--primary)] rounded-full grid place-items-center">
                        <img className='invert-100' src="./icon-03.png" alt="" />
                    </div>
                    <h1 className="text-[var(--pure)] my-4 text-2xl font-extrabold">Figma</h1>
                    <p className="text-[var(--pure)] text-[16px]">The personal portfol category includes websites or physic Your
                    Journey Your Story</p>
                </div>
                <div className="card p-8 border-1 border-[var(--primary)] rounded-[10px]">
                    <div className="icon size-[60px] border-1 border-[var(--primary)] rounded-full grid place-items-center">
                        <img className='invert-100' src="./icon-04.png" alt="" />
                    </div>
                    <h1 className="text-[var(--pure)] my-4 text-2xl font-extrabold">Wordpress</h1>
                    <p className="text-[var(--pure)] text-[16px]">The personal portfol category includes websites or physic Your
                    Journey Your Story</p>
                </div>
            </div>
        </div>
    </div>
  )
}
