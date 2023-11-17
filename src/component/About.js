import React,{useState} from 'react'

export default function About(props) {
const [feed , setfeed] = useState("");
const handlefeed =(e)=>{
setfeed(e.target.value)
}

const [myStyle,setMyStyle] = useState({
    color :"black",
    backgroundColor :"white"
})

const [btnText , setBtnText] = useState("Enable Dark Mode")

const handledarkMode =() =>{
    if(myStyle.color=== "black"){
    setMyStyle({
        color :"white",
        backgroundColor :"black",
        border : "2px solid yellow"
        
    })
  setBtnText("Enable Light Mode")
  }
    else{
      setBtnText("Enable Dark Mode")
      setMyStyle({
            color :"black",
            backgroundColor :"white"
        })
      
    }


}


const handlefeedback =(event)=>{
  event.preventDefault()
  props.showAlert(  "Thanks for your Feedback","success");
  setfeed("")
}
return (
    <div style={myStyle} >
        <div   className="accordion my-4" id="accordionExample">
  <div style={myStyle} className="accordion-item">
    <h2  className="accordion-header" id="headingOne">
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      TextUtil 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>This is the website which can make your work easy in one click</strong>
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Updates Comming Soon
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
  <strong>I am going to bring more updates & features. </strong> Coming Soon...

      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Feedback
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <form >
        <input onChange={handlefeed} value={feed} type='text'></input>
        <button onClick={handlefeedback} className='mx-2' type='submit'> Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div className='container'></div>
  <button onClick={handledarkMode} type='button' className='btn btn-primary my-3'>{btnText}</button>
</div>
    </div>
  )
}
