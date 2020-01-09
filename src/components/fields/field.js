import React, { Component } from 'react'

export default class Field extends Component {

     fieldParams = ["name", "type", "required"]


handleClick = ()=>{
let newObj = {}
    for(let i = 0;i<this.props.count;i++){
        let name = document.querySelectorAll('.name')[i].value
        let type = document.querySelectorAll('.type')[i].value
        let required = document.querySelectorAll('.required')[i].value
        
        newObj[name] = {};
        newObj[name][this.fieldParams[1]] = type;
        newObj[name][this.fieldParams[2]] = required 
        
    }
    console.log(newObj)
    fetch('/main',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newObj)
    })
}

    render() {

      let field = []
            for (let i = 0; i < this.props.count; i++) {
                field.push(
                    <div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{this.fieldParams[0]}</label>
                        <input type="text" className="form-control name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{this.fieldParams[1]}</label>
                        <input type="text" className="form-control type" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{this.fieldParams[2]}</label>
                        <input type="text" className="form-control required" />
                    </div>
                    <hr/>
                    </div>
            )
            
        }
        console.log(this.props.count)
        return (
            <div>
                {field}
                <button className="btn btn-success" onClick={()=>{this.handleClick()}}>success</button>
            </div>
        )
    }
}