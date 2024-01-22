import React from "react";
import Me from '../assets/Profile.jpeg';

export default function Home() {
  return (
    <div className="bg-black-500 p-0">
      <div className="flex items-center justify-center">
        <figure className="bg-black-800 p-10 dark:bg-slate-800 flex items-center max-w-screen-sm">
          <div className="mr-16">
            <img
            
              className="w-70 h-70 rounded-full "
              src={Me}
              alt="Devanshu Dhyani"
            />
          </div>
          </figure>
          <div className="bg-black-800 p-10 dark:bg-slate-800 w-550 h-336" style={{height:"416px"}}>
            <blockquote>
              <p className="text-2xl font-serif text-white p-10">
                I'm a third-year Computer Science student deeply engrossed in
                the realm of front-end development. My enthusiasm for embracing
                new technologies fuels my journey in crafting user-centric and
                visually engaging interfaces. Eager to contribute innovative
                solutions, I bring a dynamic perspective to the evolving
                landscape of web development.
              </p>
            </blockquote>
            <figcaption className="text-xl">
              <div className="text-white font-bold">Devanshu Dhyani</div>
              <div className="text-white">Student, Dehradun</div>
            </figcaption>
          </div>

      </div>
    </div>
  );
}
