import bg from '../../assets/background.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import './intro.css';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">John Rey</span> <br/>Web Developer</span>
            <p className="introPara">"With a passion for innovation, I bring web designs to life, bridging  <br/> imagination 
            and technology to build user-centric online journeys."

</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro