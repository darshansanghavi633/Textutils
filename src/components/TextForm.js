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
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color:  props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Click to Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Text Sumary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
        <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)}Minutes read time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
