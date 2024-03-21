import { SubTitulo } from "./SubTitulo"
import citi from "../assets/Images/citi.png"
import ad from "../assets/Images/ad.png"

export const Experience = () => {
    return (
      <div id="experience" className="bg-gray-900 w-full text-gray-300 h-screen">
        <div className="max-w-[1000px] mx-auto p-4 sm:pt-20 flex flex-col w-full">
            <SubTitulo title={"Experience"}></SubTitulo>
            <div className="flex flex-col lg:mt-16 mt-8 ">
                <div className="flex h-72 w-full mb-16 items-center">
                    <div className="w-1/4 h-36">
                        <img className="rounded-xl bg-white" src={citi} alt="Exp 1"></img>    
                    </div>
                    <div className="w-3/4 ml-6 text-justify">
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
                        <h3 className="font-bold text-xl">Tools</h3>
                    
                    </div>
                </div>
                <div className="flex h-72 w-full mb-16 items-center">
                <div className="w-1/4 h-36">
                        <img className="rounded-xl bg-white" src={ad} alt="Exp 2"></img>    
                    </div>
                    <div className="w-3/4 ml-6 text-justify">
                        <div>
                        <h3 className="font-bold text-xl">Fullstack Developer (Freelance) </h3>
                        <p className="text-sm italic text-[#b53671]">Jan. 2024 - Mar.2024</p>
                        <br></br>
                        <p>
                        During my role as a Fullstack Developer in the Entitlements CitiDirect platform, I was in charge of implementing the User Interface through Angular components and services, focusing on technical debt, good practices, and achieving Unit Testing Coverage of over 90%. Additionally, with my team I drove a tendency to implement HTML/DOM Testing for HTML components like buttons, lists, increasing the reliability for the CQE area.
Throughout my tenure, I was also able to suggest ideas in Scrum meeting instances and communicate fluently in the English language with high-level engineers and managers.
I received a recommendation from Senior Developer Jorge Carreño and Manager Jean Machuca, who gave me the opportunity and encouragement to face challenges.
                        </p>
                        </div>
                        <h3 className="font-bold text-xl">Tools</h3>
                    
                    </div>
                </div>       

            </div>

        </div>
      </div>
    )
}