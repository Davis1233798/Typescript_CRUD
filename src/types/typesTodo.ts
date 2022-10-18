import {Document} from "mongoose"

//Jack 20221016 使用此處interface與mongoose進行交互
export interface ITodo extends Document{
    name:string
    description:string
    status:boolean
}