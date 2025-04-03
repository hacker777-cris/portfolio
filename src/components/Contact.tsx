import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/chrispusgikonyo"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/chrispusgikonyo"
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    href: "https://twitter.com/chrispusgikonyo"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    href: "mailto:contact@chrispusgikonyo.com"
  }
];

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto glassmorphism p-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology,
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Connect on Social Media</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <div className="p-6 rounded-lg bg-white/5 space-y-2">
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">Nairobi, Kenya</p>
              <h4 className="font-semibold mt-4">Availability</h4>
              <p className="text-gray-400">Open to remote opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;