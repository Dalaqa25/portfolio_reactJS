import '../assets/form.css'
import fbSVG from '../assets/fbSVG.svg'
import gitSVG from '../assets/gitSVG.svg'
import lnSVG from '../assets/lnSVG.svg'

export default function Form() {
    return (
        <>
        <div id='contact'>
            <h2>Contact</h2>
            <div className='underline'></div>
            <div className='form-container'>
                <form>
                    <div style={{ display: "flex", flexDirection: "column", gap:"8px" }}>
                        <label htmlFor={'email'}>Email</label>
                        <input type={"email"} name={'email'} placeholder={'example@gmail.com'}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap:"8px" }}>
                        <label>Message</label>
                        <textarea placeholder={'we are interested in!'}></textarea>
                    </div>
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <button>Send</button>
                    </div>

                    <div className='social-icons'>
                      <a href="https://www.facebook.com/giorgi.dalaqishvili.5688"><img src={fbSVG} alt="facebook"/></a>
                        <a href="https://github.com/Dalaqa25"><img src={gitSVG} alt="github"/></a>
                        <a href="www.linkedin.com/in/giorgi-dalaqishvili-391374320"><img src={lnSVG} alt="linkedin"/></a>
                    </div>

                    <p style={{textAlign:'center', margin:"32px, 0px, 0px,0px", color:"#cccdd0"}}>Giorgi Dalakishvili 2025</p>
                </form>
            </div>
        </div>
        </>
    )
}