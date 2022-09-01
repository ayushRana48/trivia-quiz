import React from "react";
import Answer from "./Answer";

export default function Question(props){

    const [selected, setSelected] = React.useState(-1);
    const[correctSlot,setCorrectSlot]=React.useState(-1)


    React.useEffect(()=>{
        
    setCorrectSlot(Math.floor(Math.random()*4))
    setSelected(-1)},[props.newGame])

    //React.useEffect(test,[props.submit])





    const s=5

    let arr=props.incorrect
    //const correctSlot= Math.floor(Math.random()*4)

    const correct=props.correct
    // console.log("before")
    // console.log(arr)



    //arr.push(props.correct)

    //console.log(arr)

    function handleClick(x){
        setSelected(x)
    
    }

    function test(){
        props.score()
        console.log("test Score")
    }

    let buttons = arr.map(x=> {
        if(x===props.correct){
           // return <button className="correct" id="correct"><div dangerouslySetInnerHTML={{__html: x}}/></button>
           return <Answer click={()=>handleClick(x)} selected={selected}  className="correct" submit={props.submit} text={x} correct={true}></Answer>
        }
        else{
            return <Answer click={()=>handleClick(x)} selected={selected} className="incorrect" submit={props.submit} text={x} correct={false} score={test} newGame={props.newGame}></Answer>
        }
    })
    //toggle ={toggle}

    //const x=buttons.pop();

    const correctButton = 
    <Answer click={()=>handleClick(correct)} selected={selected}  className="correct" submit={props.submit} text={correct} correct={true} score={test} newGame={props.newGame}></Answer>

    buttons.splice(correctSlot,0,correctButton);


   


    // console.log(correctSlot+ "slot" )sdsd
    // // console.log(correct + "correct")
    // //arr.splice(correctSlot,0,correct)
    // React.useEffect(()=>{arr.splice(2,0,"abs")},[])
    // console.log("after")
    // console.log(arr)
    // //arr.splice(correctSlot,0,correct)
    

    let question=props.question;

    



    return(
    <div className="question">
        <h1><div className="question2" dangerouslySetInnerHTML={{__html: question}}/></h1>
        <div className="answers">
            {/* <button className="a1">{arr[0]} 1</button>
            <button className="a2">{arr[1]} 2</button>
            <button className="a3">{arr[2]} 3</button>
            <button className="a4">{arr[3]} 4</button> */}
                  
            {buttons}

            {/* <p>{correctSlot}</p>
            <p>{props.correct}</p> */}
        </div>
    </div>)
    
}