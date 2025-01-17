let reconnectAttempts = 0;
const maxReconnectAttempts = 5;
const reconnectDelay = 3000; // 3 seconds

function connectWebSocket() {
    const socket = new WebSocket(''); // Updated URL

    socket.addEventListener('open', function (event) {
        console.log('Connected to Professor AI');
        reconnectAttempts = 0; // Reset attempts on successful connection
        appendMessage('bot', 'Connected successfully! How can I help you today?');
    });

    socket.addEventListener('message', function (event) {
        appendMessage('bot', event.data);
    });

    socket.addEventListener('close', function(event) {
        console.log('WebSocket connection closed');
        if (reconnectAttempts < maxReconnectAttempts) {
            console.log(`Attempting to reconnect... (${reconnectAttempts + 1}/${maxReconnectAttempts})`);
            setTimeout(() => {
                reconnectAttempts++;
                socket = connectWebSocket(); // Reassign socket variable on reconnect
            }, reconnectDelay);
        } else {
            appendMessage('bot', 'Unable to establish connection. Please refresh the page or try again later.');
        }
    });

    socket.addEventListener('error', function (event) {
        console.error('WebSocket error:', event);
        appendMessage('bot', 'Connection interrupted. Attempting to reconnect...');
    });

    return socket;
}

// Initialize the WebSocket connection
let socket = connectWebSocket();

const messagesDiv = document.getElementById('messages');

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-group`;

    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <img src="ai-technology-robot-cyborg-illustrations_24640-134419.avif" class="message-avatar" alt="AI Avatar">
            <div class="message bot">${message}</div>
        `;
    } else {
        messageDiv.innerHTML = `<div class="message user">${message}</div>`;
    }

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message) {
        appendMessage('user', message);
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        } else {
            appendMessage('bot', 'Connection is not open. Please wait or try again later.');
        }
        userInput.value = '';
    }
}

// Add event listener for Enter key
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        sendMessage();
    }
});

// Focus input when page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userInput').focus();
});
