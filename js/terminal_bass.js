// --- Make the DIV element draggable and resizable ---

const terminal = document.getElementById("terminal");
const header = terminal.querySelector(".terminal-header");
const resizer = document.getElementById("resizer");
const terminalBody = document.getElementById("terminal-body");
const commandInput = document.getElementById("commands");
const contentBox = document.querySelector('.contentbox');


// --- DRAGGING LOGIC ---
let isDragging = false;
let offsetX, offsetY;

header.addEventListener("mousedown", (e) => {
    isDragging = true;
    // Calculate the offset from the top-left corner of the terminal
    offsetX = e.clientX - terminal.offsetLeft;
    offsetY = e.clientY - terminal.offsetTop;

    // Add a class to indicate dragging
    terminal.classList.add("dragging");

    // Prevent default text selection behavior
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // Calculate new position
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;

    // Set the new position of the terminal
    terminal.style.left = `${newLeft}px`;
    terminal.style.top = `${newTop}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    terminal.classList.remove("dragging");
});

// Focus the input when the user clicks anywhere in the terminal body
terminalBody.addEventListener("click", () => {
    commandInput.focus();
});

// Also, focus the input right away when the page loads
commandInput.focus();


// --- RESIZING LOGIC ---
let isResizing = false;
let originalWidth, originalHeight, originalMouseX, originalMouseY;

resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    originalWidth = terminal.offsetWidth;
    originalHeight = terminal.offsetHeight;
    originalMouseX = e.clientX;
    originalMouseY = e.clientY;

    // Prevent default behavior to avoid conflicts
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const width = originalWidth + (e.clientX - originalMouseX);
    const height = originalHeight + (e.clientY - originalMouseY);

    // Apply new dimensions, respecting min-width/height from CSS
    terminal.style.width = `${width}px`;
    terminal.style.height = `${height}px`;
});

document.addEventListener("mouseup", () => {
    isResizing = false;
});


// --- NEW, FIXED COMMAND HANDLING LOGIC ---
commandInput.addEventListener('keydown', function(event) {
    // Check if the key pressed was "Enter"
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior (which would reload the page)
        event.preventDefault();

        // 1. Get the command text and trim whitespace
        const commandText = commandInput.value.trim();

        // If the user just pressed enter on an empty line, do nothing
        if (commandText === '') {
            return;
        }

        // Handle the 'cls' (clear screen) command separately
        if (commandText.toLowerCase() === `cls`) {
            contentBox.innerHTML = ``;
            commandInput.value = ``;
            return;
        }

        // --- For all other commands, we add content to the terminal ---

        // 2. Create and append the line that shows the command entered
        const oldCommand = document.createElement('div');
        oldCommand.classList.add('oldcommands');
        oldCommand.textContent = `shoron@portfolio: ~ ${commandText}`;
        contentBox.appendChild(oldCommand);

        // 3. Create the div for the command's output
        const newContent = document.createElement('div');
        newContent.classList.add('contenttext');

        // 4. Handle different commands to generate the correct output
        if (commandText.toLowerCase() === 'cv') {
            // If not, you should create it or replace this with your CV content.
            newContent.innerHTML = generateCvHtml();

        } else {
            // For any other command, just echo it back.
            newContent.textContent = `Command not found: ${commandText}`;
        }

        // 5. Append the output div to the 'contentbox' container
        contentBox.appendChild(newContent);

        // 6. Clear the input field for the next command
        commandInput.value = '';

        // 7. (FIXED) Automatically scroll the terminal to the bottom.
        setTimeout(() => {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }, 0);
    }
});