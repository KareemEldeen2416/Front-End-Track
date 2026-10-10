'use client';
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";



const calculateIncome = ()=>{
  console.log('Calculating ...');
  return 1000;
};

export default function Home() {
  const [counter,setCounter] = useState(0);
  const [success,setSuccess] = useState(false);
  const [shouldCalculate,setShouldCalculate] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const income = useMemo(()=>calculateIncome(),[shouldCalculate]);

  const increaseCounter = () =>{
    setCounter(counter + 1);
    console.log(counter);
    if(counter === 5){
      setSuccess(true);
    }else{
      setSuccess(false);
    }
  }
  const decreaseCounter = () =>{
    setCounter(counter - 1);
    console.log(counter);
  }

  const handleInputChange = (e:any)=>{
    console.log(e.target.value);
  };



  useEffect(()=>{
    console.log("Action Triggered");
  },[success]);

  useEffect(()=>{
    console.log("Counter Action Triggered");
  },[counter]);

  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  },[]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="bg-indigo-100">
        <h1>Home</h1>
        <div>counter: {counter}</div>
        <input onChange={handleInputChange} className="shadow-md bg-white" ref={inputRef} />
        <button onClick={increaseCounter} className="rounder bg-indigo-500 p-2 m-2 block cursor-pointer hover:bg-indigo-700 text-white">Increment</button>
        <button onClick={decreaseCounter} className="rounder bg-indigo-500 p-2 m-2 block hover:bg-indigo-700 text-white">Decrement</button>
      </main>
    </div>
  );
}
