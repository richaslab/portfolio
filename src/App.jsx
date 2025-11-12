import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js, featuring real-time data synchronization.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with integrated payment processing and inventory management.",
      tech: ["Next.js", "TypeScript", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Three",
      description: "AI-powered analytics dashboard providing insights and predictions for business metrics.",
      tech: ["Python", "TensorFlow", "React"],
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "TypeScript",
    "Next.js", "MongoDB", "PostgreSQL", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Name
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="block hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#skills" className="block hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Building beautiful, functional web experiences with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
              Get In Touch
            </a>
            <a href="#projects" className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate De with a love for creating elegant solutions to complex problems. 
            With experience in modern web technologies, I specialize in building scalable applications that deliver 
            exceptional user experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300 border border-gray-700">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} className="flex items-center text-blue-400 hover:text-blue-300 transition">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center text-blue-400 hover:text-blue-300 transition">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-6 py-3 rounded-full text-lg font-semibold hover:scale-110 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="https://github.com/yourusername" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition transform hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2025 Your Name. Built with React and deployed on Vercel.</p>
      </footer>
    </div>
  );
}