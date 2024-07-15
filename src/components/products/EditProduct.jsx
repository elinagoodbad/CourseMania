import React, { useState, useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import styles from "./EditProduct.module.css";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { getProduct, updateProduct } = useProduct();
  const { slug } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [imageLight, setImageLight] = useState(null);
  const [imageDark, setImageDark] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const product = await getProduct(slug);
        setTitle(product.title);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    loadProduct();
  }, [slug, getProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    if (imageLight) formData.append("image_light", imageLight);
    if (imageDark) formData.append("image_dark", imageDark);

    try {
      await updateProduct(slug, formData);
      navigate("/products"); // Переход на страницу списка продуктов после сохранения изменений
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Edit Product</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
