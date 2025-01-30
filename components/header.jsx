import '../assets/header.css';

export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <p>Giorgi Dalakishvili</p>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}