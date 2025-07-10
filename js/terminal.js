// --- Make the DIV element draggable and resizable ---

const terminal = document.getElementById("terminal");
const header = terminal.querySelector(".terminal-header");
const resizer = document.getElementById("resizer");
const terminalBody = document.getElementById("terminal-body");
const commandInput = document.getElementById("commands");
const contentBox = document.querySelector('.contentbox');


// --- DRAGGING LOGIC --- (This part remains unchanged)
let isDragging = false;
let offsetX, offsetY;

header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - terminal.offsetLeft;
    offsetY = e.clientY - terminal.offsetTop;
    terminal.classList.add("dragging");
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    terminal.style.left = `${newLeft}px`;
    terminal.style.top = `${newTop}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    terminal.classList.remove("dragging");
});

// --- FOCUS LOGIC --- (This part remains unchanged)
terminalBody.addEventListener("click", () => {
    commandInput.focus();
});
commandInput.focus();


// --- RESIZING LOGIC --- (This part remains unchanged)
let isResizing = false;
let originalWidth, originalHeight, originalMouseX, originalMouseY;

resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    originalWidth = terminal.offsetWidth;
    originalHeight = terminal.offsetHeight;
    originalMouseX = e.clientX;
    originalMouseY = e.clientY;
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const width = originalWidth + (e.clientX - originalMouseX);
    const height = originalHeight + (e.clientY - originalMouseY);
    terminal.style.width = `${width}px`;
    terminal.style.height = `${height}px`;
});

document.addEventListener("mouseup", () => {
    isResizing = false;
});


// =======================================================================
// --- NEW COMMAND HANDLING LOGIC WITH BACKEND INTEGRATION ---
// =======================================================================


function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

commandInput.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter') {
        return;
    }
    
    event.preventDefault();

    const commandText = commandInput.value.trim();
    if (commandText === '') {
        return;
    }

    // --- 1. Echo the user's command to the terminal ---
    const oldCommand = document.createElement('div');
    oldCommand.classList.add('oldcommands');
    oldCommand.innerHTML = `<span class="dir">shoron@portfolio: ~</span> ${commandText}`;
    contentBox.appendChild(oldCommand);
    
    commandInput.value = '';
    
    scrollToBottom();

    // --- 2. Handle commands: frontend 'cls' or backend for everything else ---
    
    if (commandText.toLowerCase() === 'cls') {
        contentBox.innerHTML = '';
        return;
    }

    handleBackendCommand(commandText);
});


function handleBackendCommand(command) {
    commandInput.disabled = true;

    const responseContainer = document.createElement('div');
    responseContainer.classList.add('contenttext');
    contentBox.appendChild(responseContainer);
    
    const baseUrl = window.location.origin;
    const ApiUrl = `${baseUrl}/api/terminal?command=${encodeURIComponent(command)}`;
    
    const eventSource = new EventSource(ApiUrl);

    eventSource.onmessage = function(event) {
        if (event.data === '[DONE]') {
            eventSource.close();
            commandInput.disabled = false;
            commandInput.focus();
        } else {
            responseContainer.innerHTML += event.data;
            scrollToBottom();
        }
    };

    eventSource.onerror = function(err) {
        console.error("EventSource failed:", err);
        responseContainer.innerHTML += `<br><span class="redtext">Error: Could not connect to the command server.</span>`;
        scrollToBottom();
        eventSource.close();
        commandInput.disabled = false;
        commandInput.focus();
    };
}