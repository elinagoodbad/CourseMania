import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import styles from "./AddProject.module.css";

const AddProject = () => {
  const { addProject } = useProduct();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("");
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!slug || !title || !description || !price || !course || !video) {
      alert("Please fill in all fields and choose a video file.");
      return;
    }
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("course", course);
    if (video) formData.append("video", video);
    addProject(formData);
  };

  return (
    <div>
      <div className={styles.backgroundWrapper}></div>
      <div className={styles.container}>
        <h1 className={styles.header}>Add Project</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.columnContainer}>
            <div className={styles.column}>
              <input
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Project Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
                required
              />
              <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.column}>
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className={styles.input}
                required
              />
              <div className={styles.fileInputContainer}>
                <input
                  type="file"
                  accept="video/*"
                  id="video"
                  onChange={(e) => setVideo(e.target.files[0])}
                  className={styles.fileInput}
                  required
                />
                <label htmlFor="video" className={styles.fileInputLabel}>
                  Choose Video
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
