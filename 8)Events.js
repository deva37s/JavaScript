
/*
============================
  JavaScript Events: Notes & Examples
============================

Events are actions or occurrences that happen in the browser (e.g., user clicks, key presses, page loads) that can be responded to with JavaScript. Event handling is a core part of interactive web development.
 
Syntax for defining an event handler in JavaScript:
    node.event=()=>{
        // Handle the event
    }

----------------------------
 1. Event Types
----------------------------
Common event types include:
  - Mouse events: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout
  - Keyboard events: keydown, keyup, keypress
  - Form events: submit, change, input, focus, blur
  - Window events: load, resize, scroll, unload

----------------------------
 2. Adding Event Listeners
----------------------------
element.addEventListener('event', handler[, options]);
The standard way to handle events is with `addEventListener`:

element.addEventListener('event', handler[, options]);

// Example: Click event
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function() {
  alert('Button clicked!');
});

// Arrow function example
btn.addEventListener('click', () => {
  console.log('Clicked with arrow function');
});

// ----------------------------
// Removing Event Listeners
// ----------------------------
// To remove an event listener, you must pass the exact same function reference
// that was used when adding the event. Anonymous functions cannot be removed this way.
// Example:
function removeEventHandler() {
  alert('This will be removed!');
}
btn.addEventListener('click', removeEventHandler); // Add
btn.removeEventListener('click', removeEventHandler); // Remove

// If you use an anonymous function, you cannot remove it:
// btn.addEventListener('click', function() { alert('Hi'); });
// btn.removeEventListener('click', function() { alert('Hi'); }); // This will NOT work

// Always use a named function or store the function in a variable if you plan to remove it later.

----------------------------
 3. The Event Object
----------------------------
When an event occurs, an event object is passed to the handler with useful info:

btn.addEventListener('click', function(event) {
  console.log(event.type); // 'click'
  console.log(event.target); // The element that triggered the event
});

----------------------------
 4. Removing Event Listeners
----------------------------
You can remove listeners with `removeEventListener`:

function handleClick() {
  alert('Clicked!');
}
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);

----------------------------
 5. Event Propagation
----------------------------
Events bubble up from the target element to ancestors (bubbling phase), and can also be captured from ancestors down (capturing phase).

// Bubbling example
document.body.addEventListener('click', function() {
  console.log('Body clicked!');
});

// Stop propagation
btn.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevents event from bubbling up
});

----------------------------
 6. Event Delegation
----------------------------
Use a parent element to handle events for multiple child elements (useful for dynamic lists):

const list = document.getElementById('myList');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert('List item: ' + event.target.textContent);
  }
});

----------------------------
 7. Prevent Default Behavior
----------------------------
Some events have default actions (e.g., form submit reloads page). Prevent with:

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stops form from submitting
  alert('Form submission prevented!');
});

----------------------------
 8. Common Event Examples
----------------------------

// Mouseover/Mouseout
btn.addEventListener('mouseover', () => btn.style.background = 'yellow');
btn.addEventListener('mouseout', () => btn.style.background = '');

// Keyboard events
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});

// Input event
const input = document.getElementById('myInput');
input.addEventListener('input', function(event) {
  console.log('Input value:', event.target.value);
});

----------------------------
 9. Best Practices
----------------------------
// - Use named functions for handlers if you need to remove them later.
// - Minimize use of inline event handlers (e.g., onclick="...") in HTML.
// - Use event delegation for dynamic content.
// - Always clean up listeners if elements are removed from the DOM.

----------------------------
 10. Summary Table
----------------------------
| Event Type   | Example Element | Typical Use                |
|------------- |----------------|----------------------------|
| click        | button, link   | Button clicks, navigation  |
| input        | input, textarea| Live form validation       |
| submit       | form           | Form submission            |
| keydown      | document, input| Keyboard shortcuts         |
| mouseover    | any            | Hover effects              |
| change       | input, select  | Detect value changes       |

*/

// ============================
// PRACTICAL EXAMPLES
// ============================

// 1. Button click
const btn = document.getElementById('myBtn');
if (btn) {
  btn.addEventListener('click', () => alert('Button was clicked!'));
}

// 2. Delegated event for list items
const list = document.getElementById('myList');
if (list) {
  list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('selected');
    }
  });
}

// 3. Keyboard event
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
});

// 4. Form submit prevent default
const form = document.getElementById('myForm');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Custom form handling!');
  });
}

// 5. Mouseover/mouseout
if (btn) {
  btn.addEventListener('mouseover', () => btn.style.background = 'lightblue');
  btn.addEventListener('mouseout', () => btn.style.background = '');
}

// 6. Input event
const input = document.getElementById('myInput');
if (input) {
  input.addEventListener('input', function(event) {
    document.title = event.target.value;
  });
}

// 7. Removing an event listener
function tempHandler() {
  alert('This will only show once.');
  btn.removeEventListener('click', tempHandler);
}
if (btn) {
  btn.addEventListener('click', tempHandler);
}

// 8. Event propagation demo
const outer = document.getElementById('outerDiv');
const inner = document.getElementById('innerDiv');
if (outer && inner) {
  outer.addEventListener('click', () => alert('Outer DIV clicked!'));
  inner.addEventListener('click', function(event) {
    alert('Inner DIV clicked!');
    event.stopPropagation();
  });
}

/*
============================
  End of Events Notes & Examples
============================
*/
