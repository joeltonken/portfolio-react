import "./experience.scss"
import { Skill } from "../skill/skill"
import { SectionTitle } from "../sectionTitle/section-title"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>texto de exp Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellat officiis quidem beatae?</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 year"/>
            <Skill image="/ts.png" measure={1} years="1 year"/>
            <Skill image="/js.png" measure={3} years="3 years"/>
            <Skill image="/java.png" measure={3} years="3 years"/>
          </div>
        </div>
    )
}