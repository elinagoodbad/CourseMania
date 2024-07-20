import React, { useState, useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useParams } from "react-router-dom";
import styles from "./EditCourse.module.css";

const EditCourse = () => {
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const { slug } = useParams();

  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageLight, setImageLight] = useState(null);
  const [imageDark, setImageDark] = useState(null);

  useEffect(() => {
    getOneProduct(slug);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      const [courseTitle, courseInstructor, courseDescription, coursePrice] = (
        oneProduct.title || ""
      ).split(" | ");
      setTitle(courseTitle || "");
      setInstructor(courseInstructor || "");
      setDescription(courseDescription || "");
      setPrice(coursePrice || "");
    }
  }, [oneProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "title",
      `${title} | ${instructor} | ${description} | ${price}`
    );
    if (imageLight) formData.append("image_light", imageLight);
    if (imageDark) formData.append("image_dark", imageDark);

    editProduct(slug, formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Edit Course</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            <input
              type="text"
              placeholder="Course Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="text"
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
              step="0.01"
            />
            <div className={styles.fileInputContainer}>
              <input
                type="file"
                accept="image/*"
                id="imageLight"
                onChange={(e) => setImageLight(e.target.files[0])}
                className={styles.fileInput}
              />
              <label htmlFor="imageLight" className={styles.fileInputLabel}>
                Choose New Light Image
              </label>
            </div>
            <div className={styles.fileInputContainer}>
              <input
                type="file"
                accept="image/*"
                id="imageDark"
                onChange={(e) => setImageDark(e.target.files[0])}
                className={styles.fileInput}
              />
              <label htmlFor="imageDark" className={styles.fileInputLabel}>
                Choose New Dark Image
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
