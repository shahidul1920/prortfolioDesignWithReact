import { MoveRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="container mx-auto px-4 py-12">
        <div className="left">
          <div className="headline">
            <span>I AM</span>
            <h1>
              Ralph Edwards, a Full Stuck <br />
              <span>Developer</span>
            </h1>
          </div>
          <div className="prg">
            <p>
              I am a Full Stack Developer with a passion for creating beautiful
              and functional user experiences. I have a strong foundation in
              full-stack web development, and I am always looking to learn new
              technologies and improve my skills. I am currently seeking new
              opportunities to work on exciting projects with a talented team.
            </p>
          </div>
          <div className="cta">
            <a href="#learn" className="flex justify-center items-center btn">
              <p>Learn About Me</p> <MoveRight />
            </a>
          </div>

        </div>

        <div className="right"></div>
      </section>
    </div>
  );
}
