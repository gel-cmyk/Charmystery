const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");


const responses = {
  hi: "Hi there! Welcome to CharMystery, we offer beautiful accessories like bracelets, anklets, and phone charms. How can I assist you today?",
  hello: "Hello there! Welcome to Charmystery. I'm here to help you find the perfect beaded accessories. How can I assist you today?",
  bye: "Goodbye!",
  "are there any upcoming product launches or collections": "Yes, we have exciting new products and collections launching soon! Sign up for our newsletter to stay updated on the latest releases.",
  "how do i provide feedback or leave a review?": "We value your feedback! You can leave a review on the product website or contact our support team with your comments and suggestions.",
  "do you have a physical catalog or brochure?": "We don't have a physical catalog, but you can browse our entire collection on our website.",
  "can i modify the length of bracelets or anklets?":"Yes, we offer customization for the length of bracelets and anklets. Please contact our support team with your request, and we'll be happy to assist.",
  "do you offer personalized or custom-made items?": "Yes, we offer personalized and custom-made items. Please visit our Custom Orders or Diy page for more information and to place your request.",
  "what materials are your products made from?": "Our accessories are made from high-quality materials of beads.",
  "are your products available in stores?": "Currently, we operate exclusively online. You can shop our entire collection on our website.",
  "is my personal information secure?": "Absolutely! We prioritize your privacy and security. Your personal information is protected through our secure payment gateway and privacy policies.",
  "can i change or cancel my order?": "To change or cancel your order, please contact our support team as soon as possible. We'll do our best to accommodate your request.",
  "where are you located?": "We're an online store based in 215 Diamond St. Olivarez Compound San Dionisio Parañaque City.",
  "what are your business hours?": "Our online store is open 24/7! For customer support, our hours are Monday to Friday, 9 AM to 5 PM (PST).",
  "wow can i contact customer support?" : "You can reach our customer support team by emailing support@charmysterry@gmail.com or calling us at +63 950 070 6625. We're here to help!",
  "what services do you offer?": "At Charmystery, we offer accessories including bracelets, anklets, and phone charms. Each piece is crafted with love and designed to add a touch of charm to your style!",

  default: "Im not sure how to respond to that."
};



  function addMessage(content, className) {
    const message = document.createElement("div");
    message.classList.add("message", className); // Add the appropriate class (user or bot)
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
      addMessage(userText, "user"); 
      const botResponse = getBotResponse(userText); 
      addMessage(botResponse, "bot"); 
      userInput.value = ""; 
    }
  }
  
  sendButton.addEventListener("click", handleUserMessage);
  
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleUserMessage();
    }
  });