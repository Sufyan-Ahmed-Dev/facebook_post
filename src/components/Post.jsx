import React from 'react'
import LOGO from "../logo.svg";
import "./App.css";
function Post(props) {
  return (
   <>
      <div className="App">
      <header className="App-header">
        <div className="postbox">
          <div className="Userdata">
            <img className="userImage" src={LOGO} alt="user IMG" />
            <div className="userName">{props.name}</div>
            <div className="userDate">{props.date}</div>
          </div>
          <div className="userText">
             {props.text}
          </div>
          <div className="postImg">
            <img src={LOGO} alt="postIMG" />
          </div>
          <div className="postButtons">
            <button className="button1">Like</button>
            <button className="button2">Comment</button>
            <button className="button3">Share</button>
          </div>
        </div>
      </header>
    </div>
   </>
  )
}

export default Post