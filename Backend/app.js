import express from "express";
import { GoogleGenAI } from "@google/genai";
import multer from "multer";
import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const API = process.env.API_KEY;
console.log("The api is " + API);
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json({ limit: "500mb" }));

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

const ai = new GoogleGenAI({
  apiKey: API,
});

app.post("/getData", upload.single("file"), async (req, res) => {
  let getFile = req.file.path;
  const fileData = fs.readFileSync(getFile).toString("base64");
  console.log("The base 64 data is " + fileData)

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              mimeType: "audio/mpeg",
              data: fileData,
            },
          },
          {
            text: `You are a speech transcription assistant.
                The input is a .mp3 audio file that contains spoken Language.
                Please do the following:
                1. Transcribe the spoken content into clean, well-punctuated English.
                2. Do not make up anything — only include what is actually said.
                3. If any part is inaudible or unclear, write [inaudible].
                4. After the transcript, write a short summary of the speech.
                Output the transcript first, then the summary.`,
          },
        ],
      },
    ],
  });

  console.log(response.text);
  return res.json({ msg: response.text });
});

app.post("/askQuestions", async (req, res) => {
  let userQuery = req.body.question;
  console.log(userQuery);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `See user will give u a long paragraph and now you have to 
    assume that you already know about that paragraph and after that user 
    will ask you some doubts so according to that paragraph you 
    have to answer the question and except user answer
    you don't need to say anything else okhie so here we go - ${userQuery}`,
  });
  return res.json({ msg: response.text });
});

app.listen(PORT, () => {
  console.log(`Your server is running on the PORT number ${PORT}`);
});
