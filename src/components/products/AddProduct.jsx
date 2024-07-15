import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
  const { addProduct } = useProduct();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [imageLight, setImageLight] = useState(null);
  const [imageDark, setImageDark] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("title", title);
    if (imageLight) formData.append("image_light", imageLight);
    if (imageDark) formData.append("image_dark", imageDark);

    addProduct(formData);
    setSlug("");
    setTitle("");
    setImageLight(null);
    setImageDark(null);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.header}>Добавить продукт</h2>
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
        placeholder="Название продукта"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageLight(e.target.files[0])}
        className={styles.fileInput}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageDark(e.target.files[0])}
        className={styles.fileInput}
      />
      <button type="submit" className={styles.button}>
        Добавить продукт
      </button>
    </form>
  );
};

export default AddProduct;
