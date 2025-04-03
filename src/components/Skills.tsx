import React from 'react';
import { Server, Layout, Database, Shield, Container, Terminal, Code2, FileJson, Cpu, Blocks, Braces, MonitorSmartphone, Palette, HardDrive, Network, Lock, Cloud, LineChart, Settings, Terminal as Terminal2, Keyboard } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Server className="w-6 h-6 text-blue-400" />,
    title: "Backend Development",
    skills: [
      { name: "Django", icon: <Code2 className="w-4 h-4 text-green-400" /> },
      { name: "Django REST", icon: <FileJson className="w-4 h-4 text-green-400" /> },
      { name: "Python", icon: <Cpu className="w-4 h-4 text-blue-400" /> },
      { name: "Go", icon: <Blocks className="w-4 h-4 text-cyan-400" /> },
      { name: "Node.js", icon: <Braces className="w-4 h-4 text-green-500" /> }
    ]
  },
  {
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <Code2 className="w-4 h-4 text-blue-400" /> },
      { name: "TypeScript", icon: <Braces className="w-4 h-4 text-blue-500" /> },
      { name: "Vite", icon: <Terminal2 className="w-4 h-4 text-yellow-400" /> },
      { name: "Flutter", icon: <MonitorSmartphone className="w-4 h-4 text-blue-400" /> },
      { name: "TailwindCSS", icon: <Palette className="w-4 h-4 text-cyan-400" /> }
    ]
  },
  {
    icon: <Database className="w-6 h-6 text-green-400" />,
    title: "Database Management",
    skills: [
      { name: "PostgreSQL", icon: <Database className="w-4 h-4 text-blue-400" /> },
      { name: "MongoDB", icon: <HardDrive className="w-4 h-4 text-green-500" /> },
      { name: "Redis", icon: <Database className="w-4 h-4 text-red-400" /> },
      { name: "SQLite", icon: <Database className="w-4 h-4 text-blue-300" /> }
    ]
  },
  {
    icon: <Shield className="w-6 h-6 text-red-400" />,
    title: "Cybersecurity",
    skills: [
      { name: "Threat Analysis", icon: <Network className="w-4 h-4 text-orange-400" /> },
      { name: "Vulnerability Assessment", icon: <Shield className="w-4 h-4 text-yellow-400" /> },
      { name: "Network Security", icon: <Lock className="w-4 h-4 text-red-400" /> },
      { name: "Pen Testing", icon: <Terminal2 className="w-4 h-4 text-purple-400" /> }
    ]
  },
  {
    icon: <Container className="w-6 h-6 text-yellow-400" />,
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <Container className="w-4 h-4 text-blue-400" /> },
      { name: "CI/CD", icon: <Settings className="w-4 h-4 text-green-400" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4 text-orange-400" /> },
      { name: "Nginx", icon: <LineChart className="w-4 h-4 text-green-500" /> }
    ]
  },
  {
    icon: <Terminal className="w-6 h-6 text-gray-400" />,
    title: "Operating Systems",
    skills: [
      { name: "Ubuntu", icon: <Terminal className="w-4 h-4 text-orange-400" /> },
      { name: "Fedora", icon: <Terminal className="w-4 h-4 text-blue-400" /> },
      { name: "Kali Linux", icon: <Terminal2 className="w-4 h-4 text-purple-400" /> },
      { name: "Shell Scripting", icon: <Keyboard className="w-4 h-4 text-gray-400" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            in full-stack development and system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 space-y-4 hover:neon-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-white/5 rounded-full flex items-center gap-2"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;