import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";


export default function Answer(props){

    const ans= props.text


    function backgroundDecider(){
        if(props.selected===props.text){
            if(props.submit){
                if(props.correct){
                    //green
                    return "#d4ffe5"
                }
                else{
                    //red
                    return "#ffd4d4"
                }
            }
            else{
                //yellse
                return "#FFFFEE"
            }
            
        }
        else{
            if(props.submit){
                if(props.correct){
                    return "#d4ffe5"
                }
            }
            else{
                return "#D4D4FF"
            }
            
        }
    }

    function borderDecider(){
        if(props.text===props.selected){
            return "black solid 2px"
        }
        if(props.submit && props.correct){
            return "black solid 2px"
        }
        else{
           return  "none"
        }
    
}

    const styles ={
        //current?  backgroundColor:"FFFFD4" :backgroundColor: "#D4D4FF"
        backgroundColor: backgroundDecider(),
        border: borderDecider()
    };


    function scoreChange(){
        if(props.submit && (props.selected===props.text && props.correct)){
            console.log(props.text)
            props.score();
            console.log("score")
        }
      }

     React.useEffect(scoreChange,[props.submit])

    
      


    // const style={ backgroundColor :props.selected===props.text? "#FFFFFF": "#D4D4FF;"
    // }

    return(
        <button onClick={props.click} style={styles}  className="incorrect"><div dangerouslySetInnerHTML={{__html: ans}}/></button>
    )
}

