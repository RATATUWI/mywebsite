import './projects.css'
import project1 from '../../assets/portfolio-1.png'
import project2 from '../../assets/portfolio-2.png'
import project3 from '../../assets/portfolio-3.png'
import project4 from '../../assets/portfolio-4.png'
import project5 from '../../assets/portfolio-5.png'
import project6 from '../../assets/portfolio-6.png'
import project1img from '../../assets/project1img.png'
import pin from '../../assets/clip pin.png'
import project2Img from '../../assets/project2.png'
const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectHeader">My Projects</h2>
        <div className="projectImgs">
           <img src={project1img } alt="project 1" className="projectImg" />
           <div className="projectText">
            <h2 className='projectTextTitle'>• Create Read Update Delete</h2>
             <p className="projectTextDesc">Basic collecting information using CRUD operations. 
              This built using React Js, Bootstrap, and Node Js, Mysql Xampp for the backend</p>
           </div>
           </div>
           <div className="projectImgs">
           <img src={project2Img} alt="project 1" className="projectImg" />
           <div className="projectText">
            <h2 className='projectTextTitle'>• Ongoing</h2>
             <p className="projectTextDesc"></p>
           </div>
           </div>
           
                
           
       

    </section>
  )
}

export default Projects