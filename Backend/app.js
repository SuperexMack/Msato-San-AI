import express from "express"
import { GoogleGenAI } from "@google/genai";
import multer from "multer"
import fs from "fs"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const API = process.env.API_KEY
console.log("The api is " + API)
const app = express();

const PORT = 5000;

app.use(cors())
app.use(express.json({ limit: '500mb' }))

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now()+'-'+file.originalname);
  }
});

var upload = multer({ storage: storage});

const ai = new GoogleGenAI({
  apiKey: API,
});




app.post("/getData", upload.single("file") ,async (req, res) => {
  let getFile = req.file.path
  

  if(getFile) {
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are a speech transcriber. Generate a detailed summary and transcript of the speech- ${getFile}`,
  });
  console.log(response.text);
  return res.json({msg:response.text})
  }


});


app.post("/askQuestions" , async(req,res)=>{
  let userQuery = req.body.question
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `See user will give u a long paragraph and now you have to 
    assume that you already know about that paragraph and after that user 
    will ask you some doubts so according to that paragraph you 
    have to answer the question and except user answer
    you don't need to say anything else okhie so here we go - ${userQuery}`,
  });
  return res.json({msg:response.text})
})


app.listen(PORT, () => {
  console.log(`Your server is running on the PORT number ${PORT}`);
});
