import '../assets/body.css';

export default function Body() {
    return (
        <>
            <div className="body">
                <div className='content'>
                    <h1>About me</h1>
                    <p>I'm an informational technology student specializing in .NET development. I enjoy programming, Linux, and DevOps. Experienced in databases, Web APIs, and MVC, I'm also learning React to expand my skills.</p>
                    <button id='projects-btn'>Resume</button>
                </div>
                <div className='bubble'>
                    <img src="assets\profileimg.png" alt="" />
                </div>
            </div>
        </>
    )
}