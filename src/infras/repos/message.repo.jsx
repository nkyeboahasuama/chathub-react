import { BaseRepository } from "./base.repository";

class MessageRepositoryClass extends BaseRepository {
  constructor() {
    super("messages");
  }
}

export const MessageRepo = new MessageRepositoryClass();
