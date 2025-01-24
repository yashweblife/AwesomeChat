export default class User{
    pid:string=""
    contacts: []=[]
    rooms: []=[]
    constructor(public id: string, public name: string){}
}