import logo from './logo.svg';
import Intro from './Intro';
import React from 'react';
import Quiz from './Quiz';
import Category from './Category';

function App() {
  const[quizTime,setQuizTime]=React.useState(false);
  const[questions,setQuestions]=React.useState([]);
  const[catNum,setCatNum]=React.useState("0");
  const[playAgain,setPlayAgain]=React.useState(5);



  React.useEffect(() => {
    console.log("change")
    fetch("https://opentdb.com/api.php?amount=10&category=" + catNum + "&type=multiple" + "&difficulty=easy")
        .then(res => res.json())
        .then(data => setQuestions(data.results))}
        , [catNum,playAgain])


  function getCatNum(x){
    setCatNum(x);
    console.log(catNum)
  }

  const questionList = questions.map((q)=>({question: q.question, category:q.category}))

  function flip(){
    setQuizTime((x)=>!x)
  }

  function newQ(){
    console.log("New Questions" + (playAgain))

    setPlayAgain(x=>!x)
  }
  
  return (
    <div className="App" >
      {quizTime?
      <Quiz flip={flip} questions={questions}  questionList={questionList} playAgain={newQ} newGame={playAgain}/>:
      <Intro flip={flip} getCatNum={getCatNum} quizTime={quizTime} />}
    </div>
  );
}

export default App;
