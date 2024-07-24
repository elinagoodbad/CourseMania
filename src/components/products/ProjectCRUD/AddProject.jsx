import React, { useState, useContext } from "react";
import styles from "./AddProject.module.css";
import { ProjectContext } from "../../../context/ProjectContextProvider";

const AddProject = () => {
  const { addProject } = useContext(ProjectContext);
  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(newProject);
    setNewProject({
      name: "",
      image: "",
    });
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>Add Project</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.columnContainer}>
            <div className={styles.column}>
              <input
                name="name"
                value={newProject.name}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Project Name"
                required
              />
            </div>
          </div>
          <input
            value={newProject.image}
            placeholder="Image URL"
            type="url"
            name="image"
            className={styles.input}
            onChange={handleInputChange}
          />
          <button type="submit" className={styles.button}>
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
