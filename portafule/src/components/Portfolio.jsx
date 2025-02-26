import { CircuitBoard } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Portfolio() {
  const [val, setVal] = useState(false);

  const setValT = () => {
    setVal(true);
  };
  const setValF = () => {
    setVal(false);
  };


  // useEffect(() => {
  //   fetch('./folio.json')
  //   .then(res => res.json())
  //   .then(data => setProjects(data))
  // }, [])
  const projects = useLoaderData();

  

  return (
    <div className="portfolio bg-[var(--dark)] py-[6rem]" id="portfolio">
      <div className="textSection container text-[var(--pure)] mx-auto text-center">
        <span className="text-[var(--primary)] font-bold text-2xl">
          Latest Portfolio
        </span>
        <h1 className="text-[var(--pure)] my-4 text-4xl">
          Transforming Ideas into Exceptional
        </h1>
        <p className="text-[var(--pure)] text-[16px] mt-4 max-w-[600px] mx-auto">
          Business consulting consultants provide expert advice and guida
          businesses to help them improve their performance, efficiency, and
          organizational
        </p>
      </div>

      <div className="portfolioCat container mx-auto mt-12 flex justify-center gap-5">
        <button
          onClick={() => setValT()}
          className="web max-w-[250px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--grayish)] rounded-full"
        >
          Websites
        </button>
        <button
          onClick={() => setValF()}
          className="design max-w-[250px] justify-center gap-1 flex items-center btn p-4 text-[var(--pure)] bg-[var(--grayish)] rounded-full"
        >
          Designs
        </button>
      </div>

      <div className="portfolioItems container mx-auto mt-12 gridDev gap-8">
        {val === true
          ? projects.web.map((project) => (
              <div
                key={project.id}
                className="card bg-[var(--mid-dark)] p-[2rem] rounded-[10px]"
              >
                <div className="image w-[100%]">
                  <img
                    className="w-[100%] rounded-[10px] max-h-[450px] object-cover"
                    src={project.image}
                    alt={project.projectName}
                  />
                </div>
                <div className="icnNtitle flex gap-4 items-center mt-4">
                  <CircuitBoard className="text-[var(--pure)]" />
                  <div className="ttl">
                    <h3 className="text-[var(--pure)] text-2xl font-bold">
                      {project.projectName}
                    </h3>
                  </div>
                </div>
                <div className="skillscta">
                  <div className="skills flex gap-2 mt-4">
                    {Array.isArray(project.skills) ?
                      project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-[var(--grayish)] px-2 py-1 rounded-full text-sm text-[var(--pure)]"
                        >
                          {skill}
                        </span>
                      )) : <span className="bg-[var(--grayish)] px-2 py-1 rounded-full text-sm text-[var(--pure)]">{project.skills}</span>}
                  </div>
                </div>
              </div>
            ))
          : projects.designs.map((project) => (
              <div
                key={project.id}
                className="card bg-[var(--mid-dark)] p-[2rem] rounded-[10px]"
              >
                <div className="image w-[100%]">
                  <img
                    className="w-[100%] rounded-[10px] max-h-[450px] object-cover"
                    src={project.image}
                    alt={project.projectName}
                  />
                </div>
                <div className="icnNtitle flex gap-4 items-center mt-4">
                  <CircuitBoard className="text-[var(--pure)]" />
                  <div className="ttl">
                    <h3 className="text-[var(--pure)] text-2xl font-bold">
                      {project.projectName}
                    </h3>
                  </div>
                </div>
                <div className="skillscta">
                  <div className="skills flex gap-2 mt-4">
                    {Array.isArray(project.skills) ?
                      project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-[var(--grayish)] px-2 py-1 rounded-full text-sm text-[var(--pure)]"
                        >
                          {skill}
                        </span>
                      )) : <span className="bg-[var(--grayish)] px-2 py-1 rounded-full text-sm text-[var(--pure)]">{project.skills}</span>}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

// {projects.web.map((project) => (
//   <div
//     key={project.id}
//     className="card bg-[var(--mid-dark)] p-[2rem] rounded-[10px]"
//   >
//     <div className="image w-[100%]">
//       <img
//         className="w-[100%] rounded-[10px]"
//         src={project.image}
//         alt={project.projectName}
//       />
//     </div>
//     <div className="icnNtitle flex gap-4 items-center mt-4">
//       <CircuitBoard className="text-[var(--pure)]" />
//       <div className="ttl">
//         <h3 className="text-[var(--pure)] text-2xl font-bold">
//           {project.projectName}
//         </h3>
//       </div>
//     </div>
//     <div className="skillscta">
//       <div className="skills flex gap-2 mt-4">
//         {Array.isArray(project.skills) &&
//           project.skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-[var(--grayish)] px-2 py-1 rounded-full text-sm text-[var(--pure)]"
//             >
//               {skill}
//             </span>
//           ))}
//       </div>
//     </div>
//   </div>
// ))}
