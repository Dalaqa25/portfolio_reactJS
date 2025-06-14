import '../assets/skills.css';
import skillsdata from '../skillsdata'; 
import SkillsComp from './skillsComp';

export default function Skills() {

    const skillsElements = skillsdata.map((skill) => {
        return (
            <SkillsComp
                key={skill.id}
                {...skill}
            />
        )
    })

    return (
        <>
        <div id="skills">
            <h2>Skills</h2>
                <div className="underline"></div>

                <div style={{marginTop:'70px'}} className="skills-container">
                    <div className='skills-wrapper'>
                        {skillsElements}
                    </div>
                </div>
        </div>
        </>
    )
}