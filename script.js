const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

const socket = new WebSocket("ws://localhost:3000"); // Substitua pelo endereço do servidor WebSocket

socket.addEventListener("open", () => {
    console.log("Conexão estabelecida com o servidor WebSocket.");
});

socket.addEventListener("message", (event) => {
    const message = event.data;
    displayMessage(message);
});

sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message.trim() !== "") {
        socket.send(message);
        messageInput.value = "";
    }
});

function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


