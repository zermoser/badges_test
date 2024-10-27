import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-500">Features</a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-2">Welcome to My Landing Page</h1>
        <p className="text-xl mb-8">Beautiful, responsive, and fast with Tailwind and TypeScript.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow-lg hover:bg-blue-100">
          Get Started Eiei
        </button>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
