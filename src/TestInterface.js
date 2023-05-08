import React,{useState,useEffect} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import QuestionsArr from './Questions'
import {Name} from './App'
import CountdownTimer from './CountDown'



export default function TestInterface() {

  useEffect(() => {
    const element = document.getElementById("TestScreen");
    element.requestFullscreen();

    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement === element) {
        console.log("Entered full-screen mode.");
      } else {
        console.log("Exited full-screen mode.");
      }
    });

    return () => {
      document.removeEventListener("fullscreenchange", () => {});
      document.exitFullscreen();
    }
  }, []);


  let [Mark,setMark]=useState(0)
  let [qno,setqno]=useState(0) // To manage the question
  let [TimerANDTestON,setTimerANDTestON] = useState(false)  //to end the test after the time

  let [BtnDisabled,setBtnDisabled]=useState([false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]) //Button Map Disabled Values



  let [SelectedAnswers,setSelectedAnswers]=useState([]);

  // let [Qmap,setQmap] = useState(true)




  let TestDuration=20*60*1000 //20min x 60sec x 1000ms = 12,00,000 ms

  let testTime=setTimeout(()=>{

    let CalculateMarks=0;
    QuestionsArr.forEach((ele, index)=>{
      if(ele.Answer === SelectedAnswers[index])
      {
        CalculateMarks++
      }
    })
    setMark(CalculateMarks);
    setTimerANDTestON(true);
    clearTimeout(testTime);

  },testTime)



  function HandleSelection(MyAnswer,Qno)
  {
    let TempSelectedAnswers = [...SelectedAnswers];
    TempSelectedAnswers[Qno]=MyAnswer;
    setSelectedAnswers(TempSelectedAnswers);
  }

  function nextquestion(qnoforbtn)
  { 
    let TempActiveQuestion=[NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive]

    TempActiveQuestion[qnoforbtn+1]=YesActive;
    setActiveQuestion(TempActiveQuestion);

    let TempArr=[...BtnDisabled]
    TempArr[qnoforbtn+1]=false;
    setBtnDisabled(TempArr);
    setqno(qno+1)
  }


  function prevquestion()
  {
    let TempActiveQuestion=[NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive]

    TempActiveQuestion[qno-1]=YesActive;
    setActiveQuestion(TempActiveQuestion);

    setqno(qno-1)
  }

  // travel through the active questions
  function goto(num)
  {  
    let TempActiveQuestion=[NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive]

    TempActiveQuestion[num]=YesActive;
    setActiveQuestion(TempActiveQuestion);

    setqno(num)
  }


  const YesActive = {
    color: 'black',
    border: '2px solid rgb(0, 214, 135)',
    transform: 'scale(1.5)'
  };
  const NotActive = {
    // color: 'black',
    // border: '1px solid rgb(79, 211, 167)'
  };

  const Answered=
  {
    backgroundColor: "#00ff00",
    color: "#fff"
  }
  const AnsweredActie=
  {
    backgroundColor: "#00ff00",
    color: "#fff",
    transform: 'scale(1.5)'
  }


  let [ActiveQuestion,setActiveQuestion]=useState([YesActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive,NotActive]) //Active Question CSS


  // to Display the question

  //style={{ backgroundColor: "#fff" }}

  function Questions()
  {
    return(
  <React.Fragment >
    <div id="TestScreen" style={{ backgroundColor: "#fff" }}>
    <div id="Interface_Top"> 
      <div><h2 className="Pagecolor1"><span className="Pagecolor">Just</span>est.<span className="Pagecolor">IN</span></h2></div>
      <div><h4>Name : {Name}</h4><h3>Time Remaining: <CountdownTimer/></h3></div>
    </div>

      <div id="Qpartandmap" >
      
        <div id="map">

          <div id="buttonsContainer">
            {/* <button disabled={BtnDisabled[0]} onClick={()=>goto(0)} style={ActiveQuestion[0]}>1</button>
            <button disabled={BtnDisabled[1]} onClick={()=>goto(1)} style={ActiveQuestion[1]} > 2 </button>
            <button disabled={BtnDisabled[2]} onClick={()=>goto(2)} style={ActiveQuestion[2]} > 3 </button>
            <button disabled={BtnDisabled[3]} onClick={()=>goto(3)} style={ActiveQuestion[3]} > 4 </button>
            <button disabled={BtnDisabled[4]} onClick={()=>goto(4)} style={ActiveQuestion[4]} > 5 </button>
            <button disabled={BtnDisabled[5]} onClick={()=>goto(5)} style={ActiveQuestion[5]} > 6 </button>
            <button disabled={BtnDisabled[6]} onClick={()=>goto(6)} style={ActiveQuestion[6]} > 7 </button>
            <button disabled={BtnDisabled[7]} onClick={()=>goto(7)} style={ActiveQuestion[7]} > 8 </button>
            <button disabled={BtnDisabled[8]} onClick={()=>goto(8)} style={ActiveQuestion[8]} > 9 </button>
            <button disabled={BtnDisabled[9]} onClick={()=>goto(9)} style={ActiveQuestion[9]}> 10 </button>
            <button disabled={BtnDisabled[10]} onClick={()=>goto(10)} style={ActiveQuestion[10]}> 11 </button>
            <button disabled={BtnDisabled[11]} onClick={()=>goto(11)} style={ActiveQuestion[11]}> 12 </button>
            <button disabled={BtnDisabled[12]} onClick={()=>goto(12)} style={ActiveQuestion[12]}> 13 </button>
            <button disabled={BtnDisabled[13]} onClick={()=>goto(13)} style={ActiveQuestion[13]}> 14 </button>
            <button disabled={BtnDisabled[14]} onClick={()=>goto(14)} style={ActiveQuestion[14]}> 15 </button>
            <button disabled={BtnDisabled[15]} onClick={()=>goto(15)} style={ActiveQuestion[15]}> 16 </button>
            <button disabled={BtnDisabled[16]} onClick={()=>goto(16)} style={ActiveQuestion[16]}> 17 </button>
            <button disabled={BtnDisabled[17]} onClick={()=>goto(17)} style={ActiveQuestion[17]}> 18 </button>
            <button disabled={BtnDisabled[18]} onClick={()=>goto(18)} style={ActiveQuestion[18]}> 19 </button>
            <button disabled={BtnDisabled[19]} onClick={()=>goto(19)} style={ActiveQuestion[19]}> 20 </button> */}

            {/* Dynamic Button Creation */}
            
            {QuestionsArr.map((ele,index)=>{
              return(
              <button disabled={BtnDisabled[index]} onClick={()=>goto(index)} 
              style={SelectedAnswers[index] !== undefined ? (qno===index? AnsweredActie:Answered)
              : ActiveQuestion[index]}> {index+1} </button> 
              )
            })}
          </div>
          <button onClick={SubmitTest} id="leftsideSubmit"> Submit </button>

          <div id="ColorInstruction">
            <div>
            <div id="Answered"></div>
            <span>Answered</span>
            </div>

            <div>
            <div id="Visited"></div>
            <span>Visited</span>
            </div>

            <div>
            <div id="NotVisited"></div>
            <span>NotVisited</span>
            </div>

          </div>


        </div>

        <div id="Qpart">
          <div>

          <p>{qno+1}. {QuestionsArr[qno].question}</p>
          <div className="optionscontainer">
          {QuestionsArr[qno].options.map((Option,index)=>{

            return(
              <div key={index}>
              <label>
              <input type="radio"  name="Options" value={Option} checked={SelectedAnswers[qno]===Option} onChange={()=>HandleSelection(Option,qno)}/>
              <span id="option-text">{Option}</span>
              </label>
              </div>
              )

          })}
          </div>

          <div id="PreNextbuttonscontainer">
          {qno>0 ? (<button onClick={prevquestion}>&#10096;&#10096;  Prev</button>):(<button id="discur" disabled="true" onClick={()=>goto(1)}>&#10096;&#10096;  Prev</button>)}
          {qno==QuestionsArr.length-1 ? (<button onClick={SubmitTest}>Submit</button>):''}
          {qno<QuestionsArr.length-1 ? (<button onClick={()=>nextquestion(qno)}>Next  &#10097;&#10097;</button>):(<button disabled="true" id="discur">Next  &#10097;&#10097;</button>)}
          </div>


          </div>
        </div>

      </div>
      </div>

    </React.Fragment>)
  }


  function SubmitTest()
  {
    if (confirm("Are you sure you want to Submit the Test?", "Yes", "No")) 
    {

      let CalculateMarks=0;
      QuestionsArr.forEach((ele, index)=>{
        if(ele.Answer === SelectedAnswers[index])
        {
          CalculateMarks++
        }
      })
      setMark(CalculateMarks);
      setTimerANDTestON(true);

    } 
    else 
    {
      console.log("Cancelled, Continue Test")
    }
  }
  // To display the result at submit button or after time runs out
  function Result()
  {
    return(
      <>
     <h1>Mr/Ms. {Name},  Your Result is Ready...</h1>
     <h3>You Attempted {SelectedAnswers.length} out of {QuestionsArr.length} Questions</h3>
     <h3>Your Marks : {Mark}/{QuestionsArr.length}</h3>
     <h3>Percentage : {(Mark/QuestionsArr.length)*100}%</h3>
     <h4>Thank You!</h4>
      </>
    )
  }


  return(
    <div>
      {TimerANDTestON?Result():Questions()} 
    </div>
  )

}
