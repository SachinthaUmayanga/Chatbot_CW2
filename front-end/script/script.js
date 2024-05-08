function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
        var chatBox = document.getElementById("chat-box");
        var userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.innerHTML = userInput;
        chatBox.appendChild(userMessage);
        document.getElementById("user-input").value = "";
        // Simulate a response from ChatGPT
        setTimeout(receiveMessage, 1000);
    }
}

function receiveMessage() {
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerHTML = "This is a response from bot";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
