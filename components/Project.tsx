import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 text-white">
        <ProjectCard
          src="/1.jpg"
          title="Modern Next.JS Portfolio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt inventore amet delectus iusto quae dolore ullam accusamus soluta consequatur explicabo temporibus, distinctio, magnam veritatis? Exercitationem dolorum esse molestias laudantium unde, nulla error consequuntur suscipit corrupti doloribus vero quam ipsam maiores nostrum quo hic sint at ut facilis voluptatem assumenda."
        />
        <ProjectCard
          src="/2.jpg"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt inventore amet delectus iusto quae dolore ullam accusamus soluta consequatur explicabo temporibus, distinctio, magnam veritatis? Exercitationem dolorum esse molestias laudantium unde, nulla error consequuntur suscipit corrupti doloribus vero quam ipsam maiores nostrum quo hic sint at ut facilis voluptatem assumenda."
        />
        <ProjectCard
          src="/3.jpg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt inventore amet delectus iusto quae dolore ullam accusamus soluta consequatur explicabo temporibus, distinctio, magnam veritatis? Exercitationem dolorum esse molestias laudantium unde, nulla error consequuntur suscipit corrupti doloribus vero quam ipsam maiores nostrum quo hic sint at ut facilis voluptatem assumenda."
        />
      </div>
    </div>
  );
};

export default Project;
