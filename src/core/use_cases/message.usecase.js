import { MessageEntity } from "../entities/message.entities";

export class MessageUseCaseClass {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }

  sendMessage(text, sender, roomId) {
    const sentAt = new Date();
    const message = new MessageEntity(text, sender, roomId, sentAt);
    this.messageRepository.addDoc(message);
  }

  deleteMessage(textId) {
    this.messageRepository.deleteDocById(textId);
  }
}
