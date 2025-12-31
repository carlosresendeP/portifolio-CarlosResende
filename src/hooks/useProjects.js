import { useState, useEffect } from "react";
import { projectsData as initialProjectsData } from "../data/projectsData";

const STORAGE_KEY = "portfolio_projects";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  // Carregar projetos do localStorage ou usar dados iniciais
  useEffect(() => {
    const storedProjects = localStorage.getItem(STORAGE_KEY);

    if (storedProjects) {
      try {
        const parsedProjects = JSON.parse(storedProjects);
        setProjects(parsedProjects);
      } catch (error) {
        console.error("Error parsing stored projects:", error);
        setProjects(initialProjectsData);
      }
    } else {
      setProjects(initialProjectsData);
    }
  }, []);

  // Salvar projetos no localStorage sempre que houver mudança
  const saveProjects = (updatedProjects) => {
    setProjects(updatedProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
  };

  // Adicionar novo projeto
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(), // Gerar ID único baseado em timestamp
    };

    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
    return newProject;
  };

  // Atualizar projeto existente
  const updateProject = (id, updatedData) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, ...updatedData } : project
    );
    saveProjects(updatedProjects);
  };

  // Deletar projeto
  const deleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    saveProjects(updatedProjects);
  };

  // Buscar projeto por ID
  const getProjectById = (id) => {
    return projects.find((project) => project.id === parseInt(id));
  };

  // Resetar para dados originais
  const resetToDefault = () => {
    saveProjects(initialProjectsData);
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
    getProjectById,
    resetToDefault,
  };
};
