import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Zap, 
  Shield, 
  Server, 
  Network, 
  Menu, 
  X,
  Github
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-blue-600 tracking-tight">
          JR<span className="text-slate-900">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="Jezreel_Ratu_CV.pdf" 
            download="Jezreel_Ratu_CV.pdf"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} />
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
            Jezreel Ratu
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
            Information Systems Graduate
          </p>
          <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
            Motivated and detail-oriented Information Systems graduate with a strong foundation in IT support, networking, and system troubleshooting.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="Jezreel_Ratu_CV.pdf" 
              download="Jezreel_Ratu_CV.pdf"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group"
            >
              Download CV
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
              Contact Me
              <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 aspect-square max-w-[400px] mx-auto bg-white p-4 rounded-full shadow-2xl border border-slate-100 overflow-hidden group">
            <img 
              src="profile.jpg" 
              alt="Jezreel Ratu" 
              className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating skill badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 z-20 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Network size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Specialization</p>
              <p className="text-sm font-bold text-slate-900">Networking</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative group shadow-2xl">
              <img 
                src="graduation.jpg" 
                alt="Jezreel Ratu Graduation" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <p className="text-3xl font-bold text-blue-600 mb-1">2025</p>
              <p className="text-sm font-medium text-slate-600">Information Systems Graduate</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Bridging Technology and Business Solutions
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                I am a passionate Information Systems graduate from Divine Word University, dedicated to mastering the complexities of modern IT infrastructure. My academic journey has equipped me with a robust understanding of how technology drives business efficiency.
              </p>
              <p>
                With a focus on IT support and networking, I thrive on solving technical challenges and optimizing systems for peak performance. I am eager to apply my skills in a professional environment where I can contribute to meaningful projects and continue my growth as an IT professional.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Reliable</p>
                  <p className="text-xs text-slate-500">System Security</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                  <Server size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Efficient</p>
                  <p className="text-xs text-slate-500">Infrastructure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "IT Support & Systems",
      icon: <Server className="text-blue-600" />,
      skills: ["Hardware Troubleshooting", "Software Installation", "OS Deployment", "Active Directory", "Help Desk Support"]
    },
    {
      title: "Networking",
      icon: <Network className="text-blue-600" />,
      skills: ["Cisco Packet Tracer", "LAN/WAN Configuration", "Routing & Switching", "Network Security", "TCP/IP Protocols"]
    },
    {
      title: "Web & Database",
      icon: <Zap className="text-blue-600" />,
      skills: ["HTML/CSS", "PHP", "MySQL", "JavaScript", "React Basics"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Expertise</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">Technical Skills</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h4>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number, key?: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 h-full flex flex-col cursor-pointer ${
          isExpanded ? 'ring-2 ring-blue-600/20 shadow-2xl shadow-blue-100' : 'hover:-translate-y-2'
        }`}
      >
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm">
            {project.date}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.split(', ').map(t => (
              <span key={t} className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
                {t}
              </span>
            ))}
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h4>
          
          <motion.div 
            animate={{ height: isExpanded ? 'auto' : '80px' }}
            className="overflow-hidden relative"
          >
            <p className={`text-slate-600 text-sm leading-relaxed ${!isExpanded && 'line-clamp-4'}`}>
              {project.description}
            </p>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent" />
            )}
          </motion.div>

          <button 
            className="mt-4 text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <ChevronRight size={14} className={isExpanded ? '-rotate-90' : ''} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI Job Matching Platform",
      tech: "React, Node.js, Gemini API, PostgreSQL",
      description: "Developed a smart job matching system that uses AI to analyze resumes and match candidates with the most relevant job opportunities based on skills and experience. The platform features real-time analysis, automated skill extraction, and a personalized dashboard for both recruiters and job seekers to track applications and matches efficiently.",
      image: "https://picsum.photos/seed/ai-job/600/400",
      date: "October 2025"
    },
    {
      title: "On-Premises Active Directory + MS 365",
      tech: "Windows Server 2024, Veem Backup, Microsoft Hyper V, Cloud Services",
      description: "Created an On-Premises active directory with MS 365 integration for a small business to ensure centralised identity management, secure authentication, and reliable data protection. This project involved configuring hybrid identity solutions, setting up automated backups with Veem, and managing virtualized server environments using Hyper-V to ensure high availability and disaster recovery readiness.",
      image: "https://picsum.photos/seed/active-directory/600/400",
      date: "May 2025"
    },
    {
      title: "International Airport Systems - DWU Open Day",
      tech: "MySQL, PHP, HTML, CSS, HTTP",
      description: "Created a simulated working area of an International Airport with booking, ticketing and Check-in sub-systems. Configured a LAN using switches and access points for online check-in simulation. The project demonstrated the integration of database management with real-time network communication, providing a hands-on experience of how large-scale transportation systems operate under heavy traffic loads.",
      image: "https://picsum.photos/seed/airport-sys/600/400",
      date: "April 17 2025"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">Academic Projects</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { name: "CCNAv7: Switching, Routing, and Wireless Essentials", issuer: "Cisco Academy" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco Academy" },
    { name: "Cybersecurity Essentials", issuer: "Cisco Academy" },
  ];

  return (
    <section id="certifications" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-200 uppercase tracking-[0.2em] mb-4">Credentials</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-8">
              Cisco Academy Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <motion.div 
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{cert.name}</p>
                    <p className="text-xs text-blue-200">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="hidden md:flex justify-center">
            <div className="w-64 h-64 border-4 border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-48 h-48 border-4 border-white/40 rounded-full flex items-center justify-center">
                <Network size={64} className="text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mjgpjawl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Contact</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-8">Let's Connect</h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              I am currently looking for entry-level opportunities in IT support, networking, or systems administration. If you have an opening or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                  <a href="mailto:ratujezreel@gmail.com" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">ratujezreel@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/jezreel-ratu-626a3436a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">Jezreel Ratu</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-slate-900 font-bold">Erima, Port Moresby</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Zap size={40} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                      <input required name="name" type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                      <input required name="email" type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                    <input required name="subject" type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Job Opportunity" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                    <textarea required name="message" rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none" placeholder="Hello Jezreel..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-display font-bold text-blue-500 tracking-tight">
              JR<span className="text-white">.</span>
            </a>
            <p className="text-slate-400 text-sm mt-2">Information Systems Graduate | IT Enthusiast</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jezreel-ratu-626a3436a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ratujezreel@gmail.com" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Jezreel Ratu. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
