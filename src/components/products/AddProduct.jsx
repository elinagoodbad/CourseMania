.container {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  background-color: #121212;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.header {
  margin-bottom: 2rem;
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.form {
  width: 100%;
}

.input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #333333;
  background-color: #1e1e1e;
  color: #ffffff;
  font-size: 1rem;
  box-sizing: border-box;
  text-align: left; /* Изменено для выравнивания текста по левому краю */
}

.input::placeholder {
  color: #9e9e9e;
  text-align: left; /* Изменено для выравнивания текста плейсхолдера по левому краю */
}

.input:focus {
  border-color: #ffffff;
  outline: none;
}

.fileInputContainer {
  width: 100%;
  margin-bottom: 1rem;
}

.fileInput {
  display: none;
}

.fileInputLabel {
  display: inline-block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid #333333;
  background-color: #1e1e1e;
  color: #9e9e9e;
  font-size: 1rem;
  text-align: left; /* Изменено для выравнивания текста по левому краю */
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 1rem; /* Добавлено для добавления отступа слева для выравнивания текста по левому краю */
}

.fileInputLabel:hover {
  background-color: #2e2e2e;
  color: #ffffff;
}

.button {
  width: 100%;
  padding: 0.75rem;
  border-radius: 1.5rem;
  border: none;
  background: linear-gradient(45deg, #2c2c2c, #1e1e1e);
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.button:hover {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  background: linear-gradient(45deg, #3c3c3c, #2e2e2e);
}
