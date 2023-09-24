export class MessageEntity {
  constructor(text, sender, roomId) {
    this.text = text;
    this.sender = sender;
    this.roomId = roomId;
  }
}
