import React from 'react'

export default function Contact(props) {
    return (
        <>
       <form >
        <div className="container" >
       <div className={`mb-3  text-${props.mode==='dark'?'light':'dark'}`}>
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className={`form-control bg-${props.mode==='dark'?'dark':'light'}`} style={{ color:props.mode==='light'?"black":"white"}} id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>
       <div className={`mb-3  text-${props.mode==='dark'?'light':'dark'}`}>
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className={`form-control bg-${props.mode==='dark'?'dark':'light'}`} style={{color:props.mode==='light'?"black":"white"}} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
       <div className={`mb-3  text-${props.mode==='dark'?'light':'dark'}`}>
  <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className={`form-control bg-${props.mode==='dark'?'dark':'light'}`} style={{color:props.mode==='light'?"black":"white"}} id="exampleFormControlTextarea1" rows="7" placeholder="Enter your message."></textarea>
</div>
<button className={`btn btn-${props.mode==="light"?"dark":"success"}`}>Submit</button>
       </div>
        </form>
     </>
    )
}
