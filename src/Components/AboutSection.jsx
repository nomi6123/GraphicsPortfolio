import React, { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        projects: Math.floor(200 * progress),
        satisfaction: Math.floor(100 * progress),
        years: Math.floor(5 * progress)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Responsive, scalable, and high-performance web applications",
    "Creative and detail-oriented graphic design solutions",
    "Strong focus on user experience and modern UI aesthetics",
    "Full-stack expertise in React.js, Next.js, and Node.js",
    "Proficient in Photoshop, CorelDRAW, and Adobe Illustrator",
  ];

  const stats = [
    { number: counters.projects + "+", label: "Projects Completed", animated: true },
    { number: counters.satisfaction + "%", label: "Client Satisfaction", animated: true },
    { number: counters.years + "+", label: "Years of Experience", animated: true },
    { number: "∞", label: "Creativity & Innovation", animated: false },
  ];

  return (
    <section className="py-6 md:py-12 px-4 md:px-6 bg-black text-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
            About Me
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto px-4">
            Developers don't just build websites — they build connections. I
            design and develop seamless digital experiences that combine
            creativity with technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-6 md:mb-8">
          {/* Left Side: Visual Card */}
          <div className={`flex items-center justify-center w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative w-full max-w-md">
              <div className="relative w-full rounded-3xl border-2 border-white/10 p-6 md:p-10 backdrop-blur-lg shadow-2xl flex flex-col justify-center items-center hover:scale-105 transition-transform duration-500">
                {/* Decorative Corners */}
                <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-purple-500/30 rounded-tl-3xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl animate-pulse" />

                {/* Icon / Visual */}
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/40 overflow-hidden animate-float">
                  <svg
                    className="w-12 h-12 md:w-14 md:h-14 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>

                {/* Card Text */}
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2 md:mb-3">
                  Developer & Designer
                </h3>
                <p className="text-sm md:text-base text-white/70 text-center mb-4 md:mb-6 px-2">
                  Building responsive, scalable, and visually engaging web
                  experiences with a creative edge.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Photoshop",
                    "CorelDRAW",
                    "Illustrator",
                  ].map((badge, index) => (
                    <span
                      key={badge}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/20 rounded-full text-xs md:text-sm text-white/80 backdrop-blur-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:border-transparent hover:text-white transition-all cursor-default animate-slideIn hover:scale-110"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className={`flex flex-col justify-center w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Crafting Seamless Digital Experiences
            </h3>

            <p className="text-sm text-white/80 mb-3">
              I'm an enthusiastic Website Developer & Graphic Designer with
              hands-on experience in modern technologies like React.js, Next.js,
              JavaScript, and Node.js. I specialize in creating responsive,
              high-performance web applications that deliver both functionality
              and aesthetic appeal.
            </p>

            <p className="text-sm text-white/80 mb-4 md:mb-5">
              My creative background in CorelDRAW, Photoshop, and other design
              tools allows me to blend technical skill with visual creativity,
              ensuring every project is both powerful and beautiful. I'm driven
              by a passion for continuous learning, innovation, and delivering
              solutions that connect people and ideas.
            </p>

            {/* Features List */}
            <ul className="space-y-2 md:space-y-3 mb-4 md:mb-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                  className="flex items-start gap-3 text-white/90 animate-slideInLeft opacity-0"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0 hover:rotate-12 transition-transform mt-0.5">
                    <Check size={14} />
                  </div>
                  <span className="text-xs md:text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a href="https://nomanfrontenddev.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="group inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50 transition-all w-fit text-xs md:text-sm animate-pulse-glow">
                Let's Build Something Great
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-default hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent group-hover:scale-125 transition-transform">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;