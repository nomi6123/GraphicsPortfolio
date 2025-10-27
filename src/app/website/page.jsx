"use client"
import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Filter, Search, X, Briefcase, Eye } from 'lucide-react';

// Project Data
const allProjects = [
  {
    name: "Muhammad Noman Portfolio",
    description: "A modern personal portfolio built using Next.js and Tailwind CSS to showcase my work and skills.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "Tailwind CSS", "Email.js", "Framer Motion"],
    liveUrl: "https://nomanportfolio.vercel.app",
    githubUrl: "https://github.com/nomi6123/My-New-Portfolio.git",
    status: "Live",
  },
  {
    name: "Finexo Financial App",
    description: "A responsive financial dashboard app with charts, sliders, and modern UI built in Next.js.",
    image: "/webworks/finexo.png",
    technologies: ["Next.js", "Tailwind CSS", "Slick Slider", "Finance"],
    liveUrl: "https://finexo-pearl.vercel.app",
    githubUrl: "https://github.com/nomi6123/finexo",
    status: "Live",
  },
  {
    name: "Web Agency",
    description: "A web agency template designed with Tailwind CSS, animations, and responsive layout.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    technologies: ["Next.js", "API Integration", "Tailwind CSS", "Slick Slider"],
    liveUrl: "https://web-agency-brown.vercel.app",
    githubUrl: "https://github.com/nomi6123/web-agency",
    status: "Live",
  },
  {
    name: "Portfolio Website",
    description: "My first portfolio made with React.js and Tailwind CSS to display skills and completed work.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React.js"],
    liveUrl: "https://mynomanweb.vercel.app",
    githubUrl: "https://github.com/nomi6123/my-portfolio.git",
    status: "Live",
  },
  {
    name: "Carint",
    description: "A complete transport service solution with a smooth UI, SEO integration, and animations.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "SEO", "React", "Slick Slider", "Transport"],
    liveUrl: "https://carint-transportservices.vercel.app",
    githubUrl: "https://github.com/nomi6123/carint",
    status: "In Progress",
  },
  {
    name: "Healet",
    description: "A luxury jewelry e-commerce platform featuring clean design, sliders, and elegant layout.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    technologies: ["Tailwind CSS", "E-commerce", "Slider", "React"],
    liveUrl: "https://healet-for-jewellry.vercel.app",
    githubUrl: "https://github.com/nomi6123/healet",
    status: "Live",
  },
  {
    name: "Car Industry",
    description: "A complete auto industry website with animation, product showcase, and smooth navigation.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Slick Slider", "Animation"],
    liveUrl: "https://my-car-industry.vercel.app",
    githubUrl: "https://github.com/nomi6123/My-Car-Industry.git",
    status: "Live",
  },
  {
    name: "Matter js",
    description: "A physics-based interactive portfolio project using Matter.js, animations, and smooth UI.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    technologies: ["Matter js", "Physics", "React", "Tailwind CSS", "Redis"],
    liveUrl: "https://matter-js-portfolio.vercel.app",
    githubUrl: "https://github.com/nomi6123/matter-js-portfolio",
    status: "Live",
  },
  {
    name: "Guards",
    description: "A Flutter-based mobile app for managing guard duties with health APIs and local storage.",
    image: "/webworks/guards.png",
    technologies: ["Flutter", "Dart", "SQLite", "Health APIs"],
    liveUrl: "https://my-guard.vercel.app",
    githubUrl: "https://github.com/nomi6123/My-Guard",
    status: "Live",
  },
  {
    name: "Alarm Clock",
    description: "A fully functional alarm clock app in React.js with AI support and alarm scheduling UI.",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=600&fit=crop",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Claude AI", "Alarm"],
    liveUrl: "https://alarm-clock-app-umber.vercel.app",
    githubUrl: "https://github.com/nomi6123/Alarm-Clock-APP.git",
    status: "Live",
  },
  {
    name: "Currency Converter App",
    description: "A real-time currency converter app built with React.js and APIs to exchange rates between multiple global currencies.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=600&fit=crop",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Exchange API"],
    liveUrl: "https://curr-exchange-pro.vercel.app",
    githubUrl: "https://github.com/nomi6123/CurrExchange-Pro.git",
    status: "Live",
  },
  {
    name: "Islamic Website",
    description: "An Islamic information site built with React and Tailwind CSS featuring daily duas, namaz timings, and learning resources.",
    image: "/webworks/islamic.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Prayer Times API"],
    liveUrl: "https://islamicmn.vercel.app",
    githubUrl: "https://github.com/nomi6123/IslamicMN-noman.git",
    status: "Live",
  },
  {
    name: "AI Powered Resume Checker",
    description: "An AI-based tool that analyzes resumes and gives instant feedback to help improve job application success chances.",
    image: "/webworks/resume-checker.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "AI Integration"],
    liveUrl: "https://ai-powered-resume-checker-boost-you.vercel.app",
    githubUrl: "https://github.com/nomi6123/AI-Powered-Resume-Checker-Boost-Your-Job-Chances-Instantly.git",
    status: "Live",
  }
];

