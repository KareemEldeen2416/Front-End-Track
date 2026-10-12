'use client';

import { useEffect, useRef, useState } from "react";


function Game(){


    const [sign,setSign] = useState('X');
    const [win,setWin] = useState(false);
    const clickedElement = useRef<HTMLDivElement>(null);
    const divList = useRef<HTMLDivElement[]>([]);
    const result = useRef<HTMLHeadingElement|null>(null);

    const changeSign = ()=>{
        if(sign === 'X'){
            setSign('O');
        }else{
            setSign('X');
        }
    };


    const handleCheckElement = (e:any)=>{
        e.target.innerHTML = sign;
        changeSign();
    }

    useEffect(()=>{
        if(divList.current[0].innerHTML == divList.current[1].innerHTML && divList.current[1].innerHTML == divList.current[2].innerHTML && divList.current[0].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[3].innerHTML == divList.current[4].innerHTML && divList.current[4].innerHTML == divList.current[5].innerHTML && divList.current[3].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[6].innerHTML == divList.current[7].innerHTML && divList.current[7].innerHTML == divList.current[8].innerHTML && divList.current[6].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[0].innerHTML == divList.current[3].innerHTML && divList.current[3].innerHTML == divList.current[6].innerHTML && divList.current[0].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[1].innerHTML == divList.current[4].innerHTML && divList.current[4].innerHTML == divList.current[7].innerHTML && divList.current[1].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[2].innerHTML == divList.current[5].innerHTML && divList.current[5].innerHTML == divList.current[8].innerHTML && divList.current[2].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[0].innerHTML == divList.current[4].innerHTML && divList.current[4].innerHTML == divList.current[8].innerHTML && divList.current[0].innerHTML != ''){
            setWin(true);
        }
        else if(divList.current[2].innerHTML == divList.current[4].innerHTML && divList.current[4].innerHTML == divList.current[6].innerHTML && divList.current[2].innerHTML != ''){
            setWin(true);
        }
    });


    useEffect(()=>{
        if(win && result.current){
            result.current.innerHTML = 'WIN';
            result.current.className = 'bg-green-100 text-green-800 text-center font-extrabold';
        }else if (!win && result.current){
            result.current.innerHTML = 'DRAW';
            result.current.className = 'bg-red-100 text-red-800 text-center font-extrabold'
        }
    },[win]);


    return(
        <>
        <section className="flex flex-row flex-wrap w-120">
            <div ref={(el)=>{if(el) divList.current[0] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[1] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[2] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[3] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[4] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[5] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[6] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[7] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
            <div ref={(el)=>{if(el) divList.current[8] = el;}} onClick={handleCheckElement} className="w-36 h-36 bg-green-200 m-2 rounded flex justify-center align-center"></div>
        </section>
        <h1 ref={result}>Result</h1>
        </>
    );
}

export default Game;