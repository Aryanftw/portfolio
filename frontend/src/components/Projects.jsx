import React from "react";
import "./Projects.css";
import { useEffect,useRef } from "react";

const Projects = () => {
  const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("slide-up");
            } else {
              entry.target.classList.remove("slide-up");
            }
          });
        },
        { threshold: 0.1 } 
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  return (
    <div id="projects" ref={elementRef} className="animate-on-scroll flex flex-col items-center min-w-max">
  <p className="text-6xl mb-9 pb-10 text-white font-bold">Projects</p>
  <div className="row">
    <div className="project-card">
      <span className="text-3xl p-10 pb-0">Weather App🌦️</span>
      <p className="p-10">
        A simple, real-time weather app that displays current conditions and
        a five-day forecast for cities worldwide. Built with React, it
        fetches data from the OpenWeatherMap API and features responsive
        design for a seamless experience across devices.
      </p>
    </div>
    <div className="project-card">
      <span className="text-3xl font-semibold p-10 pb-0">ToDo List App📝</span>
      <p className="p-10 font-semibold text-sm">
        An intuitive To-Do List application that allows users to create,
        edit, and delete tasks. Built with React, it features local storage
        for persistent task management, ensuring users can easily track
        their daily activities and boost productivity.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="project-card">
      <span className="font-semibold p-10 pb-0 text-3xl">TicTacToe Game🎮</span>
      <p className="p-10 font-semibold text-sm">
        A classic Tic-Tac-Toe game built with React, featuring a clean
        interface and interactive gameplay for two players. Players can take
        turns, and the game detects wins, draws, and resets, providing an
        engaging way to enjoy this timeless game.
      </p>
    </div>
    <div className="project-card">
      <span className="font-semibold p-14 pb-0 text-3xl">Stopwatch App⏱️</span>
      <p className="p-10 font-semibold text-sm">
        A simple and efficient stopwatch application built with React. Users
        can start, pause, and reset the timer, making it perfect for
        tracking intervals and timing activities. The clean interface
        ensures ease of use for anyone needing precise time management.
      </p>
    </div>
  </div>
</div>

  );
};

export default Projects;
