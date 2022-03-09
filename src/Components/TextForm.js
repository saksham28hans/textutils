import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange  = (event) =>{
           setText(event.target.value);
    }
    const handleUpClick  = () =>{
           let upCase = text.toUpperCase();
           setText(upCase);
           props.showAlert("Text is converted to UpperCase","success");
    }
    const handleLoClick  = () =>{
        let loCase = text.toLowerCase();
        setText(loCase);
        props.showAlert("Text is converted to LowerCase","success");
 }
 const handleClearClick  = () =>{
    setText("");
    props.showAlert("Text is cleared","success");
}
    return (
        <>
        <div className="container">
        <div>
           <h1 style={ {color: props.disp ==='light'?'black':'white'} }>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" style={ {color: props.disp ==='light'?'black':'white', backgroundColor :props.disp ==='light'?'white':'black' } }></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick ={handleUpClick}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick ={handleLoClick}>Convert To Lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick ={handleClearClick}>Clear Text</button>
        </div>
        </div>
        <div className="container my-3">
            <h2 style={ {color: props.disp ==='light'?'black':'white'} }>Your Text Summary</h2>
            <p style={ {color: props.disp ==='light'?'black':'white'} }><b>{text.split(" ").length} Words {text.length} Characters</b></p>
            <p style={ {color: props.disp ==='light'?'black':'white'} }>{0.008 *text.split(" ").length} Minutes Read</p>
            <h2 style={ {color: props.disp ==='light'?'black':'white'} }>Preview</h2>
            <p style={ {color: props.disp ==='light'?'black':'white'} }>{text.length>0?text:"Enter some text in the above given box to preview"}</p>
        </div>
        </>
    );
}

