import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleOnChange =(event) => {
        // console.log("On change");
        setText(event.target.value);

    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!","success");
    }
    const handleCopyText = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!","success");
    }
    const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const [text, setText]=useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>Enter the text to analyze</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color:  props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Click to Clear</button>
        <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Text Sumarry</h2>
        <p>{text.split(" ").length-1}words and {text.length}characters</p>
        <p>{0.008 * (text.split(" ").length-1)}Minutes read time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to  preview it"}</p>
    </div>
    </>
  )
}
