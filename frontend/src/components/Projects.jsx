import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Weather Dashboard",
      emoji: "🌦️",
      description: "Real-time weather application providing current conditions and 5-day forecasts globally. Features dynamic backgrounds that change based on weather conditions and an intuitive UI for location searches.",
      tags: ["React", "API", "Responsive", "Frontend"],
      link: "#",
      category: "frontend"
    },
    {
      id: 2,
      title: "Task Manager Pro",
      emoji: "📝",
      description: "Advanced task management system with categorization, priority levels, and deadline notifications. Includes drag-and-drop functionality for task reordering and dark/light mode toggle.",
      tags: ["React", "LocalStorage", "DnD", "UI/UX"],
      link: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Strategic TicTacToe",
      emoji: "🎮",
      description: "Enhanced version of the classic game featuring single-player mode with AI opponent, multiplayer functionality, game history tracking, and customizable board sizes for increased difficulty.",
      tags: ["React", "Game Logic", "AI", "Interactive"],
      link: "#",
      category: "game"
    },
    {
      id: 4,
      title: "Fitness Timer Suite",
      emoji: "⏱️",
      description: "Comprehensive timing application with stopwatch, countdown, and interval timer functions. Perfect for workouts with customizable presets and audio alerts for session management.",
      tags: ["React", "Timers", "Audio", "Fitness"],
      link: "#",
      category: "utility"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe the projects section itself
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    // Observe each project card
    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      document.querySelectorAll('.project-card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [activeFilter]);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      ref={projectsRef} 
      className="py-20 px-6  min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out in-view:opacity-100 in-view:translate-y-0">
          <h2 className="text-6xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Explore my portfolio of web applications and interactive experiences
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            {["all", "frontend", "game", "utility"].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 opacity-0 translate-y-12 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-2">{project.emoji}</span> {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-700 text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;