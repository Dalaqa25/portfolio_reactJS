import '../assets/body.css';
import CV from '../public/CV.pdf'
import profileimg from '../assets/profileimg.png';
import  {useState} from 'react'; 

export default function Body() {

    const [ clicked, setClicked ] = useState(false);

    const  handleClick = () => {
        setClicked(true)
        setTimeout(() => setClicked(false), 300)
    }

    return (
        <>
            <div className="body">
                <div className='content'>
                    <p style={{color:'#fdc435', fontWeight:'bold', marginBottom:'12px'}}>Software Developer</p>
                    <h1 style={{fontSize:'55px'}}>Hello, my name is <br/> Giorgi Dalakishvili</h1>
                    <p>I'm an informational technology student specializing in .NET development. I enjoy programming, Linux, and DevOps. Experienced in databases, Web APIs, and MVC, I'm also learning React to expand my skills.</p>
                    <a href="/CV.pdf" download={CV}>
                        <button
                            className={`resume-btn ${clicked ? 'clicked' : ''}`}
                            onClick={handleClick}>
                        Resume
                        </button>
                    </a>
                </div>
                <div className='bubble'>
                    <img src={ profileimg } alt="profileimg" />
                </div>
            </div>
            <h2>Projects</h2>
            <div className='underline'></div>
        </>
    )
}