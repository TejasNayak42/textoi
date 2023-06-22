import React, { useState,useRef,useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Form() {
  const textareaRef = useRef(null);
  const [text, setText] = useState('');
  const [isMicrophonePermissionGranted, setMicrophonePermissionGranted] = useState(false);
  const [isRecording, setRecording] = useState(false);


  const handleUP = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSC = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    const sentenceRegex = /\.\s*(\w)/g;
    newText = newText.replace(sentenceRegex, (match, letter) =>
      match.replace(letter, letter.toUpperCase())
    );
    setText(newText);
  };

  const handleCopy = () => {
    const textArea = textareaRef.current;
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand('copy');  };

  const handleClear = () => {
    let newText = '';
    setText(newText);
  };

  const handleExtraSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };


const commands = [
  {
    command: 'clear',
    callback: () => setText(''),
  },
];

const {
  transcript
} = useSpeechRecognition({ commands });

useEffect(() => {
  if (transcript) {
    setText(transcript);
  }
}, [transcript]);


const askForMicrophonePermission = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    setMicrophonePermissionGranted(true);
    SpeechRecognition.startListening();
    window.alert('Recording started!');
    setRecording(true);
  } catch (error) {
    console.error('Error accessing microphone:', error);
  }
};

const handleTextToSpeech = () => {
  if (isRecording) {
    SpeechRecognition.stopListening();
    window.alert('Recording stopped!');
    setRecording(false);
  } else if (!isMicrophonePermissionGranted) {
    askForMicrophonePermission();
  } else {
    SpeechRecognition.startListening();
    window.alert('Recording started!');
    setRecording(true);
  }
};
  const onHandled = (event) => {
    setText(event.target.value);
  };

  return (
      <>

      <div className="  textform mt-5 ml-7">
        <h2 className='font-semibold 
        max-[398px]:ml-4 mb-1'>Enter text below :</h2>
        <textarea className=" w-[90%] ml-1 border-[2px] border-black rounded-md md:ml-16  " 
                  ref={textareaRef} 
                  value={text}
                  onChange={onHandled} 
                  cols="35" rows="6"
        ></textarea>
      </div>
      < div className="buttons flex 
      max-[398px]:flex-col 
      min-[399px]:flex-row justify-evenly  flex-wrap mt-3">
      <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
          max-[398px]:hidden
          md: ml-7  '
          onClick={handleTextToSpeech}
        >
          {/* {SpeechRecognition.startListening} */}
          Text to speech
        </button> 

        <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
          max-[398px]:mt-2 mx-8 
          min-[399px]:  '
          onClick={handleUP}
        >
          UpperCase
        </button>

        <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
          max-[398px]:mt-2 mx-8
          min-[399px]: '
          onClick={handleLow}
        >
          LowerCase
        </button>
      {/* </div> */}
        <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
          max-[398px]:mt-2 mx-8
          min-[399px]: '
          onClick={handleExtraSpace}
        >
          RemoveExtraSpaces
        </button>

        <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
          max-[398px]:mt-2 mx-8
          min-[399px]: '
          onClick={handleSC}
        >
          SentenceCase
        </button>
      {/* </div> */}
        <div className="buttons2 flex flex-wrap max-[398px]:flex-col min-[399px]:flex-row justify-center ">
          <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
            max-[398px]:mt-1 mx-8
            min-[399px]: '
            onClick={handleCopy}
          >
            CopyToClipboard
          </button>

          <button className='bg-zinc-950 text-white p-1 rounded-[0.18rem]
            max-[398px]:mt-2 mx-8
            min-[399px]:  '
            onClick={handleClear}
          >
            ClearText
          </button>
        </div>
       
      </div>
      <hr className='max-[398px]:mt-2 border min-[399px]:mt-6 mb-6'/>
        <div className="summarycontainer 
          max-[398px]:mt-2 flex justify-center flex-col items-center
          min-[399px]: ">
            <h2 className='font-bold '>Summary</h2>
        <p>
          {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters.
        </p>
        <p>Time taken to read: {text.trim() === '' ? 0 : 0.004 * text.trim().split(/\s+/).length} mins</p>
        <p>{text.length > 0 ? text : 'Enter text above to preview here'}</p>
        </div>
      </>
    )
}
