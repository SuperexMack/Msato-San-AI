import { Mybuttons } from "./Buttons"
import { FAQS} from "./faqs"
import Footer from "./Footer"
import { TracingBeamDemo } from "./ScrollEffect"
import { HeroVideoDialogDemo } from "./VideoSection"

let buttons = Mybuttons[1]

export default function HomePage(){
    return(
        <>
        <div className="bg-[#1a1818] w-full h-auto flex flex-col overflow-hidden">
           
           {/* Main section */}

           <div className="w-full  h-auto mt-[100px] flex flex-col items-center">

           {/* Heading section */}

           <div className="w-[60%]  h-auto p-1 mt-[50px] flex flex-col space-y-5 items-center">
               
           <div className="w-[300px] rounded-2xl shadow-lg shadow-violet-600 p-2 border-2 border-white mt-4 flex justify-center">
             <h1 className="text-white font-bold">Welcome to the World</h1>
           </div> 

           <div className="mt-7  w-[80%] h-auto flex flex-col space-y-3.5 items-center">
              <h1 className="text-[70px] text-center font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">MSato San AI Extension Makes Learning Easy.</h1>
           </div>

           <p className="text-center text-[20px] bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Your AI-powered study buddy analyze videos in Browser, ask doubts, and save notes with one click.</p>

           <div className="flex justify-center space-x-10 mt-5">
            <button>{buttons.component}</button>
            <button className="bg-yellow-300 w-[200px] rounded-xl shadow-lg shadow-amber-300">Follow Us !!</button>
           </div>

           </div>

           {/* Video section */}

           

           </div>

           <div className="w-full h-auto p-5 mt-[40px] flex flex-col items-center">

            <div className="h-auto w-[70%] ">
            <HeroVideoDialogDemo></HeroVideoDialogDemo>
           </div>

            {/* what we do section */}
           <div className="w-full h-auto mt-[200px] flex flex-col items-center">
                <h1 className="text-[70px] text-center font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">What we do?</h1>
                <TracingBeamDemo></TracingBeamDemo>
           </div> 

           </div>

           <div className="w-full  h-auto mt-[100px] p-5 flex flex-col items-center">
                
                <h1 className="mt-[30px] text-[20px] font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Frequently Asked Questions</h1>
                
                <div className="w-[50%]">
                <h1 className="mt-[30px] text-[60px] font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent text-center">We hope this helped you understand MSato better</h1>
                </div>
                
                <div className="mt-7 w-full  flex flex-col items-center">
                <FAQS></FAQS>
                </div>

                <Footer></Footer>
          
           </div>

           

        </div>
        </>
    )
}