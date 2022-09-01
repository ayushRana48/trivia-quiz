import React from "react";

export default function Category(props){
    const styles ={
        //current?  backgroundColor:"FFFFD4" :backgroundColor: "#D4D4FF"
        backgroundColor: props.current===props.id ? "#FFFFEE" : "#D4D4FF",
        border: props.current===props.id ? "black solid 2px":"none"

        
       
    };

    

    return(
        <div> <button className="genreButton" onClick={props.click} style={styles} 
        >{props.name}</button> </div>
   );

}