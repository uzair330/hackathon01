import { StaticImageData } from "next/image"

export type product ={
    
id:number,
name:string,
price:number,
catagory:string,
image:StaticImageData | string
tag:string
var1?:StaticImageData | string
var2?:StaticImageData | string
}