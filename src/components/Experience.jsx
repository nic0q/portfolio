import { SubTitulo } from "./SubTitulo"
import citi from "../assets/Images/citi.png"
import ad from "../assets/Images/ad.png"

export const Experience = () => {
    return (
<div id="experience" className="bg-gray-900 w-full text-gray-300 min-h-screen">
  <div className="max-w-[1000px] mx-auto px-4 sm:pt-20 flex flex-col w-full">
    <SubTitulo title={"Experience"}></SubTitulo>
    <div className="flex flex-col lg:mt-16 mt-8 ">
      {/* Bloque de experiencia 1 */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-72 w-full mb-16 items-center">
        <div className="w-full lg:w-1/4 h-48 flex justify-center lg:justify-start">
          <img className="rounded-xl bg-white object-cover h-full max-w-xs lg:max-w-none" src={citi} alt="Exp 1"></img>    
        </div>
        <div className="w-full lg:w-3/4 mt-4 lg:mt-0 lg:ml-12 text-justify">
          <div>
            <h3 className="font-bold text-xl">Fullstack Developer </h3>
            <p className="text-sm italic text-[#b53671]">Jan. 2024 - Mar.2024</p>
            <br></br>
            <p>
              During my role as a Fullstack Developer in the Entitlements CitiDirect platform, I was in charge of implementing the User Interface through Angular components and services, focusing on technical debt, good practices, and achieving Unit Testing Coverage of over 90%. Additionally, with my team I drove a tendency to implement HTML/DOM Testing for HTML components like buttons, lists, increasing the reliability for the CQE area.
              Throughout my tenure, I was also able to suggest ideas in Scrum meeting instances and communicate fluently in the English language with high-level engineers and managers.
              I received a recommendation from Senior Developer Jorge Carreño and Manager Jean Machuca, who gave me the opportunity and encouragement to face challenges.
            </p>
          </div>
        </div>
      </div>
      {/* Repite el bloque de experiencia según sea necesario */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-72 w-full mb-16 items-center">
        <div className="w-full lg:w-1/4 h-36 flex justify-center lg:justify-start">
          <img className="rounded-xl bg-white object-cover h-full max-w-xs lg:max-w-none" src={ad} alt="Exp 1"></img>    
        </div>
        <div className="w-full lg:w-3/4 mt-4 lg:mt-0 lg:ml-12 text-justify">
          <div>
            <h3 className="font-bold text-xl">Fullstack Developer (Freelance)</h3>
            <p className="text-sm italic text-[#b53671]">Jan. 2024 - Mar.2024</p>
            <br></br>
            <p>
            In collaboration with a dynamic team of three, we embarked on an ambitious project to develop a local tracking and storage platform tailored for AtentoDent dental clinic's patients. Leveraging the agile Scrum Methodology, we assigned roles including Product Owner, QA, FullStack Developer, and Scrum Master, which facilitated a structured approach to defining user stories and sprints. The front-end was brought to life using React.js, while the back-end's business logic was ingeniously crafted with SpringBoot.

Our commitment to excellence drove us to conduct rigorous performance tests utilizing JMeter, complemented by SonarQube for uncompromising quality assurance. This meticulous approach extended to live testing sessions with the client, ensuring a robust solution tailored to their specific needs. The project triumphantly centralized multiple patient entry channels — WhatsApp, email, and phone — enhancing patient interaction by enabling the convenience of sending mass emails and WhatsApp messages instantly.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}