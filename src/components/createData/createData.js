import React,{Component} from 'react'

export default class CreateData extends Component{
   constructor(props){
    super(props)
    this.state = {
        data:{}
    }
}
componentDidMount(){
    fetch('/main').then(res=>res.json()).then(data=>{this.setState({data})})
}
handleAddData=()=>{
    let keyObject = {};
    let count = 0;
    for(let[key,value] of Object.entries(this.state.data)){
        keyObject[key] = document.querySelectorAll('.inputData')[count].value
        count++ 
    }
    console.log(document.querySelectorAll('.inputData'))
    console.log(keyObject)

    fetch('/create',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(keyObject)
    })
}

   
    render(){
        
        if(this.state.data !== null){
            let keyArray = [];
        for(let[key,value] of Object.entries(this.state.data)){
            keyArray.push(key)
        }

        let inputArray = []
        const inputData = ()=>{
            for(let i =0;i<keyArray.length;i++){
                console.log(keyArray[i])

            inputArray.push(

                <div className="form-group">
                        <label for="exampleFormControlInput1">{keyArray[i]}</label>
                        <input type="text" className="form-control inputData" />
                </div>
            )}
        }
        inputData()

        console.log(inputArray)
        return(
            <div>
            {inputArray}
            <button className = "btn btn-success" onClick={()=>{this.handleAddData()}}>Click</button>
            </div>
        )
        }
        else{
            return null
        }
        
    }
}