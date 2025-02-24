import { Badge, GraduationCap, Trophy } from "lucide-react";
import React from "react";

export default function ExpNedu() {
  return (
    <div className="expNedu bg-[var(--dark)] py-[6rem]">
      <div className="container gridDev mx-auto gap-[3.4rem] xl:gap-0">
        <div className="exp">
          <div className="headLn flex items-center gap-4">
            <Trophy className="text-[var(--primary)] size-[40px]" />
            <h2 className="text-4xl text-[var(--pure)] font-extrabold">
              My Experiences
            </h2>
          </div>

          <div className="expCards mt-6">
            <div className="card w-[90%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2">
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

            <div className="card w-[90%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
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

            <div className="card w-[90%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
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

            <div className="card w-[90%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
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
            <div className="card w-[90%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2">
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

            <div className="card w-[90%] bg-[var(--mid-dark)] p-[2rem] rounded-[10px] grid gap-2 mt-4">
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
    </div>
  );
}
