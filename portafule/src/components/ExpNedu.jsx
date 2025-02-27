import {
  Badge,
  GraduationCap,
  PaintbrushVertical,
  SquareDashedBottomCode,
  Trophy,
} from "lucide-react";
import React from "react";

export default function ExpNedu() {
  return (
    <div className="expNedu bg-[var(--dark)] py-[6rem]">
      <div className="container grid grid-cols-1 xl:grid-cols-2 p-[2rem] mx-auto gap-[3.4rem]">
        <div className="exp">
          <div className="headLn flex items-center gap-4">
            <Trophy className="text-[var(--primary)] size-[40px]" />
            <h2 className="text-4xl text-[var(--pure)] font-extrabold">
              My Experiences
            </h2>
          </div>

          <div className="expCards mt-6">
            <div className="card w-[100%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2">
              <div className="year flex items-center gap-4">
                <Badge className="text-[var(--primary)]" />
                <span className="text-[var(--primary)]">2019 - 2021</span>
              </div>
              <div className="headlnXp">
                <h2 className="text-[var(--pure)] text-2xl font-extrabold">
                  Senior Developer
                </h2>
              </div>
              <span className="company text-[var(--grayish)]">
                CodeGenius (usa)
              </span>
            </div>

            <div className="card w-[100%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
              <div className="year flex items-center gap-4">
                <Badge className="text-[var(--primary)]" />
                <span className="text-[var(--primary)]">2022 - 2022</span>
              </div>
              <div className="headlnXp">
                <h2 className="text-[var(--pure)] text-2xl font-extrabold">
                  Web Developer
                </h2>
              </div>
              <span className="company text-[var(--grayish)]">
                Modarni Tomoli
              </span>
            </div>

            <div className="card w-[100%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
              <div className="year flex items-center gap-4">
                <Badge className="text-[var(--primary)]" />
                <span className="text-[var(--primary)]">2020 - 2022</span>
              </div>
              <div className="headlnXp">
                <h2 className="text-[var(--pure)] text-2xl font-extrabold">
                  UI Designer
                </h2>
              </div>
              <span className="company text-[var(--grayish)]">
                Tech Design Company
              </span>
            </div>

            <div className="card w-[100%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
              <div className="year flex items-center gap-4">
                <Badge className="text-[var(--primary)]" />
                <span className="text-[var(--primary)]">2016 - 2019</span>
              </div>
              <div className="headlnXp">
                <h2 className="text-[var(--pure)] text-2xl font-extrabold">
                  Intern UI/UX Designer
                </h2>
              </div>
              <span className="company text-[var(--grayish)]">
                USA Web Company
              </span>
            </div>
          </div>
        </div>

        <div className="edu">
          <div className="headLn flex items-center gap-4">
            <GraduationCap className="text-[var(--primary)] size-[40px]" />
            <h2 className="text-4xl text-[var(--pure)] font-extrabold">
              My Education
            </h2>
          </div>

          <div className="eduCards mt-6">
            <div className="card w-[100%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2">
              <div className="year flex items-center gap-4">
                <Badge className="text-[var(--primary)]" />
                <span className="text-[var(--primary)]">2015 - 2019</span>
              </div>
              <div className="headlnXp">
                <h2 className="text-[var(--pure)] text-2xl font-extrabold">
                  Bachelor in Computer Science
                </h2>
              </div>
              <span className="company text-[var(--grayish)]">
                University of California
              </span>
            </div>

            <div className="card w-[100%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
              <div className="year flex items-center gap-4">
                <Badge className="text-[var(--primary)]" />
                <span className="text-[var(--primary)]">2012 - 2015</span>
              </div>
              <div className="headlnXp">
                <h2 className="text-[var(--pure)] text-2xl font-extrabold">
                  High School Diploma
                </h2>
              </div>
              <span className="company text-[var(--grayish)]">
                High School of California
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* skills */}

      <div className="skills p-[2rem] container grid grid-cols-1 xl:grid-cols-2 gap-[5rem] xl:gap-0 mx-auto mt-[6rem]">
        <div className="designSkills">
          <div className="headLn flex items-center gap-4">
            <PaintbrushVertical className="text-[var(--primary)] size-[40px]" />
            <h2 className="text-4xl text-[var(--pure)] font-extrabold">
              Design Skill
            </h2>
          </div>

          <div className="grid gap-[3rem] mt-6">
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">Figma</h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[70%] h-[10px] rounded-[10px]" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">
                  Adobe XD
                </h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[60%] h-[10px] rounded-[10px]" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">
                  Photoshop
                </h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[80%] h-[10px] rounded-[10px]" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">
                  Illustrator
                </h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[90%] h-[10px] rounded-[10px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="devSkills">
          <div className="headLn flex items-center gap-4">
            <SquareDashedBottomCode className="text-[var(--primary)] size-[40px]" />
            <h2 className="text-4xl text-[var(--pure)] font-extrabold">
              Development Skill
            </h2>
          </div>

          <div className="grid gap-[3rem] mt-6">
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">WordPress</h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[70%] h-[10px] rounded-[10px]" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">
                  HTML & CSS (SCSS)
                </h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[95%] h-[10px] rounded-[10px]" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">
                  JavaScript
                </h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[80%] h-[10px] rounded-[10px]" />
              </div>
            </div>
            <div className="skill">
              <div className="name">
                <h3 className="text-[var(--pure)] text-2xl font-bold">
                  React JS
                </h3>
              </div>
              <div className="bar bg-[var(--mid-dark)] w-[100%] xl:w-[80%] h-[10px] rounded-[10px] mt-2">
                <div className="progress bg-[var(--primary)] w-[90%] h-[10px] rounded-[10px]" />
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
