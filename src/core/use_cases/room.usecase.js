import { RoomEntity } from "../entities/room.entities";

export class RoomUseCases {
  constructor(rommRepository) {
    this.rommRepository = rommRepository;
  }

  addNewRoom(name, creator) {
    const createdAt = new Date();
    const newRoom = new RoomEntity(name, createdAt, creator);
    const room = this.rommRepository.addDoc(newRoom);
    return room;
  }

  editRoomName(id, newRoomName) {
    return this.rommRepository.editDocById(id, { name: newRoomName });
  }

  deleteRoom(roomId) {
    // This should delete the messages in the particular room
    return this.rommRepository.deleteDocById(roomId);
  }

  joinRoom(room, newMember) {
    if (room) {
      const roomMembers = room.members;
      if (roomMembers.length > 0) {
        const alreadyAMember = room.members.filter(
          (member) => member.email === newMember.email
        );
        if (alreadyAMember.length) {
          throw new Error("Already a member");
        }
        const members = [...room.members, newMember];
        return this.rommRepository.editDocById(room.id, { members: members });
      } else {
        const members = [...room.members, newMember];
        return this.rommRepository.editDocById(room.id, { members: members });
      }
    }
  }

  leaveRoom(room, newMember) {
    if (room) {
      const roomMembers = room.members;
      if (roomMembers.length > 0) {
        const newRoomMembers = room.members.filter(
          (member) => member.email !== newMember.email
        );
        return this.rommRepository.editDocById(room.id, {
          members: newRoomMembers,
        });
      }
    }
  }
}
