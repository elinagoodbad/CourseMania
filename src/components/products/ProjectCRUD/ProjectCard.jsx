import React, { useContext, useState } from "react";
import { ProjectContext } from "../../../context/ProjectContextProvider";
import styles from "./ProjectCard.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { ADMIN } from "../../../helpers/const";
import { useAuth } from "../../../context/AuthContextProvider";

const ProjectCard = ({ project }) => {
  const { updateProject, deleteProject } = useContext(ProjectContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProject, setUpdatedProject] = useState({ ...project });
  const [imagePreview, setImagePreview] = useState(project.image);

  const { currentUser } = useAuth();
  const isAdmin = ADMIN.includes(currentUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProject({ ...updatedProject, [name]: value });
    if (name === "image") {
      setImagePreview(value);
    }
  };

  const handleUpdate = () => {
    updateProject(project.id, updatedProject);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setUpdatedProject({ ...project });
    setImagePreview(project.image);
  };

  return (
    <div className={styles.projectCard}>
      {isEditing ? (
        <div className={styles.projectCardEdit}>
          <input
            type="text"
            name="name"
            value={updatedProject.name}
            onChange={handleInputChange}
            placeholder="Project Name"
            required
          />

          <input
            type="url"
            name="image"
            value={updatedProject.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />

          <img
            style={{ width: "100px" }}
            className={styles.projectCardImage}
            src={imagePreview}
            alt="Preview"
          />

          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className={styles.projectCardView}>
          {project.image && (
            <img
              className={styles.projectCardImage}
              src={project.image}
              alt="Project"
            />
          )}
          {isAdmin && (
            <div className={styles.iconGroup}>
              <IconButton
                className={styles.iconButton}
                aria-label="edit"
                onClick={handleEditClick}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                className={styles.iconButton}
                aria-label="delete"
                onClick={() => deleteProject(project.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )}
          <h3>{project.name}</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
