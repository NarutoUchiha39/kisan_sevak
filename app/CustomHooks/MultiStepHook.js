import { useState } from "react";

export default function MultiStepHook(Element){
    const [steps,setSteps] = useState(0);
    function goTo(index){
        setSteps(index);
    };

    function next(){
        setSteps(i=>{
            if(i>=Element.length) return i;
            return i+1;
        });
    };

    function previous(){
        
        setSteps(i=>{
            if(i<=0) return i;
            return i-1;
        });
    };

    return{
        steps,
        next,
        goTo,
        previous,
        isFirst : steps === 0,
        isLast: steps === Element.length-1,
        step:Element[steps],
        Element
    };
};
