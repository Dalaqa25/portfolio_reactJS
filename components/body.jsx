import '../assets/body.css';

export default function Body() {
    return (
        <>
            <div className="body">
                <div className='body-container'>
                    <div className="intro">
                        <p className='position'>Softwear Developer</p>
                        <div className='content'>
                            <h1>Hello, my name is Giorgi Dalakishvili</h1>
                            <p>I'm an IT student specializing in .NET development. Passionate about programming, Linux, and DevOps, I enjoy solving challenges and building web applications.</p>
                            <div className='buttons'>
                                <button id='projects-btn'>Projects</button>
                                <button id='git-btn'>GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}