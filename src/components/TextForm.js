import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnClear = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");

    } 
    
    const handleOnCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");

    } 
    const handleExtraSpaces = () => {
        let newtext  = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra spaces!", "success");

    } 
    

    const [text, setText] = useState("")
    return (
        <>
        <div className = "container" style = {{color : props.mode === 'light' ? '#212529':'white' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'light' ? 'white':'#212529', color : props.mode === 'light' ? '#212529':'white' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleOnClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleOnCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Handle Extra Spaces</button>
            
        </div>
        <div className="container my-4" style = {{color : props.mode === 'light' ? '#212529':'white' }}>
            <h1>Your text summary</h1>
            <p>{text.charAt(text.length -1) === " "  || text.length === 0 ? text.split(" ").length -1 : text.split(" ").length } word(s) and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length === 0 ? "Enter something in the textbox above to preview it here" : text }</p>
        </div>
        </>
    )
}
