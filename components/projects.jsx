import '../assets/project.css';
import syncro from '../assets/syncro.png';

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects">
                <div>
                    <h2>Projects</h2>
                    <div
                    className='underline'></div>
                </div>

            <div className='img-container'>
                <div className='header'>
                    <div className='btn-container'>
                        <div className='btn'></div>
                        <div className='btn'></div>
                        <div className='btn'></div>
                    </div>
                </div>

                <div className='imgframe'>
                    <img src={ syncro }  alt="" />
                </div>
            </div>

            </div>
        </div>
    );
}