import { Linkedin,Github,Twitter } from "lucide-react"
import { TextHoverEffectDemo } from "./TextHoverFooter"

export default function Footer(){
    return(
        <>
        <div className="w-full h-auto p-3  mt-[300px] flex flex-col items-center">
            <div className="w-[90%]  h-[90%] mt-6 flex justify-around">

               {/* First Box */}
               <div className="w-[500px] h-full p-7  flex flex-col space-y-5">
                  <h1 className="text-[30px] font-bold bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">MSato San Ai</h1>

                  <div className="w-[70%]">

                  <p className="text-slate-100">
                    MSato San is a browser extension that makes understanding online videos easier and more effective by offering smart features via Ai
                  </p>

                  </div>

                  <div className="w-[70%] flex space-x-8">
                    <Linkedin className="text-slate-300"></Linkedin>
                    <Github className="text-slate-300"></Github>
                    <Twitter className="text-slate-300"></Twitter>
                  </div>

                  <div>
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} MSato San Ai. all rights reserved</p>
                  </div>
                  

               </div>

               {/* Second Box */}

               <div className="w-[500px] h-full  bg-purple-700">

               </div>


            </div>

           
            {/* Name of the Website Again */}

            <div className="w-full h-[300px] mt-7 flex items-center justify-center">
               <TextHoverEffectDemo></TextHoverEffectDemo>
            </div>

        </div>
        </>
    )
}