import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <div className="dark-blue">
        <div className="logos">
          <img src="/images/ironhack-logo.svg" alt="" />
          <img src="/images/menu-top.svg " alt="" />
        </div>
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <br />
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer.</p>
        <br />
        <br />
        <button className="btn">Awesome!</button>        
      </div>
    )
  }
}

export default Main;