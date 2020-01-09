const mongoose = require('mongoose')
const fs = require('fs');


try{


    const file = JSON.parse(fs.readFileSync('objects.txt'))
    console.log(file)
    
    const objectSchema = new mongoose.Schema(file)


const objectModel = mongoose.model('Model',objectSchema)
module.exports = objectModel

}
catch(e){
    
}