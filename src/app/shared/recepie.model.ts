import { Ingrident } from "./ingrident.model";

export class Recepie{
    constructor(public name:string, public description:string, public imagePath:string, public ingridents:Ingrident[]){}
}