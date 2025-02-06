import '../assets/form.css'
import fbSVG from '../assets/fbSVG.svg'
import gitSVG from '../assets/gitSVG.svg'
import lnSVG from '../assets/lnSVG.svg'

export default function Form() {
    return (
        <>
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
                      <img src={fbSVG} alt="facebook"/>
                        <img src={gitSVG} alt="github"/>
                        <img src={lnSVG} alt="linkedin"/>
                    </div>
                </form>
            </div>
        </>
    )
}