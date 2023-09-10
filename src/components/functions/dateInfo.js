const getTime = (data) => {
  const timestamp = data?.createdAt?.toDate();
  if (timestamp) {
    const formattedTime = timestamp?.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  }
};

const getDate = (data) => {
  const timestamp = data?.createdAt?.toDate();
  if (timestamp) {
    const formattedDate = timestamp?.toLocaleDateString("en-US", {
      month: "long",
      weekday: "long",
      day: "numeric",
    });
    return formattedDate;
  }
};

export const dateInfo = {
  getTime,
  getDate,
};