export default function BlackPortfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(allProjects.flatMap((project) => project.technologies))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.technologies.includes(selectedCategory));
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const suggestions = new Set();

    allProjects.forEach((project) => {
      if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        suggestions.add(project.name);
      }

      project.technologies.forEach((tech) => {
        if (tech.toLowerCase().includes(searchQuery.toLowerCase())) {
          suggestions.add(tech);
        }
      });

      const words = project.description.toLowerCase().split(" ");
      words.forEach((word) => {
        if (word.includes(searchQuery.toLowerCase()) && word.length > 3) {
          suggestions.add(word);
        }
      });
    });

    return Array.from(suggestions).slice(0, 5);
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <div className="space-y-6">
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Projects</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that push boundaries and create lasting impressions. 
              Each project represents a journey of innovation and excellence.
            </p>
            <div className="flex items-center justify-center mt-8">
              <span className="bg-zinc-900 text-zinc-300 border border-zinc-800 font-semibold px-4 py-2 text-base rounded-full">
                {filteredProjects.length} Projects Available
              </span>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input
                  type="search"
                  placeholder="Search projects, technologies..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full h-12 pl-12 pr-12 bg-zinc-900 border border-zinc-800 focus:border-zinc-700 rounded-xl text-white placeholder-zinc-500 outline-none"
                />
                {searchQuery && (
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-lg hover:bg-zinc-800 flex items-center justify-center"
                    onClick={clearSearch}
                  >
                    <X className="h-4 w-4 text-zinc-400" />
                  </button>
                )}

                {/* Search Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-3 hover:bg-zinc-800 transition-colors border-b border-zinc-800 last:border-b-0"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <div className="flex items-center gap-3">
                          <Search className="h-4 w-4 text-zinc-500" />
                          <span className="text-sm text-zinc-300 font-medium">{suggestion}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-white text-black"
                        : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
                {categories.length > 6 && (
                  <button className="px-4 py-2 rounded-xl text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    More
                  </button>
                )}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-zinc-800">
              <span className="text-sm text-zinc-400 font-medium">
                Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of <span className="text-white font-semibold">{allProjects.length}</span> projects
                {selectedCategory !== "All" && <span className="text-zinc-300"> in {selectedCategory}</span>}
                {searchQuery && <span className="text-zinc-300"> matching "{searchQuery}"</span>}
              </span>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  className="text-sm text-zinc-400 hover:text-white px-3 py-1 rounded-lg hover:bg-zinc-800"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setShowSuggestions(false);
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-zinc-950 rounded-2xl border border-zinc-800">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900">
                <Search className="h-8 w-8 text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
              <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                Try adjusting your search terms or filter criteria to find what you're looking for.
              </p>
              <button
                className="px-6 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setShowSuggestions(false);
                }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.name}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden bg-zinc-900 relative group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-zinc-900/90 text-zinc-300 border border-zinc-800 rounded-xl font-medium px-3 py-1 text-xs">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl text-white font-bold group-hover:text-zinc-300 transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-2 py-1 rounded-lg border cursor-pointer transition-all hover:scale-105 ${
                            selectedCategory === tech 
                              ? "bg-zinc-800 border-zinc-700 text-zinc-200" 
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                          }`}
                          onClick={() => setSelectedCategory(tech)}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-medium transition-all"
                      >
                        <Eye className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 transition-all"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}