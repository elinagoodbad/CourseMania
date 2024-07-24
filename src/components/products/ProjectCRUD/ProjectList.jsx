import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../../../context/ProjectContextProvider";
import styles from "./ProjectList.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../homePage/Footer";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  const navigate = useNavigate();
  const handlePrevProjects = () => {
    navigate("/courses");
  };
  return (
    <div>
      <div className={styles.projectlist}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <button
          className={styles.viewProjectsButton}
          onClick={handlePrevProjects}
        >
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectList;
