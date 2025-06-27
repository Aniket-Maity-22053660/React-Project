import {useState} from "react"

export default function InputComponent(){
    const [inputText, setText] = useState('Hello');
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <div>
            <div><h2>{inputText}</h2></div>
            <input type="text" value={inputText} onChange={handleChange}/>
            <button onClick={()=>{setText('Hello')}}>Reset</button>
        </div>
    )
}