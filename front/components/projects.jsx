import '../assets/project.css';
import syncro from '../assets/syncro.png';

export default function Projects(props) {
    return (
        <div className="projects-container">
            <div className="projects">
            <div className='img-container'>
                <div className='header'>
                    <div className='btn-container'>
                        <div className='btn red-btn'></div>
                        <div className='btn yellow-btn'></div>
                        <div className='btn green-btn'></div>
                    </div>

                    <div className='search-bar'>
                        <p>🔒 {props.title}</p>
                    </div>
                </div>

                <div className='imgframe'>
                    <a target={"_blank"} href={props.link}>
                        <img src={ props.img.src }  alt={props.img.alt} />
                    </a>
                </div>
            </div>

            </div>
        </div>
    );
}