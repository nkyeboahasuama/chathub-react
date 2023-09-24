import { MessageEntity } from "../entities/message.entities";

export class MessageUseCaseClass {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }

  sendMessage(text, sender, roomId) {
    // const sentAt = new Date();
    const message = new MessageEntity(text, sender, roomId);
    this.messageRepository.addDoc(message);
    console.log("sending", message);
  }
  deleteMessage(textId) {
    console.log("deleting", textId);
    this.messageRepository.deleteDocById(textId);
  }
}
