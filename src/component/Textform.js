import React,{useState} from 'react';

export default function Textform(props) {

const handleUpClick =() =>{
    props.showAlert("Text has been converted to UpperCase" , "success");
let newtext = text.toUpperCase() ;
setText(newtext);

}

const handleLcase =() =>{
    props.showAlert("Text has been converted to LowerCase" , "success")
    let newText = text.toLowerCase();
    setText(newText)
}

const handleSpeak =() =>{
    props.showAlert("  You can here your text " , "success")

const speech = new SpeechSynthesisUtterance(text);
const voices = speechSynthesis.getVoices();
speech.voice = voices.find((voc)=> voc.name ==="Google हिन्दी")
// speech.voice = voices.find((voc)=> voc.name ==="Microsoft Zira")

speechSynthesis.speak(speech);
}

const handlespace =() =>{
      props.showAlert("Extra spaces has been removed","success")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}


const handlesComma =()=>{
   let word = text.split(" ");
   
   word.map((ele)=>{
    console.log(word+",")
    setText(ele +", ")
   
})
}
const handleOnchange =(event) =>{

    setText(event.target.value)


}

const [text , setText] = useState("");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea  value={text}  onChange={handleOnchange} className="form-control" id="mybox" rows="8" ></textarea>
</div>
 <button onClick={handleUpClick} className='btn btn-primary mx-2 my-2'>Uppercase</button>
 <button onClick={handleLcase} className= "btn btn-primary mx-2 my-2"  >Lowercase</button>
 <button onClick={handleSpeak} className='btn btn-primary mx-2 my-2'>Speak</button>
 <button onClick={handlespace} className= "btn btn-primary mx-2 my-2" >Remove Extra Spaces</button>
 {/* <button onClick={handlesComma} className= "btn btn-primary mx-2 my-2" >Add Comma</button> */}


    </div>
   
<div className='container my-3'>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} Words  & {text.length} Characters</p>
    <p>{0.008* text.split(" ").length} Minutes requires to read this words</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter Text Above to Preview here "}</p>

</div>
    </>
  )
}
