export default class Message{
    sender:string = 'user'
    message:string=""
    time:Date = new Date()
    status:number=0
    constructor(public id:string){}
}