import React from "react";
import "./index.css";
function Cards() {
  return (
    <div className="card">
      

      <h2>Chandana BM</h2>

      <h4>React Developer</h4>

      <p>
        Passionate about building modern, responsive web applications using
        React and JavaScript. Currently on the journey to becoming a
        professional Frontend Developer.
      </p>

      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>

      <button>View Portfolio</button>
    </div>
  );
}

export default Cards;