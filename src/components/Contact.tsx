import React, { useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import axios from "axios";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/chrispusgikonyo",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/chrispusgikonyo",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    href: "https://twitter.com/chrispusgikonyo",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    href: "mailto:crispusgikonyo@gmail.com",
  },
];

// Function to create styled HTML email template
const createEmailTemplate = (formData: FormData) => {
  const { name, email, message } = formData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', Arial, sans-serif;
          line-height: 1.6;
          color: #f8fafc;
          margin: 0;
          padding: 0;
          background-color: #0f172a;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: rgba(15, 23, 42, 0.8);
          border-radius: 16px;
          overflow: hidden;
        }
        
        .email-header {
          background: linear-gradient(to right, #9333ea, #ec4899);
          padding: 30px;
          text-align: center;
        }
        
        .email-header h1 {
          margin: 0;
          color: white;
          font-weight: 700;
          font-size: 24px;
        }
        
        .email-body {
          padding: 30px;
          background-color: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .email-section {
          margin-bottom: 25px;
          padding: 20px;
          background-color: rgba(51, 65, 85, 0.4);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .email-field {
          margin-bottom: 15px;
        }
        
        .email-label {
          display: block;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 5px;
          font-size: 14px;
        }
        
        .email-value {
          font-size: 16px;
          color: #f1f5f9;
          line-height: 1.5;
        }
        
        .email-message {
          white-space: pre-wrap;
        }
        
        .email-footer {
          padding: 20px;
          text-align: center;
          font-size: 14px;
          color: #94a3b8;
          background-color: rgba(15, 23, 42, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .gradient-text {
          background: linear-gradient(to right, #9333ea, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
        }
        
        .timestamp {
          color: #64748b;
          font-size: 12px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>New Message from Portfolio</h1>
        </div>
        
        <div class="email-body">
          <div class="email-section">
            <div class="email-field">
              <span class="email-label">FROM</span>
              <div class="email-value">
                <strong class="gradient-text">${name}</strong>
              </div>
            </div>
            
            <div class="email-field">
              <span class="email-label">EMAIL</span>
              <div class="email-value">${email}</div>
            </div>
            
            <div class="timestamp">
              Submitted on ${new Date().toLocaleString()}
            </div>
          </div>
          
          <div class="email-section">
            <div class="email-field">
              <span class="email-label">MESSAGE</span>
              <div class="email-value email-message">${message.replace(/\n/g, "<br/>")}</div>
            </div>
          </div>
        </div>
        
        <div class="email-footer">
          <p>This message was sent from your portfolio contact form.</p>
          <p>&copy; ${new Date().getFullYear()} Chrispus Gikonyo</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to send email directly using Brevo API
const sendEmailViaBrevo = async (formData: FormData) => {
  const { name, email, message } = formData;
  console.log(message);

  const API_KEY = import.meta.env.VITE_BREVO_API_KEY;
  const url = "https://api.brevo.com/v3/smtp/email";

  const data = {
    sender: {
      name: name,
      email: email,
    },
    to: [
      {
        // Your email where you want to receive messages
        email: "crispusgikonyo@gmail.com",
        name: "Chrispus Gikonyo",
      },
    ],
    subject: `Portfolio Contact: ${name}`,
    htmlContent: createEmailTemplate(formData),
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      await sendEmailViaBrevo(formData);

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmitResult({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message:
          "Failed to send message. Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto glassmorphism p-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about
            technology, I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            {submitResult && (
              <div
                className={`p-4 rounded-lg ${submitResult.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}`}
              >
                {submitResult.message}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
              <p className="text-gray-400">
                Open to remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
