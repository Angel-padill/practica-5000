import{Schema, model}from "mongoose"

const esquema1 = new Schema({
name:{
    type:String
}
})

export const modelo1 = new model("tabla de alumnos",esquema1)