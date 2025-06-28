import {useState, useRef} from "react"

export default function InputComponent(){
    const [inputText, setText] = useState('Hello');
    const userInput = useRef('King');
    function handleChange(e){
        setText(userInput.current.value);
    }
    return(
        <div>
            <div><h2>{inputText}</h2></div>
            <input type="text" ref={userInput} value={inputText} onChange={handleChange}/>
            <button onClick={()=>{setText('Hello')}}>Reset</button>
        </div>
    )
}