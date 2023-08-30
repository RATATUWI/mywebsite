import React from 'react'
import './skills.css'
import reactlogo from '../../assets/reactjs.png'
import nodelogo from '../../assets/nodejs.png'
import jslogo from '../../assets/jd.png'
import bootstrap from '../../assets/bootstrap.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        
            <div className="skillBars">
                <div className="skillBar">
                    <img src={reactlogo} alt="React Logo" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2 className=''>React Js</h2>
                    <p>(mapping, filtering, conditional, event handling, 
                        styling, state and props)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={nodelogo} alt="Node Logo" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>Node Js</h2>
                    <p>(Create, Read, Update, Delelte)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={jslogo} alt="Js Logo" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>Javascript</h2>
                    <p>(DOM Manipulation, Fetch API)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={bootstrap} alt="Js Logo" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>Bootstrap</h2>
                    <p>(Layout, Content, Forms, Components, etc... )</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={css} alt="Js Logo" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>CSS</h2>
                    <p>(Syntax, Selectors, Colors, Components, Fonts, List, Borders, Responsive, etc...)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={html} alt="Js Logo" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>HTML</h2>
                    <p>(Element, Attributes, Headings, Styles, Formatting, Layout, Responsive, etc...)</p>
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default Skills