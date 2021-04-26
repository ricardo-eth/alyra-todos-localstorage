import { useState, useEffect } from "react";

const SelectTodos = (props) => {
  const { filter, setFilter } = props;
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const getInitialDarkMode = () =>
    JSON.parse(window.localStorage.getItem("dark-mode")) || false;

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-white", darkMode);
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="activate"
          onChange={() => setDarkMode((active) => !active)}
          checked={!darkMode ? "" : "checked"}
        />
        <label className="form-check-label" for="activate">
          {" "}
          Mode Sombre{" "}
        </label>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="select">
          Filtrer les tâches
        </label>
        <select
          className="form-select"
          id="select"
          value={filter}
          onChange={handleSelectChange}
        >
          {/* eslint-disable-next-line */}
          <option value="all">Toutes 🌈</option>
          {/* eslint-disable-next-line */}
          <option value="completed">Terminées 💪</option>
          {/* eslint-disable-next-line */}
          <option value="notcompleted">pas Terminées 🌪</option>
        </select>
      </div>
    </>
  );
};

export default SelectTodos;
