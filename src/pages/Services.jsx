import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="relative w-full h-screen font-poppins font-light text-white overflow-hidden">
        <div className="font-poppins font-light relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            src="https://res.cloudinary.com/dusayb6el/video/upload/v1743276239/z12f0ylmwuhbgljuse4d.mp4"
            autoPlay={true}
            loop
            muted
            className="top-0 left-0 w-full h-full object-cover"
          ></video>

          {/* Semi-transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

          {/* Content */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center text-white text-4xl font-bold z-20">
            <div>
              <div className=" px-10 gap-4">
                <h1 className="text-blue text-5xl font-light capitalize">
                  Digital solutions designed{" "}
                </h1>
                <h1 className=" text-5xl font-light capitalize">
                  to accelerate your business growth.{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        <div className="absolute z-20 flex flex-col justify-center h-full px-10">
          <h1 className="text-6xl font-light">Services</h1>
          <h1 className="text-6xl font-light text-blue mt-2">
            Built to Accelerate
          </h1>
          <p className="text-xl mt-6 max-w-3xl">
            Digital acceleration solutions tailored to help you ship fast,
            innovate boldly, and scale effectively. Partner with a team that
            builds with purpose.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-background text-white px-10 py-20">
        <h2 className="text-4xl mb-6 text-blue">What We Offer</h2>
        <p className="text-lg max-w-5xl mb-12">
          From strategy to execution, we help you at every stage of your digital
          product journey. Whether you're a startup or an enterprise, our
          services are built to adapt and scale.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Product Design"
            description="UX/UI design grounded in user research and creativity to drive business goals."
            bg="light"
          />
          <Card
            title="Web Development"
            description="Scalable, maintainable, and fast web apps built with cutting-edge technologies."
            bg="light"
          />
          <Card
            title="Mobile App Development"
            description="Cross-platform and native mobile apps with seamless user experience."
            bg="light"
          />
          <Card
            title="DevOps & Cloud"
            description="Automation, scalability, and performance tuning on cloud-native platforms."
            bg="light"
          />
          <Card
            title="AI & Machine Learning"
            description="Custom ML models and AI integrations that solve real-world problems."
            bg="light"
          />
          <Card
            title="Digital Transformation"
            description="Empowering businesses to embrace modern tech and transform legacy systems."
            bg="light"
          />
        </div>
      </div>

      {/* Case Studies Teaser */}
      <div className="bg-gray-dark text-white px-10 py-20 text-center">
        <h2 className="text-4xl mb-6 text-blue">Case Studies</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          From fintech to healthtech, we’re shaping bold digital journeys for
          tomorrow’s market leaders. Explore how we approach innovation,
          strategy, and seamless execution.
        </p>
      </div>

      {/* Industries Served */}
      <div className="bg-background text-white px-10 py-20">
        <h2 className="text-4xl mb-6 text-blue">Industries We Work With</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Fintech"
            description="Modern finance solutions, security-first systems."
            bg="light"
          />
          <Card
            title="Healthcare"
            description="HIPAA-compliant, patient-centric digital tools."
            bg="light"
          />
          <Card
            title="Retail & E-commerce"
            description="Next-gen shopping experiences, powered by data."
            bg="light"
          />
          <Card
            title="Real Estate"
            description="Tools for brokers, buyers, and sellers to connect and grow."
            bg="light"
          />
          <Card
            title="Education"
            description="Learning management and edtech platforms for all levels."
            bg="light"
          />
          <Card
            title="Media & Entertainment"
            description="Streaming, publishing, and fan engagement platforms."
            bg="light"
          />
        </div>
      </div>

      {/* Why CodeWeb */}
      <div className="bg-gray-dark text-white px-10 py-20">
        <h2 className="text-4xl mb-6 text-blue">Why Choose CodeWeb?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card
            title="Speed to Market"
            description="Deliver MVPs and full-scale products faster, with expert teams."
          />
          <Card
            title="Cross-Functional Expertise"
            description="Designers, developers, product managers, and QA—all under one roof."
          />
          <Card
            title="Proven Process"
            description="Agile workflows, modern stacks, continuous improvement."
          />
          <Card
            title="Scalable Partnerships"
            description="Grow with us—from startup phase to enterprise expansion."
          />
        </div>
      </div>

      {/* Get Started CTA */}
      <div className="bg-black text-white px-10 py-20 text-center">
        <h2 className="text-4xl mb-6 text-blue">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-lg mb-4">
          Let’s create something meaningful—together.
        </p>
        <button className="bg-blue text-white px-6 py-3 rounded-xl hover:bg-blue/80 transition">
          <Link to="/contact">Start Your Project</Link>
        </button>
      </div>
    </>
  );
};

export default Services;
