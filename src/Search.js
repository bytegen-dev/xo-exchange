import React from "react";

export default function Search(props){
    const [isTyping, setIsTyping] = React.useState("")
    const [result, setReult] = React.useState({
        value: "XXX",
        visible: false,
    })

    function handleChange(event){
        const {value} = event.target

        setIsTyping(value)
    }

    function searchForResult(event){
        event.preventDefault()
        setReult((prevState)=>{return({
            ...prevState,
            visible: true,
            value: "Darmian",
        })})
    }
    
    function searchForResultX(){
        setReult((prevState)=>{return({
            ...prevState,
            visible: false,
        })})
    }


    return(
        <div className={props.className}>
            <div className="header">
                1 {props.defaultCurrency} = X 
            </div>
            <form onSubmit={searchForResult}>
                <input placeholder="currency code" required value={isTyping} onChange={handleChange}></input>
                <button><i className="fa fa-search" /></button>
            </form>
            <a href="https://wa.me/+2347035658853" rel="noreferrer">find your country's currency code?</a>
            <div className={result.visible ? "show result" : "result"}>
                <div>Country Code</div>
                <div>converted Value</div>
            </div>
            <div onClick={searchForResultX} className={result.visible ? "backdrop-result show" : "backdrop-result"}></div>
        </div>
    )
}