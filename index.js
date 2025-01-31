const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");


const responses = {
  Hello: "Hello there! Welcome to Charmystery. I'm here to help you find the perfect beaded accessories. How can I assist you today?",
  Hello: "Heloo",
  bye: "Goodbye!",
  "product details": "Our product is good for the health",
  "help": "with?",
  "where can i buy the stuff": "Navigate to the product section bro",
  "yoowwww": "Pakyu kupal",
  default: "Im not sure how to respond to that."
};


function addMessage(content, className) {
  const message = document.createElement("div");
  message.classList.add("message", className);
  message.textContent = content;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(userText) {
  
const processedText = userText.trim().toLowerCase();
  return responses[processedText] || responses.default;
}


function handleUserMessage() {
    const userText = userInput.value;
    if (userText) {
      addMessage(userText, "user"); // Display user message
      const botResponse = getBotResponse(userText); // Get bot's response
      addMessage(botResponse, "bot"); // Display bot response
      userInput.value = ""; // Clear the input field
    }
  }
  
  sendButton.addEventListener("click", handleUserMessage);
  
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleUserMessage();
    }
  });