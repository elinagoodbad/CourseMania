import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import styles from "./AddProduct.module.css";

const AddCourse = () => {
  const { addProduct } = useProduct();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageLight, setImageLight] = useState(null);
  const [imageDark, setImageDark] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("title", `${title} | ${instructor} | ${description}`);
    formData.append("price", price);
    if (imageLight) formData.append("image_light", imageLight);
    if (imageDark) formData.append("image_dark", imageDark);

    addProduct(formData);
    setSlug("");
    setTitle("");
    setInstructor("");
    setDescription("");
    setPrice("");
    setImageLight(null);
    setImageDark(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Product</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <input
          type="text"
          placeholder="Price"
          value={price}
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
        <button type="submit" className={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
