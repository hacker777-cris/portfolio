import React from 'react';
import { Trophy, Award, Target, Zap } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    title: "10+ Successful Projects",
    description: "Delivered complex web applications and mobile solutions for diverse clients globally"
  },
  {
    icon: <Award className="w-6 h-6 text-blue-400" />,
    title: "Security Certifications",
    description: "Certified in advanced cybersecurity practices and vulnerability assessment"
  },
  {
    icon: <Target className="w-6 h-6 text-green-400" />,
    title: "100% Project Success Rate",
    description: "Perfect track record of delivering projects on time and within scope"
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Technical Leadership",
    description: "Led development teams and mentored junior developers in best practices"
  }
];

const Achievements = () => {
  return (
    <section className="py-20" id="achievements">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Key milestones and recognition throughout my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 space-y-4 hover:neon-glow transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;