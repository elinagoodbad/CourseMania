import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import styles from "./AddCourse.module.css";

const AddCourse = () => {
  const { addProduct } = useProduct();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageLight, setImageLight] = useState("");
  const [imageDark, setImageDark] = useState("");

  const handleClick = () => {
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("title", `${title} | ${instructor} | ${description}`);
    formData.append("price", price);
    formData.append("image_light", imageLight);
    formData.append("image_dark", imageDark);
    addProduct(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Product</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Slug"
          onChange={(e) => setSlug(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Course Name"
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Instructor"
          onChange={(e) => setInstructor(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
          required
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
            Choose Light Image
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
            Choose Dark Image
          </label>
        </div>
        <button onClick={handleClick} className={styles.button}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
