import Message from "./message"

export default class Room {
    participants: string[] = []
    messages: Message[] = []
    constructor(public id: string) { }
}