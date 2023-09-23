export class RoomEntity {
  constructor(name, createdAt, creator) {
    this.name = name;
    this.createdAt = createdAt;
    this.creator = creator;
    this.members = [creator];
  }
}
