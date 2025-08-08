import React from "react";
import Constants from "../_utils/Constants";

const Hero = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            <span className="text-primary">Upload, Save </span>and easily{" "}
            <span className="text-primary">Share </span>
            your files in one place
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-500 sm:text-lg/relaxed">
            {Constants.desc}
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
              href="/files"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-primary shadow-sm transition-colors hover:bg-gray-50 hover:text-blue-700 "
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
