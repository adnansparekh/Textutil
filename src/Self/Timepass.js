import React,{ useState} from 'react'

export default function Timepass() {
  
  const arr = [
    {
      name :"adnan" ,
  },
  {

    name :"amair" ,
  
  },
  {

    name :"danish" ,
  },
  { name :"abid" ,
}
    ];


  const[name , setname] =useState({
    id:"",
    firstName : "",
    lastname:""

  })


              

  const handlenames =(e)=>{
setname( {...name ,
  id :name.length,
firstName :e.target.value

})    
console.log(name)

}


  const handleLast = (e)=>{
    setname({...name , 
      id : name.length , 
      lastname : e.target.value
    })
    console.log(name.firstName , name.lastname)
  }

const[time , setTime] = useState({
  date: "",
    hours: "",
    minute: "",
     second: "",  //if we r not declaring then also can declare & initialize the key & value

})


  // date
  const dateFunction = ()=>{
    let newdate = new Date();
    console.log(newdate);
    let dates = newdate.getDate();

    let hours =  newdate.getHours();
    let minute = newdate.getMinutes()
    let  sec  =  newdate.getSeconds();
    

setTime({...time , date : dates , hours : hours , minute : minute , second : sec })

showTime();

  } 


   const showTime =() =>{
  return( <div> 
    <span>Today is: {time.date}<span style={{fontSize:"0.8em"}}>st</span></span> 

    <span> Time : {time.hours}</span>
    <span> {time.minute}</span>
    <span> {time.second}</span>
  </div>
  )
  }



    return (
    <div>
      <form>
            <input onChange={handlenames} type='text'  defaultValue={name.firstName}/>
        <input onChange={handleLast} type="text" defaultValue={name.lastname} />
        <input type='file' placeholder='like'/>
     
     
      <div>{name.firstName}</div>
      <div>{name.lastname}</div>

      
        <select>
        <option></option>
            
   {arr.map((opt, index)=>{
    return<option key={index}>{opt.name}</option>

   })}       
        </select>

     

<button type='submit' >send</button>
</form>
        
   <input type='date' />
   <div>
   <label >below date function</label>
   <button onClick={dateFunction}>want date</button>
   </div>

{/* {showTime()} */}



    </div>
  )
}

