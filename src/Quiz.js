import React from "react";
import Category from "./Category";
import Question from "./Question";
import Confetti from "react-confetti"

export default function Quiz(props){

    const [submit,setSubmit] = React.useState(false)

    const[score,setScore] = React.useState(0);

    React.useEffect(()=>setScore(0),[props.newGame])

    const questionsList = props.questions ? props.questions.map(function(q){
        return(
            
        <div>
        <Question
            correctSlot ={Math.floor(Math.random()*4)}
            question={q.question}
            category={q.category}
            correct ={q.correct_answer}
            incorrect = {q.incorrect_answers}
            quizTime={props.quizTime}
            submit={submit}
            score={incrementScore}
            newGame={props.newGame}
        />
            <hr/>
            </div>)}) : ""
            
        
    function handleSubmit(){
        setSubmit(true);
    }

    function incrementScore(){
        console.log("hellp")
        setScore((x)=>x+1);
        console.log(score+" scoreCheck")
        
    }

    const shiftLeft ={
        marginRight: submit? "20%" :"0"
       
    };

    function resetQ(){
        setSubmit(false);
        console.log(submit + "submit State")
        props.playAgain();
    }

    
    

    return(


    <div className="Quiz">
        {submit && score>=4 && <Confetti/>}
        <div className="leftCircles"></div>
        <div className="rightCircles"></div>
        <div className="bottomRightCircle"></div>

        <img className="back" src="./images/back.png" onClick={props.flip}/>

    <div className="questions">
        {submit&&score>=4&&<Confetti/>}
        {questionsList}
        {submit&&score>=4&&<Confetti/>}
        <div className="ending" style={shiftLeft}>
            <button className="submit" onClick={submit? resetQ:handleSubmit} submit={submit}>{submit? "Play Again":"Submit"}</button>
            {submit? <h2>You got {score}/10 answers correct</h2>: <p></p>}
        </div>
    </div>
    
    </div>)
    
}