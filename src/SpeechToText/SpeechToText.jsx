import React, { useState } from 'react';
import './style.css';
 
const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [fullTranscript, setFullTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const startListening = () => {
    setIsListening(true);
 
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
 
    recognition.onresult = event => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          setTranscript(event.results[i][0].transcript);
          setFullTranscript(prevTranscript => prevTranscript + event.results[i][0].transcript + ' ');
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };
 
    recognition.onerror = event => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };
 
    recognition.onend = () => {
      setIsListening(false);
    };
 
    recognition.start();
  };
 
  const stopListening = () => {
    setIsListening(false);
  };

  async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Falconsai/text_summarization",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
 const handleSummary = () => {
    query({"inputs": fullTranscript}).then((response) => {
        console.log(JSON.stringify(response));
        setSummary(response.summary_text);
    });
 };
  return (
<div className="container">
<h1 className="title">Speech To Text</h1>
<button onClick={isListening ? stopListening : startListening} className={`listen-button ${isListening ? 'listening' : ''}`}>
        {isListening ? 'Listening...' : 'Start Listening'}
</button>
<div className="transcript-container">
<textarea value={fullTranscript} rows="5" cols="50" readOnly className="transcript" />
<button onClick={handleSummary}>Summarize text</button>
<p>{summary}</p>
</div>
</div>
  );
};
 
export default SpeechToText;