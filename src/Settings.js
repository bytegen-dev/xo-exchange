import React from "react";

export default function Settings(props){
    const [uiSettingsX, setUiSettingsX] = React.useState({
        dataSaver: false,
        animation: "MAX",
    })

    function dataSaverToggle(){
        setUiSettingsX((prevState)=>{
            return({
                ...prevState,
                dataSaver: !prevState.dataSaver
            })
        })
    }

    function animationChange(){
        setUiSettingsX((prevState)=>{
            if(prevState.animation === "MAX"){
                return({
                    ...prevState,
                    animation: "OFF"
                })
            } else if(prevState.animation === "OFF"){
                return({
                    ...prevState,
                    animation: "MIN"
                })
            } else{
                return({
                    ...prevState,
                    animation: "MAX"
                })
            }


        })
    }

    return(
        <div className={props.className}>
                <div className="settings-nav">Settings</div>
                <div className="app-about">
                    <h2>About</h2>
                    <p>Xchange is a simple Progresive Web App created to minimize the amount of stress it takes to check for currency data anytime from your home Screen</p>
                    <p>it was created in february 2023 by Isaac Adebayo</p>
                    <div className="mylinks">
                        <a href="https://github.com/tertiux" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>
                        <a href="https://linkedin.com/tertiux44" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"/></a>
                        <a href="https://twitter.com/tertiux44" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"/></a>
                        <a href="https://youtube.com/tertiux44" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"/></a>
                    </div>
                </div>
                <div className="app-settings">
                    <h2>Settings</h2>
                    <div className="settings-items-holder"  onTouchStart={props.touchStart}>
                        <div className="settings--item" onClick={props.toggleDarkMode}>
                            <div className="abt">Night Mode</div>
                            <div className="toggle">{props.darkMode ? "ON" : "OFF"}</div>
                        </div>
                        <div className="settings--item">
                            <div onClick={dataSaverToggle} className="abt">Data Saver</div>
                            <div className="toggle">{uiSettingsX.dataSaver ? "ON" : "OFF"}</div>
                        </div>
                        <div onClick={animationChange} className="settings--item">
                            <div className="abt">Animations</div>
                            <div className="toggle">{uiSettingsX.animation}</div>
                        </div>
                        <div className="settings--item">
                            <div className="abt">Privacy</div>
                            <a href="https://wa.me/+2347035658853" className="toggle"><i className="fa fa-link" /></a>
                        </div>
                        <div className="settings--item">
                            <div className="abt">Currency</div>
                            <div className="toggle">{props.defaultCurrency}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}