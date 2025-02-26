import React from 'react'

export default function Portfolio() {
  return (
    <div className="portfolio bg-[var(--dark)] py-[6rem]" id="portfolio">
      <div className="textSection container text-[var(--pure)] mx-auto text-center">
        <span className='text-[var(--primary)] font-bold text-2xl'>Latest Portfolio</span>
        <h1 className='text-[var(--pure)] my-4 text-4xl'>Transforming Ideas into Exceptional</h1>
        <p className='text-[var(--pure)] text-[16px] mt-4 max-w-[600px] mx-auto'>
        Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
        </p>
      </div>


      <div className="portfolioCat container mx-auto mt-12 flex justify-center gap-5">
        <button className="web max-w-[250px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--grayish)] rounded-full">Websites</button>
        <button className="design max-w-[250px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--grayish)] rounded-full">Designs</button>
      </div>

      <div className="portfolioItems container mx-auto mt-12 gridDev gap-5">
        <div className="item bg-[var(--mid-dark)] rounded-[10px]">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1606781189312-6c3d2f7f9f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="ttl text-[var(--pure)] text-2xl font-bold mt-4">Business Solutions</div>
          <div className="prg text-[var(--pure)] font-thin text-[18px] leading-[1.6] tracking-wide mt-4">
            <p>
            Each one showcases my approach and dedication to detail, creativity
            </p>
          </div>
        </div>
        <div className="item bg-[var(--mid-dark)] rounded-[10px]">
          <div className="img">
            <img src="https://images.unsplash.com/photo-1606781189312-6c3d2f7f9f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="ttl text-[var(--pure)] text-2xl font-bold mt-4">Business Solutions</div>
          <div className="prg text-[var(--pure)] font-thin text-[18px] leading-[1.6] tracking-wide mt-4">
            <p>
            Each one showcases my approach and dedication to detail, creativity
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
