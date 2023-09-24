import { MessageUseCaseClass } from "../core/use_cases/message.usecase";
import { MessageRepo } from "../infras/repos/message.repo";

const sendMessage = (text, sender, roomId) => {
  messageUseCases.sendMessage(text, sender, roomId);
};

const deleteMessage = (textId) => {
  messageUseCases.deleteMessage(textId);
};

export const messageService = {
  sendMessage,
  deleteMessage,
};

const messageUseCases = new MessageUseCaseClass(MessageRepo);
