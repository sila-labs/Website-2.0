import React from 'react';
import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/sila-favicon.png" alt="Sila Labs Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold">Sila Labs</span>
          </div>
          {/* Links */}
          <div className="space-x-6 text-gray-700 hidden md:flex">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#what-we-do" className="hover:text-green-600">What We Do</a>
            <a href="#current-tool" className="hover:text-green-600">Current Tool</a>
            <a href="#team" className="hover:text-green-600">Team</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-white flex flex-col justify-center items-center text-center px-6 pt-36 pb-28 md:pt-44 md:pb-36"
      >
        <img
          src="/sila-logo.png"
          alt="Sila Labs Logo"
          className="w-56 md:w-72 lg:w-96 object-contain mb-6"
        />
        <p className="text-2xl md:text-4xl font-bold tracking-tight mb-2">Think Small.</p>
        <p className="text-xl italic text-gray-600 mb-6">Hardware & software for the nanoscale</p>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700">
          We engineer quantum‑grounded nanoscale systems—integrating device design, simulation, and software—to
          enable the next generation of precision technology.
        </p>

      </section>

      {/* What We Do */}
      <section id="what-we-do" className="bg-gray-100 py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">What We Do</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700">
          Guided by Feynman’s two imperatives—achieving quantum control at the nanoscale, as he described as "swallowing the surgeon", and simulating physics on quantum computers, or "quantum simulation"—we build both hardware and software. We design and prototype quantum-informed devices at atomic scales, and we develop the simulation, modeling, and control software that makes their behavior predictable and deployable. Our mission is to transform fundamental quantum effects into practical platforms for sensing, computation, and precision control.        </p>

      </section>


      {/* Current Tool */}
      <section id="current-tool" className="bg-white py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Current Tool</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
          Our first tool is a quantum transport simulation platform, designed to model conductance and visualize
          effects like disorder and magnetic fields in nanoscale systems.
        </p>
        <a
          href="http://silalabs.io/qtransport/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-green-700 transition-colors"
        >
          Try Now
        </a>
      </section>

      {/* Team */}
      <section id="team" className="bg-gray-100 py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Team</h2>
        <p className="text-lg text-gray-600">Senuri D.B. Rupasinghe</p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-lg text-gray-600">operations.sila.labs@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sila Labs. All rights reserved.
        <Link to="/privacy-policy" className="ml-4 text-green-600 hover:underline">
          Privacy Policy
        </Link>
      </footer>



    </div>
  );
}
