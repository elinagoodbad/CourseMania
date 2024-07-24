import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API2 } from "../helpers/const";
import { useNavigate } from "react-router-dom";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios(API2)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  const addProject = (project) => {
    axios
      .post(API2, project)
      .then((response) => {
        setProjects([...projects, response.data]);
      })
      .catch((error) => {
        console.error("There was an error adding the project!", error);
      });
    navigate("/projectList");
  };

  const updateProject = (id, updatedProject) => {
    axios
      .put(`${API2}/${id}`, updatedProject)
      .then((response) => {
        setProjects(
          projects.map((project) =>
            project.id === id ? response.data : project
          )
        );
      })
      .catch((error) => {
        console.error("There was an error updating the project!", error);
      });
  };

  const deleteProject = (id) => {
    axios
      .delete(`${API2}/${id}`)
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the project!", error);
      });
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
