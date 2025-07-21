import { useRef,useState,useEffect} from "react"
import { Mybuttons } from "./Buttons"
import { FAQS} from "./faqs"
import Footer from "./Footer"
import { TracingBeamDemo } from "./ScrollEffect"
import { HeroVideoDialogDemo } from "./VideoSection"
import Image from "next/image"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

let Newbuttons = Mybuttons[1]

export default function HomePage({VideoFeature,About,Contact}:any){
   const [xpostion, setXposition] = useState(0);
  const [ypostion, setYposition] = useState(0);

  const cursorRef = useRef<HTMLImageElement | null>(null);
  const getElement = useRef<HTMLImageElement | null>(null)

  useEffect(()=>{
    AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 400, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  },[])

  

  useEffect(() => {
    const setMouseCursor = (e: MouseEvent) => {
      setXposition(e.clientX);
      setYposition(e.clientY);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", setMouseCursor);
    return () => window.removeEventListener("mousemove", setMouseCursor);
  }, [xpostion, ypostion]);
  
    return(
        <>
        <div className="bg-[#1a1818] w-full h-auto flex flex-col overflow-hidden">

          <Image
          ref={cursorRef}
          alt="cursor"
          src="/cursor.png"
          width="60"
          height="60"
          className="md:fixed w-[60px] hidden h-[60px]"
        ></Image>
           
           {/* Main section */}

           <div className="w-full  h-auto mt-[100px] flex flex-col items-center">

           {/* Heading section */}

           <div className="md:w-[90%] w-full  h-auto p-1 mt-[50px] flex flex-col space-y-5 items-center">
               
          <button className="font-bold text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60">
            🎉 Introducing MSato San AI
          </button>

           

           <div data-aos="flip-up" className="mt-7 md:w-[80%] w-full h-auto flex flex-col space-y-3.5 items-center">
              <h1 className="md:text-[70px] text-[40px] sm-text-[50px] text-center font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">MSato San AI Extension Makes Learning Easy.</h1>
           </div>

           <p data-aos="flip-up" className="text-center md:text-[20px] text-[18px] sm:text-[20px] md:font-light font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Your AI-powered study buddy analyze videos in Browser, ask doubts, and save notes with one click.</p>

           <div className="flex justify-center md:space-x-10 space-x-5 mt-5">
            <Link href={"/extensionPage"}><button>{Newbuttons.component}</button></Link>
            <Link href={"https://x.com/mohitsatitwt"}><button className="bg-yellow-300 md:w-[200px] w-[160px] p-2 rounded-md md:rounded-xl shadow-lg shadow-amber-300">Follow Us !!</button></Link>
           </div>

           </div>

           {/* Video section */}

           

           </div>

           <div className="w-full h-auto p-5 mt-[40px] flex flex-col items-center">

            <div data-aos="slide-up" ref={VideoFeature} className="h-auto w-[70%] ">
            <HeroVideoDialogDemo></HeroVideoDialogDemo>
           </div>

            {/* what we do section */}
           <div className="w-full h-auto md:mt-[200px] mt-[150px] flex flex-col items-center">
                <h1 data-aos="flip-up" className="md:text-[70px] text-[40px] text-center font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">What we do?</h1>
                
                <div className="mt-[100px]">
                <TracingBeamDemo></TracingBeamDemo>
                </div>

           </div> 

           </div>

           <div className="w-full h-auto md:mt-[300px] mt-[150px] p-5 flex flex-col items-center">
                
                <h1 data-aos="zoom-in" className="mt-[30px] text-[20px] font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Frequently Asked Questions</h1>
                
                <div className="md:w-[50%] w-full">
                <h1 data-aos="zoom-in" className="mt-[30px] md:text-[60px] text-[40px] font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent text-center">We hope this helps you understand MSato better</h1>
                </div>
                
                <div ref={About} className="md:mt-7 mt-[100px] w-full flex flex-col items-center">
                <FAQS></FAQS>
                </div>

                <Footer myref={Contact}></Footer>
          
           </div>

           
 
        </div>
        </>
    )
}