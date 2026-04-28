import React, { useState, useEffect, useCallback } from 'react';
import { 
  Download, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  MapPin, 
  Zap, 
  Shield, 
  Server, 
  Network, 
  Menu, 
  X,
  Copy,
  Check,
  Smartphone,
  Globe,
  Database,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  image: string;
  date: string;
  category: string;
}

// --- Navigation Links ---
const NAV_LINKS = [
  { name: 'INDEX', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CREDENTIALS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

// --- Project Data ---
const PROJECTS: Project[] = [
  {
    id: 'ai-job',
    title: "AI Job App Assistant",
    tech: ["React", "Node.js", "Gemini API", "PostgreSQL"],
    category: "UNIVERSITY MAJOR",
    description: "My Year 4 Major Project at Divine Word University. Developed a smart job application assistant that uses AI to analyze resumes and optimize them for specific job descriptions. Features include real-time feedback, skill gap analysis, and automated tailoring for higher ATS scores.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
    date: "OCT 2025"
  },
  {
    id: 'm365-implementation',
    title: "Microsoft 365 Enterprise",
    tech: ["Azure AD", "Exchange Online", "SharePoint", "MDM"],
    category: "SYSTEM ADMINISTRATION",
    description: "Led the full-scale deployment and configuration of Microsoft 365 Enterprise solutions. Managed user identities via Azure AD, configured secure mailing systems with Exchange Online, and established collaborative environments using SharePoint and Teams. Focused on data security and seamless integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    date: "AUG 2025"
  },
  {
    id: 'airport-systems',
    title: "International Airport Systems",
    tech: ["Cisco LAN", "MySQL", "PHP", "Hardware Networking"],
    category: "DWU OPEN DAY",
    description: "Created for the DWU Open Day simulation. Developed a holistic working environment for an International Airport including booking, ticketing, and check-in sub-systems. Configured a dedicated LAN using physical Cisco switches for a live simulation of airport logistics.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1200",
    date: "APR 2025"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 sm:p-8 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto rounded-full glass px-6 py-3 flex items-center gap-8 transition-all duration-500 ${isScrolled ? 'px-4 py-2 scale-95 shadow-xl bg-white/90 shadow-black/5' : ''}`}
      >
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-display font-black tracking-tighter text-stone-900"
        >
          JR<span className="text-amber-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[10px] font-bold tracking-[0.3em] text-stone-500 hover:text-amber-700 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-900 hover:text-amber-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-[#FCFBF8]/95 z-[-1] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-4xl font-display font-black tracking-tighter text-stone-900 hover:text-amber-700 transition-colors"
                >
                  {link.name}
                </motion.a>
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
    <section id="home" className="relative h-screen flex flex-col items-center justify-start pt-[50vh] sm:pt-[55vh] md:pt-[60vh] overflow-hidden">
      {/* Living Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-stone-100"
      >
        <img 
          src="/profile.jpg" 
          alt="Jezreel Ratu" 
          className="w-full h-full object-cover brightness-[1.02] object-top scale-105 sm:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8]/30 via-transparent to-[#FCFBF8]" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-4"
        >
          <span className="text-[10px] font-mono tracking-[0.5em] text-amber-800/60 uppercase">
            EST. 2024 / PORT MORESBY
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[12vw] sm:text-[10vw] font-display font-black leading-[0.85] tracking-tighter uppercase mb-12 text-stone-900"
        >
          JEZREEL<br /><span className="text-stroke">RATU</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-xl mx-auto text-stone-800 text-sm md:text-base font-medium tracking-tight mb-10 leading-relaxed"
        >
          Information Systems Graduate bridging technology and strategic business solutions. 
          Specializing in IT Infrastructure, Networking, and full-stack development.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
        >
          <a 
            href="#contact" 
            className="group w-full max-w-[280px] sm:w-auto flex items-center justify-center gap-3 bg-stone-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            START PROJECT
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="Jezreel_Ratu_CV.pdf" 
            download 
            className="flex w-full max-w-[280px] sm:w-auto items-center justify-center gap-3 glass px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:bg-stone-100 transition-all hover:scale-105 active:scale-95 text-stone-900"
          >
            VIEW RESUME
            <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Hero Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-2"
      >
        <div className="w-12 h-1 bg-amber-600" />
        <p className="text-[10px] font-mono tracking-widest text-stone-400">AVAILABLE FOR ROLES</p>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-[#FCFBF8] to-amber-50/20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl bg-slate-800"
        >
          <img 
            src="/graduation.jpg" 
            alt="Graduation" 
            className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 opacity-95 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-stone-900/10 group-hover:opacity-0 transition-opacity" />
          <div className="absolute bottom-8 left-8">
            <span className="text-[10px] font-mono tracking-[0.5em] text-white mb-2 block font-bold">GRADUATE 2025</span>
            <h4 className="text-3xl font-display font-black tracking-tighter uppercase whitespace-pre-line text-white shadow-xl">
              DIVINE WORD{"\n"}UNIVERSITY
            </h4>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-[10px] font-mono tracking-[0.3em] text-amber-800/60 uppercase mb-6">BIOGRAPHY</p>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-10 leading-[0.9] text-stone-900">
            I BUILD RELIABLE <span className="text-stroke">SYSTEMS</span>
          </h2>
          <div className="space-y-8 text-lg text-stone-800 font-medium leading-relaxed">
            <p>
              Growing up in Erima, Port Moresby, I've always been fascinated by how information moves. 
              My journey through the Information Systems program at DWU taught me that the best 
              solutions aren't just technical—they're strategic.
            </p>
            <p>
              Whether it's configuring a complex Cisco network for an open day simulation or building 
              full-stack applications, my focus is always on reliability and user experience. 
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-16">
            <div>
              <p className="text-4xl font-display font-black tracking-tighter mb-2 text-stone-900">03+</p>
              <p className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold">CORE PROJECTS</p>
            </div>
            <div>
              <p className="text-4xl font-display font-black tracking-tighter mb-2 text-stone-900">DWU</p>
              <p className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold">ALUMNUS 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "INFRASTRUCTURE",
      icon: <Server size={24} />,
      items: ["Active Directory", "OS Deployment", "Hardware Diagnosis", "Help Desk Support", "VMware"]
    },
    {
      title: "NETWORKING",
      icon: <Network size={24} />,
      items: ["Cisco IOS", "CCNAv7", "Protocols (TCP/IP)", "VLAN Config", "Network Security"]
    },
    {
      title: "DEVELOPMENT",
      icon: <Terminal size={24} />,
      items: ["TypeScript/React", "PHP/MySQL", "Node.js", "Tailwind CSS", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] font-mono tracking-[0.3em] text-amber-800/60 uppercase mb-4 font-bold">CAPABILITIES</p>
          <h2 className="text-6xl font-display font-black tracking-tighter uppercase text-stone-900">TECH STACK</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-amber-200/50 border border-amber-200/50">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FCFBF8] p-12 group hover:bg-stone-900 transition-all duration-500"
            >
              <div className="text-amber-700 group-hover:text-amber-500 mb-10 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-[10px] font-mono tracking-[0.5em] mb-10 text-stone-500 group-hover:text-amber-500 transition-colors">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map(item => (
                  <li key={item} className="text-2xl font-display font-black tracking-tighter text-stone-900 group-hover:text-white transition-colors uppercase">
                    {item}
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

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={`relative overflow-hidden group cursor-pointer transition-all duration-500 rounded-3xl ${isExpanded ? 'lg:col-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img 
          src={project.image.startsWith('http') ? project.image : `/${project.image}`} 
          alt={project.title} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
          }}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent group-hover:bg-black/20 transition-colors" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-white/90 mb-2 block uppercase font-bold drop-shadow-md">{project.category}</span>
              <h4 className="text-4xl font-display font-black tracking-tighter uppercase mb-4 leading-none text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {project.title}
              </h4>
            </div>
            <div className="glass p-3 rounded-full bg-white/10 group-hover:bg-amber-600 group-hover:text-white transition-all text-white">
              {isExpanded ? <X size={20} /> : <ArrowRight size={20} />}
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-white/20"
              >
                <p className="text-stone-100 mb-8 max-w-2xl leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-mono px-3 py-1 bg-white/20 rounded-full tracking-widest text-white uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-stone-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20 border-l-8 border-amber-600 pl-8">
          <div>
            <p className="text-[10px] font-mono tracking-[0.3em] text-amber-800/60 uppercase mb-4 font-bold">PORTFOLIO</p>
            <h2 className="text-[14vw] md:text-[10vw] font-display font-black tracking-tighter uppercase leading-[0.8] mb-4 text-stone-900">
              WORKS<span className="text-amber-600">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-stone-600 text-xs sm:text-sm font-medium uppercase tracking-widest leading-loose border-l-2 border-amber-600/20 pl-4">
            A selection of academic and professional projects pushing modern web and network systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { name: "Switching, Routing, and Wireless Essentials", issuer: "CISCO CCNAv7" },
    { name: "Introduction to Cybersecurity", issuer: "CISCO ACADEMY" },
    { name: "Cybersecurity Essentials", issuer: "CISCO ACADEMY" },
  ];

  return (
    <section id="certifications" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-[10px] font-mono tracking-[0.3em] text-amber-800/60 uppercase mb-4 font-bold">CREDENTIALS</p>
          <h2 className="text-6xl font-display font-black tracking-tighter uppercase leading-none mb-10 text-stone-900">
            CERTIFIED <br />BY <span className="text-stroke text-amber-600/40">CISCO</span>
          </h2>
          <div className="space-y-px bg-amber-100 border border-amber-100">
            {certs.map((cert) => (
              <div key={cert.name} className="bg-[#FCFBF8] p-8 flex items-center justify-between group hover:bg-stone-900 transition-all">
                <div>
                  <p className="text-[10px] font-mono text-stone-500 group-hover:text-white/40 mb-2 tracking-widest">{cert.issuer}</p>
                  <p className="text-xl font-display font-black tracking-tighter text-stone-900 group-hover:text-white uppercase">{cert.name}</p>
                </div>
                <Shield className="text-amber-600 group-hover:text-amber-400 transition-colors" size={32} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "jezreelratu@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[10px] font-mono tracking-[0.3em] text-amber-800/60 uppercase mb-6 font-bold">VISION</p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85] mb-12 text-stone-900">
              LET'S START <br />THE <span className="text-stroke">FUTURE</span>
            </h2>
            
            <div className="space-y-8 sm:space-y-12">
              <div className="group cursor-pointer" onClick={copyEmail}>
                <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-4 font-bold">E-MAIL ADDRESS</p>
                <div className="flex flex-wrap items-center gap-4 text-2xl sm:text-3xl font-display font-black tracking-tighter uppercase text-stone-900 group-hover:text-amber-700 transition-colors">
                  {email}
                  {copied ? <Check size={28} className="text-green-600" /> : <Copy size={24} className="text-stone-400" />}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-4 font-bold">DIRECT CALL</p>
                <a href="tel:72046329" className="text-2xl sm:text-3xl font-display font-black tracking-tighter uppercase text-stone-900 hover:text-amber-700 transition-colors">+675 72046329</a>
              </div>

              <div>
                <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-4 font-bold">HQ LOCATION</p>
                <p className="text-2xl sm:text-3xl font-display font-black tracking-tighter uppercase text-stone-900">PORT MORESBY, PNG</p>
              </div>

              <div>
                 <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-4 font-bold">CONNECT</p>
                 <a 
                   href="https://www.linkedin.com/in/jezreel-ratu-626a3436a" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   data-app-link="true"
                   className="flex items-center gap-4 group"
                 >
                   <span className="text-3xl sm:text-4xl font-display font-black underline decoration-2 underline-offset-8 group-hover:text-blue-600 transition-colors text-stone-900 leading-none">LINKEDIN</span>
                   <Linkedin size={28} className="text-stone-900 group-hover:text-blue-600 transition-colors" />
                 </a>
              </div>
            </div>
          </div>

          <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-stone-100/50">
            <form className="space-y-8 sm:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                <div className="relative">
                  <label className="text-[9px] font-mono tracking-widest text-stone-400 uppercase block mb-4 font-bold">01 Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-amber-600 transition-colors text-stone-900" placeholder="Type here..." />
                </div>
                <div className="relative">
                  <label className="text-[9px] font-mono tracking-widest text-stone-400 uppercase block mb-4 font-bold">02 Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-amber-600 transition-colors text-stone-900" placeholder="Email here..." />
                </div>
              </div>
              <div className="relative">
                <label className="text-[9px] font-mono tracking-widest text-stone-400 uppercase block mb-4 font-bold">03 Subject</label>
                <input type="text" className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-amber-600 transition-colors text-stone-900" placeholder="What's this about?" />
              </div>
              <div className="relative">
                <label className="text-[9px] font-mono tracking-widest text-stone-400 uppercase block mb-4 font-bold">04 Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-amber-600 transition-colors resize-none text-stone-900" placeholder="Hello Jezreel..."></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-6 sm:py-8 rounded-2xl flex items-center justify-center gap-4 group hover:bg-amber-700 transition-all active:scale-[0.98]">
                <span className="text-bold tracking-widest uppercase text-sm sm:text-base">SEND MESSAGE</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h4 className="text-2xl font-display font-black tracking-tighter text-stone-900">JEZREEL RATU</h4>
          <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mt-2">© 2026 / ALL RIGHTS RESERVED</p>
        </div>
        
        <div className="flex gap-16">
          <a href="#home" className="text-[10px] font-bold tracking-widest text-stone-500 hover:text-amber-700 transition-colors uppercase">Top of page</a>
          <a href="https://www.linkedin.com/in/jezreel-ratu-626a3436a" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-stone-500 hover:text-amber-700 transition-colors uppercase">LinkedIn</a>
          <a href="mailto:jezreelratu@gmail.com" className="text-[10px] font-bold tracking-widest text-stone-500 hover:text-amber-700 transition-colors uppercase">Email</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="selection:bg-white selection:text-black">
      <Navbar />
      <main className="no-scrollbar">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div >
  );
};

export default App;
