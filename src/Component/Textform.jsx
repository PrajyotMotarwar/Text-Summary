import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Convert to Uppercase', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Convert to Lowercase', 'success');
    }

    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert('Clear Text', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copy Text', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Remove Extra Space', 'success');
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="4"></textarea>
                </div>
                <button disable={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disable={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disable={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleClearClick}>Clear Click</button>
                <button disable={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleCopyClick}>Copy</button>
                <button disable={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!=0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
        </>
    )
}
