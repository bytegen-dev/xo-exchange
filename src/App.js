import React from "react";
import Home from "./Home";
import Search from "./Search";
import Settings from "./Settings";
import Footer from "./Footer";
import Fave from "./Fave";
import { useState } from "react";

export default function App(){
    const [uiSettings, setUiSettings] = useState({
        showHome: true,
        showSearch: false,
        showFave: false,
        showSettings: false,
        showFooter: true,
        darkMode: true,
    })
    
    function gotoHome(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: true,
                showSearch: false,
                showSettings: false,
                showFave: false,
            })
        })
    }
    
    function gotoSearch(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: false,
                showSearch: true,
                showFave: false,
                showSettings: false,
            })
        })
    }
    
    function gotoSettings(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: false,
                showSearch: false,
                showFave: false,
                showSettings: true,
            })
        })
    }

    function gotoFave(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: false,
                showSearch: false,
                showSettings: false,
                showFave: true,
            })
        })
    }
    
    function toggleDarkMode(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                darkMode: !prevState.darkMode
            })
        })
    }

    
    const [footerVisible, setFooterVisible] = useState(true)
    
    function touchStarted(event){
        const watchlist = document.querySelector(".watchlist-items-holder")
        console.log("scroll-started")
            const startY = event.touches[0].clientY
            watchlist.addEventListener("touchmove", touchMove)
            watchlist.addEventListener("touchend", touchEnd)
            
            function touchMove(event){
                const endY = event.changedTouches[0].clientY
                if(endY < startY){
                    setFooterVisible(false)
                }
                else if(endY > startY){
                    setFooterVisible(true)
                }
            }

            function touchEnd(){
                console.log("touch ended")
            }
    }

    function showFooter(){
        setFooterVisible(true)
    }


    return(
        <div className={uiSettings.darkMode ? "dark container" : "container"}>
            <Home onTouchStart={touchStarted} toggleDarkMode={toggleDarkMode} className={uiSettings.showHome ? "home show type-big" : "home type-big"}/>
            <Search className={uiSettings.showSearch ? "search show type-big" : "search type-big"}/>
            <Fave className={uiSettings.showFave ? "show fave type-big" : "fave type-big"} />
            <Settings className={uiSettings.showSettings ? "settings show type-big" : "settings type-big"}/>
            <Footer
            className={footerVisible ? "footer show type-big" : "footer type-big"}
            gotoHome={gotoHome}
            gotoSearch={gotoSearch}
            gotoSettings={gotoSettings}
            gotoFave={gotoFave}
            isHome={uiSettings.showHome}
            isSearch={uiSettings.showSearch}
            isSettings={uiSettings.showSettings}
            isFave={uiSettings.showFave}
            />
            <div onClick={showFooter} className={footerVisible ? "show-footer" : "show show-footer"}>
                <i className="fa fa-arrow-up" />
            </div>
        </div>
    )
}