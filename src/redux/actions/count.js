/**
 *  createAddAction：操作动作（加）
 *  createDelAction：操作动作（减）
 * */
 import {createAddType,createDelType} from "../constant"
 export const createAddAction =(data)=>( {type:createAddType, data })

 export const createDelAction =(data)=>( {type:createDelType, data })