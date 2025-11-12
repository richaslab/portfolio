import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Server, Cloud, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mediumPosts, setMediumPosts] = useState([]);

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  const fetchMediumPosts = async () => {
    try {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@arunima.dev');
      const data = await response.json();
      
      if (data.status === 'ok') {
        setMediumPosts(data.items.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
    }
  };

  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Built end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated testing and deployment.",
      tech: ["Jenkins", "Docker", "Kubernetes", "GitLab"],
      link: "#",
      github: "#"
    },
    {
      title: "Cloud Infrastructure as Code",
      description: "Designed and deployed scalable cloud infrastructure using Terraform and AWS, reducing deployment time by 60%.",
      tech: ["Terraform", "AWS", "CloudFormation", "Python"],
      link: "#",
      github: "#"
    },
    {
      title: "Monitoring & Observability",
      description: "Implemented comprehensive monitoring solution with Prometheus, Grafana, and ELK stack for real-time insights.",
      tech: ["Prometheus", "Grafana", "ELK", "Ansible"],
      link: "#",
      github: "#"
    },
    {
      title: "Container Orchestration",
      description: "Migrated monolithic applications to microservices architecture using Docker and Kubernetes clusters.",
      tech: ["Kubernetes", "Docker", "Helm", "ArgoCD"],
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    "AWS", "Azure", "GCP", "Docker", "Kubernetes",
    "Terraform", "Ansible", "Jenkins", "GitLab CI",
    "Prometheus", "Grafana", "ELK Stack", "Python",
    "Bash", "Linux", "Git", "ArgoCD"
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Certified: Terraform Associate",
    "Docker Certified Associate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Arunima
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition">About</a>
              <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
              <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block hover:text-purple-400 transition" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="block hover:text-purple-400 transition" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#skills" className="block hover:text-purple-400 transition" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#blog" className="block hover:text-purple-400 transition" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#contact" className="block hover:text-purple-400 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                DevOps Engineer
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                Automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-purple-500/50">
                  Get In Touch
                </a>
                <a href="#blog" className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
                  Read Blog
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur border border-purple-500/20">
                <Server className="w-12 h-12 mx-auto mb-2 text-purple-400" />
                <p className="text-sm text-gray-400">Infrastructure</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur border border-purple-500/20">
                <Cloud className="w-12 h-12 mx-auto mb-2 text-pink-400" />
                <p className="text-sm text-gray-400">Cloud</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur border border-purple-500/20">
                <Terminal className="w-12 h-12 mx-auto mb-2 text-purple-400" />
                <p className="text-sm text-gray-400">Automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a passionate DevOps Engineer specializing in building and maintaining robust CI/CD pipelines, 
              cloud infrastructure, and automation solutions. With expertise in containerization, orchestration, 
              and infrastructure as code, I help teams deploy faster and more reliably.
            </p>
            <p>
              My approach combines deep technical knowledge with a focus on collaboration and continuous improvement. 
              I believe in treating infrastructure as code, automating everything possible, and building systems 
              that scale efficiently.
            </p>
            <p>
              When I'm not optimizing deployments or troubleshooting production issues, you'll find me writing 
              technical blogs, contributing to open-source projects, and exploring the latest DevOps tools and practices.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 px-6 py-4 rounded-lg backdrop-blur">
                  <p className="font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-lg p-6 hover:transform hover:scale-105 transition duration-300 border border-purple-500/20 shadow-lg shadow-purple-500/10">
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.link} className="flex items-center text-purple-400 hover:text-purple-300 transition">
                    <ExternalLink size={18} className="mr-1" /> Details
                  </a>
                  <a href={project.github} className="flex items-center text-purple-400 hover:text-purple-300 transition">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-6 py-3 rounded-full text-lg font-semibold hover:scale-110 transition backdrop-blur">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Medium Integration */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Latest Blog Posts</h2>
          <p className="text-center text-gray-400 mb-12">
            Read my latest articles on Medium about DevOps, Cloud, and Automation
          </p>
          
          {mediumPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {mediumPosts.map((post, index) => (
                <a 
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition transform hover:scale-105"
                >
                  {post.thumbnail && (
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.description.replace(/<[^>]*>/g, '').substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                    <span className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                      Read on Medium <ExternalLink size={14} className="ml-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-400 mb-6">Loading posts from Medium...</p>
              <a 
                href="https://medium.com/@arunima.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Visit My Medium Blog
                <ExternalLink className="ml-2" size={20} />
              </a>
            </div>
          )}
          
          <div className="text-center mt-12">
            <a 
              href="https://medium.com/@arunima.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-lg"
            >
              View All Articles on Medium
              <ExternalLink className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating or discussing DevOps strategies? Let's talk!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-full transition transform hover:scale-110 shadow-lg shadow-purple-500/20">
              <Mail size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-full transition transform hover:scale-110 shadow-lg shadow-purple-500/20">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 p-4 rounded-full transition transform hover:scale-110 shadow-lg shadow-purple-500/20">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 text-center text-gray-400 border-t border-purple-500/20">
        <p>&copy; 2025 Arunima. DevOps Engineer | Built with React & Tailwind CSS</p>
        <p className="text-sm mt-2">Deployed on Vercel</p>
      </footer>
    </div>
  );
}