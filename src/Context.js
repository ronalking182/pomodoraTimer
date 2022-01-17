import {  createContext, useContext, useState } from "react";


const TimerContext = createContext()
export const Context = ({children}) => {
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);


   return(
   <TimerContext.Provider value={{ 
       showSettings,
    setShowSettings,
    workMinutes,
    breakMinutes,
    setWorkMinutes,
    setBreakMinutes,}}>
       {children}
   </TimerContext.Provider>
   )
}

export const useTimerContext = () => useContext(TimerContext)
