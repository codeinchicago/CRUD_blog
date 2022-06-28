import React, { Component } from 'react'


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
            
                <h1>Hello World</h1>
                
            </>
        )
    }
    
}


fetch('http://localhost:5000/api/posts', {
    method: 'GET',
    body: JSON.stringify()
}).then(res => res.json())
    .then(data => {
        console.log(data)
        props.flashMessage('You have successfully registered', 'success')
        navigate('/')
    })
