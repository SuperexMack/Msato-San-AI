let mediaRecorder;
let recordedChunks = [];

let message;

let ContentArea = document.getElementById("content-area");

document.querySelector(".startRecord").addEventListener("click", () => {
  chrome.tabCapture.capture(
    {
      audio: true,
      video: false,
    },
    (stream) => {
      if (stream) {
        startRecording(stream);
        document.querySelector(".userPermission").textContent =
          "Recording YouTube audio...";
      } else {
        document.querySelector(".userPermission").textContent =
          "Failed to capture tab audio";
      }
    }
  );
});

function startRecording(stream) {
  // Audio context banao mixing ke liye
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const destination = audioContext.createMediaStreamDestination();

  // Original audio ko speakers pe bhi bhejo
  source.connect(audioContext.destination); // Ye speakers ke liye
  source.connect(destination); // Ye recording ke liye

  // Recording destination stream se karo
  mediaRecorder = new MediaRecorder(destination.stream);
  recordedChunks = [];

  mediaRecorder.ondataavailable = (e) => {
    recordedChunks.push(e.data);
  };

  mediaRecorder.onstop = async (e) => {
    let blob = new Blob(recordedChunks, { type: "audio/webm" });
    let url = window.URL.createObjectURL(blob);

    // Audio element mein set kar aur play kar
    let audioElement = document.querySelector(".link");
    audioElement.src = url;
    audioElement.controls = true;
    audioElement.play();

    document.querySelector(".userPermission").textContent =
      "Recording complete! Playing recorded audio...";

    // Backend call
    let formData = new FormData()
    
    formData.append("file", blob, "recording.mp3");

    fetch("http://localhost:5000/getData" , {
        method:"post",
        body:formData
    })
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
      console.log("Server response:", result);
      ContentArea.textContent = result.msg;
    })

  };

  mediaRecorder.start();
}

document.querySelector(".stopRecord").addEventListener("click", () => {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
});
