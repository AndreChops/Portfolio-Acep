import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills_frontend">
          <h3>Front-end Development</h3>

            <div className="skills">
              <div className="details">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div className="bar">
                  <div id="html-bar"></div>
              </div>
            </div>

            <div className="skills">
              <div className="details">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="bar">
                  <div id="css-bar"></div>
              </div>
            </div>

            <div className="skills">
              <div className="details">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div className="bar">
                  <div id="javascript-bar"></div>
              </div>
            </div>
        </div>

        <div className="skills_backend">
          <h3>Back-end Development</h3>

            <div className="skills">
              <div className="details">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div className="bar">
                  <div id="html-bar"></div>
              </div>
            </div>

            <div className="skills">
              <div className="details">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="bar">
                  <div id="css-bar"></div>
              </div>
            </div>

            <div className="skills">
              <div className="details">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div className="bar">
                  <div id="javascript-bar"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills