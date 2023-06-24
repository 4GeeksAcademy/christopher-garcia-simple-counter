//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import PropType from "prop-types"



// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components



const SimpleCounter = (props)=>{
    return(
        <div className="Counter">
            <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
            <div className="four">{props.countFour%10}</div>
            <div className="three">{props.countThree%10}</div>
            <div className="two">{props.countTwo%10}</div>
            <div className="one">{props.countOne%10}</div>
        </div>
    )
}

 SimpleCounter.propTypes = {
   countOne: PropType.number,
   countTwo: PropType.number,
   countThree: PropType.number,
   countFour: PropType.number
}

let counter = 0
//render your react application
setInterval(function(){
   const four = Math.floor(counter/1000)
   const three = Math.floor(counter/100)
   const two = Math.floor(counter/10)
   const one = Math.floor(counter/1)
   counter++
   console.log(one, two, three, four);

   ReactDOM.render(<SimpleCounter countOne={one} countTwo={two} countThree={three} countFour={four}/>, document.querySelector("#app"));

},1000) 
