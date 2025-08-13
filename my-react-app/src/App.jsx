// App.jsx
import React from 'react';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6">
        <img src="/sila-logo.png" alt="Sila Labs Logo" className="w-40 mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Sila Labs</h1>
        <p className="text-lg italic text-gray-600 mb-6">Think Big. Build Small.</p>
        <p className="max-w-xl text-md md:text-lg">
          Developing technologies at the nanoscale, backed by quantum mechanics. Making Feynman's
          “swallowing the surgeon” dream a reality.
        </p>
      </section>

      {/* What We Do */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
        <p className="max-w-2xl mx-auto">
          Sila Labs develops technologies at the nanoscale for the purpose of making Feynman’s dream of
          “swallowing the surgeon” a reality. We build hardware at the scale of atoms—grounded in quantum
          mechanics.
        </p>
      </section>

      {/* Product Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Current Tool</h2>
        <p className="max-w-2xl mx-auto">
          Our first tool is a quantum transport simulation platform, designed to model conductance and visualize
          effects like disorder and magnetic fields in nanoscale systems.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Team</h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sila Labs. All rights reserved.
      </footer>
    </div>
  );
}
