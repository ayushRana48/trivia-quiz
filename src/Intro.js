import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import Carousel from "react-elastic-carousel";
import Category from "./Category";

export default function Intro(props){
    const breakPoints =[
        {width:1, itemsToShow:5}
    ]

    const categories=["Any","General Knowledge","Books","Film","Music","Television","Science & Nature",
    "Mythology", "Sports", "Geography", "History","Celebrities","Animals","Anime","Cartoons"
    ]

    const [categoryNum,setCategoryNum]=React.useState("0");
    const [category,setCategory] = React.useState("Any");

   
 

     


    React.useEffect(() => {
        props.getCatNum(categoryNum)
    }, [categoryNum])

    function getNum(x){
        switch (x){
            case "Any":
                return "0"
            break;
            case "General Knowledge":
                return "9"
            case "Books":
                return "10"
            break;
            case "Film":
                return "11"
            break;
            case "Music":
                return "12"
            break;
            case "Television":
                return "14"
            break;
            case "Science & Nature":
                return "17"
            break;
            case "Mythology":
                return "20"
            break;
            case "Sports":
                return "21"
            break;
            case "Geography":
                return "22"
            break;
            case "History":
                return "23"
            break;
            case "Celebrities":
                return "26"
            break;
            case "Animals":
                return "27"
            break;
            case "Anime":
                return "31"
            break;
            case "Cartoons":
                return "32"
            break;
            
        }
    }

    let styles ={
        backgroundColor: "#D4D4FF"
    };

    function handleClick(cat){
        console.log("Click" +cat)
        setCategoryNum(getNum(cat))
        setCategory(cat)
        

    }

    function handleClickChangeToQuiz(){
        console.log("Quiz Time")

    }   

    const categoryList = categories.map(cat => <Category click={()=>handleClick(cat)} name={cat} current={categoryNum} id={getNum(cat) }> </Category>)

    return(
        <div className="Intro">
            <div className="leftCircle"></div>
            
            <h1>Quizzical</h1>
            <h3>A Trivia Quiz made by Flub</h3>

            <p>{"Category: " +category}</p>
            <Carousel className="categories" breakPoints={breakPoints} loop={true} >
                {categoryList}
            </Carousel>
            <button className="start" onClick={props.flip} >Start Quiz</button>
            <div className="rightCircle"></div>
            
        </div>
    )
}