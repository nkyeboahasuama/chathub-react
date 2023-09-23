export const handleRoomMateCheck = (room, user) => {
  const roomMembers = room.members;
  const arr = roomMembers.filter(
    (roomMember) => roomMember.email === user.email
  );
  if (arr.length > 0) {
    return true;
  } else {
    return false;
  }
};
