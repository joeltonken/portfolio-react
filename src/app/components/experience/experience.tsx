import "./experience.scss"
import { Skill } from "../skill/skill"
import { SectionTitle } from "../sectionTitle/section-title"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>I volunteered in three projects, two utilizing Django with Python and the other using Spring with Java.</p>
          <div className="experience-time">
            <Skill image="/django.jpg" measure={1} years="1 year"/>
            <Skill image="/react.png" measure={1} years="1 year"/>
            <Skill image="/js.png" measure={1} years="1 year"/>
            <Skill image="/java.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}