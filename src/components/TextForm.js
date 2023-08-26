import React, { useState } from "react";

// console.log(useState('Enter text here2'))

export default function TextForm(props) {
    const heandelupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        // setTextup(newtext)
        props.showAlert("Converted to Uppercase !", "success")
    };
    const heandellowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        // setTextlc(newtext)
        props.showAlert("Converted to Lowercase !", "success")
    };
    const heandellclearclick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert(" All Text Clear !", "success")
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };
    const HeandelonChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    // const [textup, setTextup] = useState();
    // const [textlc, setTextlc] = useState();

    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HeandelonChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"
                    ></textarea>
                    {/* <textarea className="form-control" value={textup} onChange={HeandelonChange} id="exampleFormControlTextarea" rows="4"></textarea>
                <textarea className="form-control" value={textlc} onChange={HeandelonChange} id="exampleFormControlTextarea" rows="4"></textarea> */}
                </div>
                <button className="btn btn-primary mx-1" onClick={heandelupclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={heandellowclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={heandellclearclick}>Clear all</button>
                <button className="btn btn-primary mx-1" type="submit" onClick={speak} >Speak</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Text Summery</h1>
                <p> {text.split(" ").length} word And {text.length} character</p>
                <p> Need {0.008 * text.split(" ").length} Minutes to Read</p>
            </div>
        </>
    );
}
