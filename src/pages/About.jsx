import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen font-poppins font-light text-white overflow-hidden">
        <div className="relative w-full h-screen overflow-hidden">
          <video
            src="https://res.cloudinary.com/dusayb6el/video/upload/v1743276239/z12f0ylmwuhbgljuse4d.mp4"
            autoPlay
            loop
            muted
            className="top-0 left-0 w-full h-full object-cover"
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center text-white text-4xl font-bold z-20">
            <div className="px-5 sm:px-10 gap-4">
              <h1 className="text-blue text-3xl sm:text-5xl font-light capitalize">
                Partner with a rising
              </h1>
              <h1 className="text-blue text-3xl sm:text-5xl font-light capitalize">
                digital consultancy from India
              </h1>
              <h1 className="text-sm font-light capitalize mt-5">
                We craft modern web and mobile applications for clients across
                the globe — blending innovation with user-centric design.
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute z-20 flex flex-col justify-center h-full px-5 sm:px-10">
          <h1 className="text-3xl sm:text-6xl font-light">
            Building software for
          </h1>
          <h1 className="text-3xl sm:text-6xl font-light text-blue mt-2">
            world changers
          </h1>
          <p className="text-base sm:text-xl mt-6 max-w-3xl">
            Turning Ideas into Impact We're a passionate web development team
            helping startups and small businesses launch fast, modern digital
            experiences.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-background text-white px-5 sm:px-10 py-20">
        <h2 className="text-3xl sm:text-4xl mb-4 text-blue">Our Mission</h2>
        <p className="text-base sm:text-lg max-w-5xl">
          We believe good software solves real problems. Our mission is to help
          businesses launch meaningful web solutions that grow with them.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-dark px-5 sm:px-10 py-20 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <div>
          <h3 className="text-blue text-3xl sm:text-5xl font-thin">Quality</h3>
          <p className="mt-2">Focused on quality, not quantity </p>
        </div>
        <div>
          <h3 className="text-blue text-3xl sm:text-5xl font-thin">Build</h3>
          <p className="mt-2">
            New on the scene - Built by creators with big ambition
          </p>
        </div>
        <div>
          <h3 className="text-blue text-3xl sm:text-5xl font-thin">Grow</h3>
          <p className="mt-2">Ready to grow with our clients </p>
        </div>
        <div>
          <h3 className="text-blue text-3xl sm:text-5xl font-thin">5+</h3>
          <p className="mt-2"> successful client projects delivered</p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-background text-white px-5 sm:px-10 py-20">
        <h2 className="text-3xl sm:text-4xl mb-6 text-blue">
          CodeWeb ’s Core Values
        </h2>
        <p className="mb-8 max-w-5xl">
          Our values guide how we work, collaborate, and deliver results—even as
          a small team, we aim high.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Exceed Expectations"
            description="Never settle for 'good enough' when you can do better."
            bg="light"
          />
          <Card
            title="Own It"
            description="Take initiative and challenge the status quo constructively."
            bg="light"
          />
          <Card
            title="Be Curious"
            description="Experiment bravely, learn from success and failure."
            bg="light"
          />
          <Card
            title="Act with Integrity"
            description="Everything you say and do reflects who we are."
            bg="light"
          />
          <Card
            title="Build Culture"
            description="Foster transparency and inclusivity—every day."
            bg="light"
          />
          <Card
            title="Grow Together"
            description="Support your own growth and lift others with you."
            bg="light"
          />
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-gray-dark text-white px-5 sm:px-10 py-20">
        <h2 className="text-3xl sm:text-4xl mb-8 text-blue">
          Meet Our Leadership
        </h2>
        <p>
          We’re a small, passionate group of designers, developers, and
          problem-solvers dedicated to building things that matter.
        </p>
      </div>

      {/* Social Impact Section */}
      <div className="bg-background text-white px-5 sm:px-10 py-20">
        <h2 className="text-3xl sm:text-4xl mb-6 text-blue">
          Be Yourself and Belong
        </h2>
        <p className="max-w-4xl mb-8">
          We’re building a studio that values people over process. Diversity,
          inclusivity, and kindness are part of our foundation.
        </p>
        <p className="text-blue underline cursor-pointer">
          Read more about diversity at CodeWeb
        </p>
      </div>

      {/* B Corp Section */}
      <div className="bg-gray-dark text-white px-5 sm:px-10 py-20">
        <h2 className="text-3xl sm:text-4xl mb-6 text-blue">
          Business as a Force for Good
        </h2>
        <p className="max-w-4xl mb-4">
          We’re inspired by those who came before us and aim to give back to the
          tech community as we grow.
        </p>
        <p className="text-blue underline cursor-pointer">
          Read about sustainability at CodeWeb
        </p>
      </div>

      {/* Community & Hidden Heroes */}
      <div className="bg-background text-white px-5 sm:px-10 py-20">
        <h2 className="text-3xl sm:text-4xl mb-6 text-blue">
          Hidden Heroes Initiative
        </h2>
        <p className="max-w-4xl mb-8">
          We’re inspired by those who came before us and aim to give back to the
          tech community as we grow.
        </p>
        <p className="text-blue underline cursor-pointer">
          Uncover the Hidden Heroes with us
        </p>
      </div>

      {/* Footer CTA */}
      <div className="bg-black text-white px-5 sm:px-10 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl mb-6 text-blue">
          Have a project idea?
        </h2>
        <p className="text-base sm:text-lg mb-4">
          Let’s bring it to life together. Start with a quick chat — no
          pressure, just possibilities.
        </p>
        <button className="bg-blue text-white px-6 py-3 rounded-xl hover:bg-blue/80 transition">
          <Link to="/contact">Become a CodeWeb Partner</Link>
        </button>
      </div>
    </>
  );
};

export default About;
