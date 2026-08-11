import React from 'react';
import { Rocket, Heart, Sprout, Globe } from 'lucide-react';

interface Goal {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const goals: Goal[] = [
  {
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    title: "Tech Innovation",
    description: "Building a transformative tech company focused on creating impactful digital solutions."
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-400" />,
    title: "Healthcare Support",
    description: ""
  },
  {
    icon: <Sprout className="w-6 h-6 text-green-400" />,
    title: "Sustainable Farming",
    description: "Launching an eco-friendly farming venture combining technology with agriculture."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Global Impact",
    description: "Planning to explore Europe while creating technology that transcends borders."
  }
];

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a self-taught programmer with a passion for backend development, 
            cybersecurity, and Linux systems. My journey in tech has been driven 
            by curiosity and a desire to create impactful solutions that solve 
            real-world problems.
          </p>
        </div>

        <div className="glassmorphism p-8 space-y-8">
          <h3 className="text-2xl font-bold text-center">My Vision & Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  {goal.icon}
                </div>
                <h4 className="text-xl font-semibold">{goal.title}</h4>
                <p className="text-gray-400">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond coding, I'm deeply interested in fintech, cryptocurrency, and 
            automation. I believe in using technology to create systems that are 
            not just efficient, but also secure and accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
