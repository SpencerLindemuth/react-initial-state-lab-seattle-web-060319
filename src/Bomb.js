import React, { Component } from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        return(
            <p>{this.checkBoom()}</p>
        )
    }

    checkBoom = () => {
        if(this.state.secondsLeft === 0){
            return "Boom!"
        }
        else{
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
}
