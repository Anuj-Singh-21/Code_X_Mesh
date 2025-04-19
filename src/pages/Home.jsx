import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="font-poppins font-light relative w-full h-screen overflow-hidden">
        <video
          src="https://res.cloudinary.com/dusayb6el/video/upload/v1743276239/z12f0ylmwuhbgljuse4d.mp4"
          autoPlay
          loop
          muted
          className="top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center text-white z-20">
          <div className="px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-4xl sm:text-5xl lg:text-7xl font-light">
              <h1 className="text-blue">Digital</h1>
              <h1>Innovation</h1>
            </div>
            <div className="mt-4 md:mt-5 text-base md:text-xl font-thin max-w-xl md:max-w-2xl">
              Through rapid engineering and design, we streamline your projects,
              enabling you to realize your industry vision faster than ever
              before.
            </div>
          </div>
        </div>
      </div>

      {/* Innovating Digital Experience */}
      <div className="bg-background px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-wrap gap-2 text-white text-2xl sm:text-3xl">
          <h1>Innovating</h1>
          <h1>Digital</h1>
          <h1 className="text-blue">Experience</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <Card
            bg="light"
            title="Envision"
            description="Transforming raw ideas into clear, strategic product visions. We define the core concept, scope, and potential, laying the foundation for innovation."
          />
          <Card
            bg="light"
            title="Craft"
            description="Designing intuitive and engaging user experiences. We refine the product's interface and functionality, ensuring seamless interaction and aesthetic appeal."
          />
          <Card
            bg="light"
            title="Build"
            description="Developing robust and scalable software solutions. We translate designs into functional code, constructing the product's core architecture and features."
          />
          <Card
            title="Evolve"
            bg="light"
            description="Continuously optimizing and improving the product. We iterate based on user feedback and market trends, ensuring long-term relevance and performance."
          />
          <Card
            title="Grow"
            bg="light"
            description="Scaling the product for wider adoption and impact. We expand the product's reach, adding new features and capabilities to meet evolving market demands."
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-dark px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-wrap gap-2 text-white text-2xl sm:text-3xl">
          <h1>Your complete</h1>
          <h1 className="text-blue">Digital Solutions</h1>
          <h1>Partner</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <Card
            title="Web Development"
            description="From dynamic web applications to e-commerce platforms, we tailor web solutions to your unique needs. Experience the power of a website built for your success."
          />
          <Card
            title="Android Development"
            description="Unlock the potential of Android with our custom app development services. We build robust and feature-rich applications that meet your business objectives."
          />
          <Card
            title="iOS Development"
            description="Craft elegant and powerful iOS applications. We develop smooth, high-quality apps that deliver a premium user experience on Apple devices."
          />
          <Card
            title="UI/UX"
            description="Captivate your audience with stunning UI/UX design. We transform complex ideas into intuitive and visually appealing user interfaces."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
