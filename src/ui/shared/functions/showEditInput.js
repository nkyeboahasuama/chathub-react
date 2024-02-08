export const showEditInput = () => {
  const roomNameElement = document.querySelector("#allow-edits");

  if (roomNameElement) {
    const roomName = roomNameElement.textContent;

    const newInput = document.createElement("input");
    newInput.value = roomName;
    newInput.type = "text";

    newInput.addEventListener("blur", () => {
      const updatedName = newInput.value;
      console.log("Updated Room Name:", updatedName);
    });
    roomNameElement.innerHTML = "";
    roomNameElement.appendChild(newInput);
    newInput.focus();
  }
};
