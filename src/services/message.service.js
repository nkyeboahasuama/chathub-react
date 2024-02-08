import { MessageUseCaseClass } from "../core/use_cases/message.usecase";
import { MessageRepo } from "../infras/repos/message.repo";

const sendMessage = (text, sender, roomId) => {
  return messageUseCases.sendMessage(text, sender, roomId);
};

const deleteMessage = (textId) => {
  messageUseCases.deleteMessage(textId);
};

const getMessages = () => {
  return messageUseCases.getMessages();
};

export const messageService = {
  sendMessage,
  deleteMessage,
  getMessages,
};

const messageUseCases = new MessageUseCaseClass(MessageRepo);
