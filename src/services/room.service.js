import { RoomUseCases } from "../core/use_cases/room.usecase";
import { RoomRepo } from "../infras/repos/room.repository";

const addRoom = async (roomName, creator) => {
  return await roomUseCase.addNewRoom(roomName, creator);
};
const editRoom = async (id, newRoomName) => {
  return await roomUseCase.editRoomName(id, newRoomName);
};

const deleteRoom = async (roomId) => {
  return await roomUseCase.deleteRoom(roomId);
};

const joinRoom = async (room, newMember) => {
  return roomUseCase.joinRoom(room, newMember);
};

const leaveRoom = async (room, newMember) => {
  return roomUseCase.leaveRoom(room, newMember);
};
export const roomService = {
  addRoom,
  editRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
};

const roomUseCase = new RoomUseCases(RoomRepo);
