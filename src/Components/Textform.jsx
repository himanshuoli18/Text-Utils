import React, { useState } from 'react'

function Textform(props) {
    // Convert to Lowercase
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // Covert to Uppercase
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // Clear Text
    const handleClearClick = () => {
        let newText = ''
        setText(newText);
    }

    // Copy Text to clipboard
    const handleCopyClick = () => {
        let copyText = document.getElementById('floatingTextarea')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
    }

    // Speak
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

    // Convert to Titlecase
    const handleTitleCaseClick = () => {
        let paragraphs = text.split('\n');
        for (let i = 0; i < paragraphs.length; i++) {
            let words = paragraphs[i].toLowerCase().split(/[\s]/);
            for (let j = 0; j < words.length; j++) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
            }
            paragraphs[i] = words.join(' ');
        }
        setText(paragraphs.join('\n'));
    }
    
    // Showing change on textarea whenever click encounters
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState('');

    // Summary Section
    const getSummary = () => {
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        const paragraphs = text.split('\n').filter(Boolean).length;

        return {
            characters: text.length,
            words: words,
            paragraphs: paragraphs,
        };
    };

    const summary = getSummary();
    
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'light':'dark'}}>
            <div className="form-floating">
                <textarea className="form-control my-3" rows="20" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea" style={{backgroundColor:props.mode==='light'?'white':'#495057', color: props.mode==='light'?'black':'white',height:'250px'}}></textarea>
                <label htmlFor="floatingTextarea">{props.textboxText}</label>
            </div>
            <button type="button" onClick={handleLowerCaseClick} className={`btn btn-${props.btnColor} my-2 mx-2`} aria-label="Lowercase">Lowercase</button>
            <button type="button" onClick={handleUpperCaseClick} className={`btn btn-${props.btnColor} my-2 mx-2`} aria-label="Uppercase">Uppercase</button>
            <button type="button" onClick={handleTitleCaseClick} className={`btn btn-${props.btnColor} my-2 mx-2`} aria-label="Copy Text">Titlecase</button>
            <button type="button" onClick={handleClearClick} className={`btn btn-${props.btnColor} my-2 mx-2`} aria-label="Clear Text">Clear Text</button>
            <button type="button" onClick={handleCopyClick} className={`btn btn-${props.btnColor} my-2 mx-2`} aria-label="Copy Text">Copy Text</button>
            <button type="button" onClick={handleSpeak} className={`btn btn-${props.btnColor} my-2 mx-2`} aria-label="Copy Text">Speak</button>
            <div style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{summary.characters} - Characters</p>
                <p>{summary.words} - Words</p>
                <p>{summary.paragraphs} - Paragraphs</p>
                <h2>Preview</h2>
                <p>{text.trim().length>0?text:'Enter something in above textbox to preview it here.'}</p>
            </div>
        </div>
        </>
    )
}

export default Textform
