"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Clock,
  Loader2,
  Aperture,
  Shield,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreeToPrivacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "noman1137chaya4048@gmail.com",
      href: "mailto:noman1137chaya4048@gmail.com",
      color: "bg-blue-900/30 text-blue-400 border-blue-800/50",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+923328664048",
      href: "tel:+923328664048",
      color: "bg-green-900/30 text-green-400 border-green-800/50",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Post Office Sial, Wadhy Wali District Bhakkar",
      href: "#",
      color: "bg-purple-900/30 text-purple-400 border-purple-800/50",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      href: "https://github.com/nomi6123",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-noman-37b1a7327",
      color: "hover:bg-blue-700",
    },
    {
      icon: <Aperture className="h-4 w-4" />,
      label: "Portfolio",
      href: "https://nomanportfolio.vercel.app",
      color: "hover:bg-sky-700",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.agreeToPrivacy) {
      setError("Please agree to the Privacy Policy to continue.");
      return;
    }

    const serviceID = "service_g19u2fx";
    const templateID = "template_npm5hif";
    const publicKey = "YYKxrDH-ip98y3LFc";

    setIsSending(true);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setFormData({ 
          name: "", 
          email: "", 
          subject: "", 
          message: "",
          agreeToPrivacy: false 
        });
        setSubmitted(true);
        setError("");
        setIsSending(false);
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setError("Failed to send the message. Please try again later.");
        setIsSending(false);
      });
  };

  return (
    <div className="bg-black py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 text-gray-100">
        {/* Header */}
        <section className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 md:space-y-3"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get In <span className="text-blue-500">Touch</span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto px-4">
              Ready to bring your ideas to life? Let's collaborate on something amazing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0 mt-4 text-xs md:text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Available for Projects
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                24h Response Time
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 pb-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-5"
          >
            {/* Info cards */}
            <div className="p-4 md:p-5 rounded-2xl border border-gray-800 shadow-md">
              <h2 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-3">Contact Information</h2>
              <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">Reach out through any of these channels</p>
              <div className="space-y-2 md:space-y-3">
                {contactInfo.map((contact, i) => (
                  <a
                    key={i}
                    href={contact.href}
                    className={`flex items-start gap-3 p-2.5 md:p-3 rounded-xl border ${contact.color} hover:bg-gray-800 transition`}
                  >
                    <div
                      className={`flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg border ${contact.color}`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-100 text-sm">{contact.label}</p>
                      <p className="text-xs text-gray-400 break-all">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="p-4 md:p-5 rounded-2xl border border-gray-800 shadow-md">
              <h2 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-3">Follow Me</h2>
              <p className="text-gray-400 mb-3 text-xs md:text-sm">Let's connect on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center h-10 w-10 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 hover:text-white transition ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-black p-5 md:p-6 rounded-2xl shadow-md border border-gray-800"
          >
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Send a Message</h2>
            <p className="text-gray-400 mb-5 md:mb-6 text-xs md:text-sm">
              Tell me about your project and I'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-10 px-3 text-sm bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:border-blue-500 focus:ring-0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full h-10 px-3 text-sm bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:border-blue-500 focus:ring-0"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry or collaboration"
                  className="w-full h-10 px-3 text-sm bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:border-blue-500 focus:ring-0"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:border-blue-500 focus:ring-0 resize-none"
                  required
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 md:p-4">
                <label className="flex items-start gap-2 md:gap-3 cursor-pointer group">
                  <div className="relative flex items-center pt-0.5">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs md:text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                      I agree to the{" "}
                      <a
                        href="/PrivacyPolicy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline font-medium inline-flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Privacy Policy
                        <Shield className="w-3 h-3" />
                      </a>{" "}
                      and consent to the collection and use of my information as described. *
                    </span>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-[50%] h-11 md:h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-xs md:text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Loader2 className="inline-block mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send className="inline-block mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-400 font-medium flex items-center text-xs md:text-sm">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 font-medium text-xs md:text-sm">
                {error}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}