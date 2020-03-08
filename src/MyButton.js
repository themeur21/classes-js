
import React from "react";
export function MyButton() 



return (<div>

    {
    (props.isShown) && (<button
    onClick={props.onSimpleClick}
    style={{backgroundColor:(props.visited)?"red":"blue"}}>
     {props.children}
     </button>
    )

    }
    
      </div>)
    
    