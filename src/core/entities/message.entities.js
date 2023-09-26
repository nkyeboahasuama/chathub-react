export class MessageEntity {
  constructor(text, sender, roomId, createdAt) {
    this.text = text;
    this.sender = sender;
    this.roomId = roomId;
    this.createdAt = createdAt;
  }
}
