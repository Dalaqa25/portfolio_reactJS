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
                        <div className='btn red-btn'></div>
                        <div className='btn yellow-btn'></div>
                        <div className='btn green-btn'></div>
                    </div>

                    <div className='search-bar'>
                        <p>🔒 www.syncry.netlify.app</p>
                    </div>
                </div>

                <div className='imgframe'>
                    <a target={"_blank"} href="https://github.com/Dalaqa25/portfolio_reactJS">
                        <img src={ syncro }  alt="" />
                    </a>
                </div>
            </div>

            </div>
        </div>
    );
}