

// DOM (Document Object Model) Key Concepts
// The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document. This allows programming languages like JavaScript to manipulate the content and structure of web pages dynamically.

// --- Start of DOM Concepts ---
// 1. Selecting Elements
// To work with elements, you first need to select them from the DOM. There are several methods:

// - getElementById: Returns the element with the specified id (returns a single element or null).
let elementById = document.getElementById("myId"); // Example: <div id="myId"></div>

// - getElementsByClassName: Returns a live HTMLCollection of all elements with the given class name.
let elementsByClass = document.getElementsByClassName("myClass"); // Example: <p class="myClass"></p>

// - getElementsByTagName: Returns a live HTMLCollection of all elements with the given tag name.
let elementsByTag = document.getElementsByTagName("p"); // Example: <p></p>

// - querySelector: Returns the first element that matches a CSS selector.
let firstPara = document.querySelector("p"); // Example: <p></p>

// - querySelectorAll: Returns a static NodeList of all elements matching a CSS selector.
let allParas = document.querySelectorAll("p"); // Example: <p></p>


// 2. Changing Content
// Once you have selected an element, you can change its content:

// - innerText: Sets or returns the visible text content of a node (ignores hidden elements and scripts).
firstPara.innerText = "Changed text"; // Only text, no HTML tags are rendered

// - innerHTML: Sets or returns the HTML content inside an element (can include HTML tags).
firstPara.innerHTML = "<b>Bold text</b>"; // Renders as bold text

// - textContent: Sets or returns the text content of a node and its descendants (includes hidden elements, no HTML parsing).
firstPara.textContent = "Just text, no HTML"; // Only text, all tags are treated as text


// 3. Changing Styles
// You can change the style of elements directly using the style property:
firstPara.style.color = "blue"; // Changes text color to blue
firstPara.style.backgroundColor = "#f0f0f0"; // Changes background color


// 4. Attributes
// You can get or set attributes (like href, src, id, etc.) of elements:
let link = document.querySelector("a"); // Selects the first <a> tag
let href = link.getAttribute("href"); // Gets the value of the href attribute
link.setAttribute("target", "_blank"); // Sets the target attribute to _blank (opens link in new tab)


// 5. Creating and Adding Elements
// You can create new elements and add them to the DOM:

let newDiv = document.createElement("div"); // Creates a new <div> element (not yet in DOM)
newDiv.innerText = "I am a new div!"; // Sets its text content

document.body.append(newDiv); // Adds newDiv at the end of <body>
document.body.prepend(newDiv); // Adds newDiv at the start of <body>
// Note: An element can only exist in one place in the DOM at a time. If you append/prepend the same element, it moves.

// You can also insert elements relative to another element using before() and after():
let anotherDiv = document.createElement("div");
anotherDiv.innerText = "Inserted before and after newDiv!";
newDiv.before(anotherDiv); // Inserts anotherDiv before newDiv in the DOM
newDiv.after(anotherDiv);  // Moves anotherDiv after newDiv in the DOM
// Note: Like append/prepend, before/after moves the element if it already exists in the DOM.


// 6. Removing Elements
// To remove an element from the DOM, use remove():

newDiv.remove(); // Removes newDiv from the DOM


// 7. Class Manipulation
// The classList property allows you to add, remove, toggle, or check for classes on an element:

// Add a class
firstPara.classList.add("highlight"); // Adds the class 'highlight'

// Remove a class
firstPara.classList.remove("highlight"); // Removes the class 'highlight'

// Toggle a class (add if not present, remove if present)
firstPara.classList.toggle("active"); // Adds 'active' if not present, removes if present

// Check if a class exists
let hasClass = firstPara.classList.contains("active"); // Returns true if 'active' class exists

// Add multiple classes at once
firstPara.classList.add("big", "blue");

// Remove multiple classes at once
firstPara.classList.remove("big", "blue");

// Example: Toggle a class on button click
let toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle highlight on paragraph";
toggleBtn.addEventListener("click", function() {
    firstPara.classList.toggle("highlight");
});
document.body.append(toggleBtn);


// 8. Traversing the DOM
// You can navigate the DOM tree to find related elements:

// Get parent element
let parent = firstPara.parentElement; // The parent element of firstPara

// Get all child elements
let children = parent.children; // All child elements of the parent

// Get next and previous siblings
let next = firstPara.nextElementSibling; // The next sibling element after firstPara
let prev = firstPara.previousElementSibling; // The previous sibling element before firstPara

// Get the first and last child of a parent
let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;

// Loop through all children
for (let child of parent.children) {
    // Do something with each child
    // Example: console.log(child.tagName);
}

// Example: Find all ancestors of an element
let current = firstPara;
while (current.parentElement) {
    // console.log(current.parentElement.tagName);
    current = current.parentElement;
}


// 9. Event Delegation
// Instead of adding event listeners to many child elements, you can add one to a parent and use event.target
// Example: Click on any <li> in a <ul>
/*
let ul = document.querySelector('ul');
ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        alert('Clicked on: ' + event.target.innerText);
    }
});
*/

// 10. Creating and inserting HTML from string (use with care)
// innerHTML can be used to insert HTML, but be careful of XSS attacks
let divFromHTML = document.createElement('div');
divFromHTML.innerHTML = '<span style="color:green">This was added with innerHTML</span>';
document.body.append(divFromHTML);

// 11. Cloning nodes
// cloneNode(true) creates a deep copy of a node (with children)
let clonedDiv = newDiv.cloneNode(true);
document.body.append(clonedDiv);

// 12. Checking node type
// node.nodeType returns a number (1 for element, 3 for text, 8 for comment)
console.log('Type of firstPara:', firstPara.nodeType); // 1 means element

// 13. Remove all children of an element
// Example: Remove all children of a div
/*
while (newDiv.firstChild) {
    newDiv.removeChild(newDiv.firstChild);
}
*/

// 14. Get computed style
// window.getComputedStyle(element) returns the final used values of all CSS properties
let computed = window.getComputedStyle(firstPara);
console.log('Computed color of firstPara:', computed.color);

// 15. Set multiple styles at once
Object.assign(firstPara.style, {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    border: '1px solid #333'
});

// --- End of DOM Concepts ---