"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../components/ui/tracing-beam";
  
export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 w-full">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4 text-white">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover w-[700px] h-[300px]"
                />
              )}
             <h1 className="text-white">{item.description}</h1> 
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "🧩 Use It Directly in Your Browser",
    description: (
      <>
        <p>
          MSato is built as a simple browser extension that sits quietly while you study. You don’t need to open any separate app or window.
        </p>
        <p>
          Just add it to your browser (like Chrome), open your video — whether it's a coding tutorial, an exam lecture, or a course — and MSato starts working automatically in the background. It blends right into your existing learning flow without getting in your way.
        </p>
        <p>
          Think of it as your invisible assistant while you study online.
        </p>
      </>
    ),
    badge: "Browser Extension",
    image:
      "/browser.jpg",
  },
  {
    title: "🧠 Understand What You're Studying, Instantly",
    description: (
      <>
        <p>
          Ever watched a video and felt lost halfway through? Maybe you missed a small explanation, or maybe the speaker went too fast. Happens all the time.
        </p>
        <p>
          MSato watches the video with you, analyzes what’s being said, and understands the technical or academic content in real-time. It captures the essence of what you're trying to learn and turns it into useful information that you can engage with.
        </p>
        <p>
          Whether you're learning React, revising DBMS for your exam, or exploring system design — MSato has your back.
        </p>
      </>
    ),
    badge: "Video Understanding",
    image:
     "/video.jpg",
  },
  {
    title: "💬 Ask Questions While Watching",
    description: (
      <>
        <p>
          MSato lets you interact with the video like never before. Stuck somewhere? Just ask.
        </p>
        <p>
          You can ask doubts in plain English — for example, “What does this function do?” or “Explain that part again.” MSato will reply instantly based on what’s happening in the video at that moment.
        </p>
        <p>
          It’s like having a smart friend sitting next to you, ready to help whenever you need it.
        </p>
      </>
    ),
    badge: "Live Q&A",
    image:
      "/questionmark.jpg",
  },
  {
    title: "📝 Save Important Notes (Coming Soon)",
    description: (
      <>
        <p>
          We all know how annoying it is to pause the video, open Notion or Google Docs, and start typing notes manually.
        </p>
        <p>
          In the next update, MSato will let you save important parts of the video — answers, explanations, or highlights — with just one click. All notes will be auto-organized so you can revise anytime.
        </p>
        <p>
          This feature is under development and will be launched soon. Stay tuned!
        </p>
      </>
    ),
    badge: "Upcoming Feature",
    image:
      "/notes.jpg",
  },
];
