import { BaseRepository } from "./base.repository";

export class RoomRepositoryClass extends BaseRepository {
  constructor() {
    super("rooms");
  }

  addRoom() {}

  getAllRooms() {}

  deleteRoom() {}
}

export const RoomRepo = new RoomRepositoryClass();
