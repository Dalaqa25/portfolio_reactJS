import '../assets/form.css';
import fbSVG from '../assets/fbSVG.svg';
import gitSVG from '../assets/gitSVG.svg';
import lnSVG from '../assets/lnSVG.svg';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
    useEffect(() => {
        emailjs.init('k3kXABh647tksXa4w'); 
        }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        emailjs
            .send('service_o23odwd', 'template_hhrhnt4', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div id="contact">
            <h2>Contact</h2>
            <div className="underline"></div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="example@gmail.com" required />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="We are interested in!" required></textarea>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <button type="submit">Send</button>
                    </div>

                    <div className="social-icons">
                        <a href="https://www.facebook.com/giorgi.dalaqishvili.5688">
                            <img src={fbSVG} alt="facebook" />
                        </a>
                        <a href="https://github.com/Dalaqa25">
                            <img src={gitSVG} alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/giorgi-dalaqishvili-391374320">
                            <img src={lnSVG} alt="linkedin" />
                        </a>
                    </div>

                    <p style={{ textAlign: 'center', margin: '32px 0px 0px 0px', color: '#cccdd0' }}>
                        Giorgi Dalakishvili 2025
                    </p>
                </form>
            </div>
        </div>
    );
}