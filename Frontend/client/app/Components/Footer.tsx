import { Linkedin,Github,Twitter } from "lucide-react"
import { TextHoverEffectDemo } from "./TextHoverFooter"
import Link from "next/link"

export default function Footer({myref}:any){
    return(
        <>
        <div ref={myref} className="w-full hover:cursor-pointer h-auto p-3 mt-[300px] z-40 flex flex-col items-center">
            <div className="md:w-[90%] w-full h-[90%] mt-6 flex justify-around md:flex flex-wrap">

               {/* First Box */}
               <div className="w-[500px]  h-full p-7  flex flex-col space-y-5">
                  <h1 className="text-[30px] font-bold bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">MSato San Ai</h1>

                  <div className="md:w-[70%] w-[120%]">

                  <p className="text-slate-100">
                    MSato San is a browser extension that makes understanding online videos easier and more effective by offering smart features via Ai
                  </p>

                  </div>

                  <div className="md:w-[70%] w-full flex space-x-8">
                    <Link href={"https://www.linkedin.com/in/mohitsatilinks/"}><Linkedin className="text-slate-300"></Linkedin></Link>
                    <Link href={"https://github.com/SuperexMack"}><Github className="text-slate-300"></Github></Link>
                    <Link href={"https://x.com/mohitsatitwt"}><Twitter className="text-slate-300"></Twitter></Link>
                  </div>

                  <div>
                    <p className="text-slate-300">&copy; {new Date().getFullYear()} MSato San Ai. all rights reserved</p>
                  </div>
                  

               </div>

               {/* Second Box */}

               <div className="w-[500px] h-full flex space-x-5">
                      
                      <div className="h-full w-[48%] p-7 flex flex-col space-y-3">
                         <h1 className="font-bold text-white">Legal</h1>
                         <h2 className="text-white">Private-policy</h2>
                         <h2 className="text-white">Terms of service</h2>
                         <h2 className="text-white">Copyright</h2>
                      </div>

                       <div className="h-full w-[48%] p-7 flex flex-col space-y-3">
                         <h1 className="font-bold text-white">pages</h1>
                         <h2 className="text-white">Contact-Page</h2>
                         <h2 className="text-white">About</h2>
                         <h2 className="text-white">Follow</h2>
                      </div>

               </div>


            </div>

           
            {/* Name of the Website Again */}

            <div className="w-full h-[300px] mt-7 flex items-center justify-center">
              <h1 className="font-bold md:text-[200px] text-[80px] text-center mt-10 md:mt-24 bg-gradient-to-b from-neutral-950 to-yellow-200 bg-clip-text text-transparent">MSato San AI</h1>
            </div>

        </div>
        </>
    )
}