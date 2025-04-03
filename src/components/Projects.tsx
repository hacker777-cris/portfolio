import React from "react";
import {
  Github,
  ExternalLink,
  Home,
  Building,
  BookOpen,
  Share2,
  ShoppingCart,
  Users,
  Wallet,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "RAXAN Homes",
    description:
      "A modern property rental/sale platform built with React Native & Expo, featuring real-time listings and interactive virtual tours. Includes advanced filtering, 3D property viewing, and instant messaging.",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "Firebase",
    ],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/CodeDreamers777/RAXAN-HOMES-KENYA.git",
    liveUrl: "https://github.com/CodeDreamers777/RAXAN-HOMES-KENYA.git",
    icon: <Home className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "AssetOne Estates",
    description:
      "Comprehensive rental management system with dynamic subscription calculations and automated billing. Features tenant portals, maintenance requests, and financial reporting.",
    techStack: ["Django", "React", "PostgreSQL", "Stripe", "Redis", "Celery"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/CodeDreamers777/Assettone.git",
    liveUrl: "https://app.assettoneestates.com/",
    icon: <Building className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Academic Writing Platform",
    description:
      "Professional Q&A platform connecting students with expert writers, featuring real-time collaboration, plagiarism checking, and automated citation generation.",
    techStack: ["Django", "TypeScript", "WebSocket", "Redis", "ElasticSearch"],
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "#",
    liveUrl: "#",
    icon: <BookOpen className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Social Media Management App",
    description:
      "A Django + React tool for managing multiple social media accounts with analytics, content scheduling, and automated posting across platforms.",
    techStack: ["React", "Django", "Redux", "Social APIs", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "#",
    liveUrl: "#",
    icon: <Share2 className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "CoolWays Online Store",
    description:
      "A Django-based e-commerce platform with advanced inventory management, real-time order tracking, and integrated payment processing.",
    techStack: ["Django", "PostgreSQL", "Redis", "Stripe", "Elasticsearch"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/hacker777-cris/coolways-online-store.git",
    liveUrl: "https://github.com/hacker777-cris/coolways-online-store.git",
    icon: <ShoppingCart className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "ConnectHub",
    description:
      "A social networking app built with Django for seamless virtual interaction, featuring real-time messaging, event planning, and community forums.",
    techStack: ["Django", "React", "WebSocket", "Redis", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/hacker777-cris/connecthub.git",
    liveUrl: "https://github.com/hacker777-cris/connecthub.git",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Dowell Wallet",
    description:
      "A fintech solution handling transactions, withdrawals, and multi-currency support with robust security measures and real-time exchange rates.",
    techStack: ["Django", "React", "PostgreSQL", "Redis", "Blockchain API"],
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200",
    githubUrl:
      "https://github.com/LL04-Finance-Dowell/100088-dowellpayment.git",
    liveUrl: "https://github.com/LL04-Finance-Dowell/100088-dowellpayment.git",
    icon: <Wallet className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Samantha Campaigns",
    description:
      "An automated system for email & SMS marketing campaigns with A/B testing, analytics, and customer segmentation capabilities.",
    techStack: ["Django", "React", "Celery", "Redis", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/DoWellLabs/100111-Samanta-Campaigns.git",
    liveUrl: "https://github.com/DoWellLabs/100111-Samanta-Campaigns.git",
    icon: <Mail className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "M-Pesa API Integration",
    description:
      "A Django-based API for Paybill payments, webhook notifications & WhatsApp receipts, featuring automated reconciliation and reporting.",
    techStack: ["Django", "Celery", "Redis", "PostgreSQL", "WhatsApp API"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "#",
    liveUrl: "#",
    icon: <Phone className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Location-Specific Search API",
    description:
      "A tool for accessing geo-restricted content seamlessly, with advanced caching, load balancing, and proxy management.",
    techStack: ["Django", "Redis", "PostgreSQL", "Elasticsearch", "GeoIP"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    githubUrl:
      "https://github.com/LL03-Identity-Dowell/Dowell-Chrome-Location-Change.git",
    liveUrl:
      "https://github.com/LL03-Identity-Dowell/Dowell-Chrome-Location-Change.git",
    icon: <Globe className="w-6 h-6 text-teal-400" />,
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="glassmorphism p-6 space-y-4 group hover:neon-glow transition-all duration-300">
    <div className="relative h-48 overflow-hidden rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
        {project.icon}
      </div>
    </div>
    <h3 className="text-xl font-bold flex items-center gap-3">
      {project.title}
    </h3>
    <p className="text-gray-400">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.techStack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-400"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4 pt-2">
      <a
        href={project.githubUrl}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <Github size={20} />
        <span>Code</span>
      </a>
      <a
        href={project.liveUrl}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ExternalLink size={20} />
        <span>Live Demo</span>
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing expertise in full-stack
            development, from mobile apps to enterprise solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

