import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-pagebg text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hi, I'm Vishal, a final-year AI and Data Science undergraduate proficient in Python, Java, and C++. I've successfully completed multiple projects in Machine Learning and AI. Actively seeking connections in the AI and Data Science community, I'm passionate about advancing technology in these fields. Open to collaboration and new opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;