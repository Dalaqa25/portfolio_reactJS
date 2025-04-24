export default function SkillsComp(props) {
    return (
        <>
            <div className='Skill-img-container'>
                 <img src={props.img.src} alt={props.img.alt} />
            </div>
        </>
    )
}   