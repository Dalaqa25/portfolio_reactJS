import '../assets/body.css';
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
                    <h1>About me</h1>
                    <p>I'm an informational technology student specializing in .NET development. I enjoy programming, Linux, and DevOps. Experienced in databases, Web APIs, and MVC, I'm also learning React to expand my skills.</p>
                    <button
                        className={`resume-btn ${clicked ? 'clicked' : ''}`}
                        onClick={handleClick}
                    >
                        Resume
                    </button>
                </div>
                <div className='bubble'>
                    <img src={ profileimg } alt="profileimg" />
                </div>
            </div>
            <div style={{ margin:'70px 0px 0px 0px' }}>
                <h2>Projects</h2>
                <div className='underline'></div>
            </div>
        </>
    )
}