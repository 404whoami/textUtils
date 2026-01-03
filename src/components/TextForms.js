import React, {useState} from 'react'


export default function TextForms(props) {
  //For upper case
  const handleUpClick =()=>{
    // console.log("uppercase ws clicked" + text);
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  //For lowercase
  const handleLowClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  //Clear text
  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
    
  }

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
  }

  //for  text, forms we have to use this IMPORTANT
  const handleOnChange =(event)=>{
    // console.log("on change")
    setText(event.target.value);
  }
  
  //Default state of text box
  const[text, setText] =useState('hoye');
  
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#0e2e47ff'}} >
        <div className="form-group">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea id="mybox" className="form-control" onChange={handleOnChange} value={text} style={{resize:"none",height:"200px", backgroundColor: props.mode==='dark'?'#313537ff':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
          </div>
          <small id="formHelp" className="form-text text-muted">Enter text we will analyze.</small>
        </div>
        <button disbled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disbled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disbled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disbled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#575a5cff'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  )
}
