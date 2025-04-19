import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-dark text-white font-poppins min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
        <video
          src="https://res.cloudinary.com/dusayb6el/video/upload/v1743276239/z12f0ylmwuhbgljuse4d.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="z-20 px-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-blue">
            Get in Touch
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Whether you’re ready to start a project or just exploring ideas —
            we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="p-6 sm:p-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              <span className="text-blue">Let's</span> Connect
            </h2>
            <p className="text-gray-400">
              Tell us about your goals, and we’ll get back to you as soon as
              possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                <Mail className="text-blue" /> hello@CodeXMesh.dev
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                <Phone className="text-blue" /> +1 234 567 890
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                <MapPin className="text-blue" /> New York, NY, USA
              </div>
            </div>
            <div className="flex gap-4 mt-6 flex-wrap">
              <a href="#" className="hover:text-blue transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue transition">
                GitHub
              </a>
              <a href="#" className="hover:text-blue transition">
                Instagram
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mblgvgpj"
            method="POST"
            className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue text-white py-3 px-6 rounded-full hover:bg-blue/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
