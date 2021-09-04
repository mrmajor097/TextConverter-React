import React , {useState} from 'react'

export default function ContactForm(props) {
    const [text , setText]=useState("");
    const HandleOnChange = (event)=>{
        setText(event.target.value);
    }
    const HandleUpClick = ()=>{
        let upText=text.toUpperCase();
        setText(upText);
        props.showalert("Successfully converted to UpperCase.","success");
        
    }
    const HandleLoClick = ()=>{
        let loText=text.toLowerCase();
        setText(loText);
        props.showalert("Successfully converted to LowerCase.","success");
    }
    const HandleclearClick = ()=>{
        let loText=("");
        setText(loText);
        props.showalert("Successfully cleared.","success");
    }
    const HandleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Successfully copied.","success");
    }
    const Handlespaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Successfully removed extra spaces.","success");
     }
    
    return (
        <>
        <div>
        <div className="mb-3 px-5">
        <h1 className={`m-3 text-${props.mode==='dark'?'light':'dark'}`}>{props.contacth1}</h1>
        <textarea value={text} onChange={HandleOnChange} className="form-control" style={{backgroundColor:props.mode==='dark'?'#02355a':'White' ,color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea11" rows="10" placeholder="Enter Your Text Here."></textarea>
        <button type="submit" onClick={HandleUpClick} className={`btn btn-success m-3 ${text.length>0?" ":" disabled"}`}>Convert To UpperCase</button>
        <button type="submit" onClick={HandleLoClick} className={`btn btn-success m-3 ${text.length>0?" ":" disabled"}`}>Convert To LowerCase</button>
        <button type="submit" onClick={Handlespaces} className={`btn btn-success m-3 ${text.length>0?" ":" disabled"}`}>Remove Extra Spaces</button>
        <button type="submit" onClick={HandleCopy} className={`btn btn-info m-3 ${text.length>0?" ":" disabled"}`}>Copy </button>
        <button type="submit" onClick={HandleclearClick} className={`btn btn-danger m-3 ${text.length>0?" ":" disabled"}`}>Clear</button>
        </div>
        </div>
        <div className="container">

        </div>
        <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
            <h5>You Text Info</h5>
            <p>Your Text Words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Charachters are {text.length}</p>
            
         
            {text.length>0?<h6>You Can Read the text in : <strong>{0.008 * text.trim().replace(/  +/g, " ").split(" ").length} Minutes</strong></h6>:<h6>0 Minute read</h6>}
            <br/>
          
            
        </div>
        </>
    )
}
