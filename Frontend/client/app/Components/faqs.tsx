// This is the FAQS

"use client"
import { useState } from "react"
import { ChevronDown } from 'lucide-react';


const faqsData = [
  {
    question: "What is MSato?",
    answer:
      "MSato is an AI-powered browser extension that helps you learn better while watching educational videos. It can analyze the video, answer your doubts in real-time, and soon, it’ll even let you save notes instantly.",
  },
  {
    question: "How do I use MSato?",
    answer:
      "Just add the extension to your browser (like Chrome), play any educational video, and MSato will automatically start analyzing it. You can then chat with it directly while watching.",
  },
  {
    question: "Can I ask questions while the video is playing?",
    answer:
      "Yes! You can ask any question related to the video content, and MSato will respond instantly based on what's being shown or explained at that moment.",
  },
  {
    question: "Does MSato work on all video platforms?",
    answer:
      "Currently, MSato works best with platforms like YouTube. Support for more platforms is coming soon as the extension evolves.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Right now, MSato is completely free during the early phase. Once more features are added, there might be both free and premium versions.",
  },
  {
    question: "Can I save notes from the video?",
    answer:
      "This feature is coming soon! You’ll be able to save notes and answers from the video with just one click. Stay tuned!",
  },
  {
    question: "Is MSato open source?",
    answer:
      "Yes! The project will soon be made open source so developers can contribute and improve it together.",
  },
  {
    question: "Who built MSato?",
    answer:
      "MSato is built by an indie developer passionate about learning and productivity tools — blending AI with real-life student problems.",
  },
];


export function FAQS(){

    const [change,setChange] = useState(-1)

    const caller = (e:number)=>{
        console.log('index is ' + e)
        console.log("value of change is " + change)
        if(change == -1){
           setChange(e)
        }
        else{
            setChange(-1)
        }
        console.log("value of change is " + change)
        
    }

    return(
        <>
        <div className="mt-[100px] relative hover:cursor-pointer h-auto md:w-[60%] w-full p-2 rounded-lg flex flex-col space-y-5">
            <div className="absolute left-[5%] -top-[20%] overflow-hidden h-[1000px] w-[1000px] blur-3xl opacity-10 rounded-full bg-violet-600">

            </div>
              {faqsData.map((value,index)=>(
                <div onClick={()=>caller(index)} key={index} className="flex flex-col space-y-3 p-2 rounded-2xl">
                    <div className="flex justify-between">
                        <h1 className="md:text-[25px] text-[20px] text-white font-semibold">{value.question}</h1>
                        <ChevronDown onClick={()=>caller(index)} className="h-[30px] hover:cursor-pointer text-white w-[30px]"></ChevronDown>
                    </div>

                    <div className="md:w-[70%] w-full">
                        <h1 className={`${change == index ? "text-[17px] md:text-[20px] text-white font-mono":"hidden"} `}>{value.answer}</h1>
                    </div>

                    <hr></hr>

                </div>
              ))}
        </div>
        </>
    )
}