import { Facebook, Instagram, Linkedin, MoveRight, Twitter } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-[var(--dark)] h-screen">
      <section className="container flex gap-2 mx-auto px-4 py-12">
        <div className="max-w-[650px] left flex flex-col justify-center gap-8">
          <div className="headline">
            <span className="text-[var(--primary)] text-[18px]">I AM</span>
            <h1 className="text-[var(--pure)] text-[50px] font-extrabold">
              Ralph Edwards, a Full Stuck <br />
              <span className="text-[var(--primary)]">Developer</span>
            </h1>
          </div>
          <div className="prg">
            <p className="text-[var(--pure)] font-thin leading-[1.6] tracking-wide">
              I am a <span className="text-[var(--primary)]">Full Stack Developer</span> with a passion for creating beautiful
              and functional user experiences. I have a strong foundation in
              <span  className="text-[var(--primary)]">full-stack web development</span>, and I am always looking to learn new
              technologies and improve my <span className="text-[var(--primary)]">skills</span>. I am currently seeking new
              opportunities to work on exciting projects with a talented team.
            </p>
          </div>
          <div className="cta">
            <a href="#learn" className="max-w-[200px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--primary)] rounded-full">
              <p>Learn About Me</p> <MoveRight />
            </a>
          </div>
          <div className="socialIcn">
            <h3 className="text-[var(--pure)] mb-4">Connect with me:</h3>
            <ul className="flex gap-[.6rem]">
              <li className="size-[35px] flex items-center justify-center bg-[var(--grayish)] rounded-full">
                <a href="https://facebook.com" className="text-[var(--primary)]">
                  <Facebook className="h-[16px]" />
                </a>
              </li>
              <li className="size-[35px] flex items-center justify-center bg-[var(--grayish)] rounded-full">
                <a href="https://twitter.com" className="text-[var(--primary)]">
                  <Twitter className="h-[16px]" />
                </a>
              </li>
              <li className="size-[35px] flex items-center justify-center bg-[var(--grayish)] rounded-full">
                <a
                  href="https://instagram.com"
                  className="text-[var(--primary)]"
                >
                  <Instagram className="h-[16px]" />
                </a>
              </li>
              <li className="size-[35px] flex items-center justify-center bg-[var(--grayish)] rounded-full">
                <a href="https://linkedin.com" className="text-[var(--primary)]">
                  <Linkedin className="h-[16px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right max-w-[650px]">
          <div className="w-[650px] h-[100%] relative z-5 flex justify-center items-center ">
            <img className="absolute z-40 bottom-0 w-[400px] min-w-[350px]" src="./banner-user-image-two.png" alt="" />
            <h1 className="absolute text-[60px] top-[30%] z-50 text-4xl text-[var(--pure)] font-extrabold">Web Developer</h1>
            <h1 className="absolute text-[60px]  z-20 text-4xl text-[var(--pure)] font-extrabold">Web Developer</h1>
            <img className="absolute z-10 w-[400px] min-w-[400px] h-[250px] bottom-0" src="./banner-user-image-two-red-bg.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
