/*  In html documents, we do have attributes associated with starting tag of any given element 
    <div id="box">this is a div</div>
    Like here, id is an attribute 

    class attribute:  used with (.)
    id attribute: used with (#)
*/

// .getAttribute(attr): This is used to get the attribute value 
// attr: It is the name of the attribute which we want to check for the element 
let attr=document.querySelector("div");
console.log(attr.getAttribute("id"));

let para=document.querySelector("p");
let attribute_val=para.getAttribute("class");
console.log(attribute_val);

// .setAttribute(attr, value): This is usedto set the attribute value 

let ano_div=document.querySelectorAll("div");
let attr1=ano_div[1].setAttribute("id","another_div");
console.log(ano_div[1].getAttribute("id"));

// node.style: we use this to change styling of any node 
attr.style.backgroundColor="yellow";
attr.style.fontSize="20px";

// .innerText: Used to change content of an html element
attr.innerText="div content";


//Insert Elements: We can also add element using javascript, before adding the element we have to create the element and then add the element 

//Creating a new element: let el=document.createElement("div");
let heading1=document.createElement("h1");
heading1.innerText="heading 1";
let heading2=document.createElement("h2");
heading2.innerText="heading 2";

/* Methods to add element
    node.append(el) // adds at the end of node(inside)
    node.prepend(el) // adds at the start of node(inside)
    node.before(el) // adds before the node(outside)
    node.after(el) // adds after the node(outside)
*/

let div=document.querySelectorAll("div");
div[0].append(heading1);
div[1].append(heading2);

let btn=document.createElement("button");
btn.innerText="click me";
div[1].before(btn); //adds button before the second div element 
div[1].after(btn); // adds button after the second div element 

// Note: We have created one button element and using it at two different position in DOM tree which isn't possible so the last one will be shown only, div[1].after(btn);


//Delete node: We can delete particular node from the DOM tree, first we need to select it then we can delete it using 
    // Node.remove() 
let para1=document.querySelector("p");
para1.remove();




// .children: This is used to get all the child elements of a node, it returns an HTMLCollection of all the child elements
let allDivs = document.querySelectorAll("div");
let childrenOfFirstDiv = allDivs[0].children;
console.log("Children of first div:", childrenOfFirstDiv);

// .parentElement: Get the parent of a node
let parentOfPara = para.parentElement;
console.log("Parent of <p>:", parentOfPara);

// .nextElementSibling and .previousElementSibling: Get next/previous sibling elements
let nextSibling = para.nextElementSibling;
let prevSibling = para.previousElementSibling;
console.log("Next sibling of <p>:", nextSibling);
console.log("Previous sibling of <p>:", prevSibling);

// Add a new class to a p tag using classList
let pTag = document.querySelector("p");
pTag.classList.add("highlight");
// Now the <p> tag will have the class "highlight" in addition to any existing classes

// classList methods
pTag.classList.remove("highlight"); // removes the "highlight" class
pTag.classList.toggle("highlight"); // adds "highlight" class if not present, removes if present

// Example: Add multiple classes at once
pTag.classList.add("big", "blue");
// Remove multiple classes
pTag.classList.remove("big", "blue");

// Check if a class exists
console.log("Does <p> have 'highlight'?", pTag.classList.contains("highlight"));

// Practice: Create a button that toggles a class on the <p> tag
let toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle highlight on paragraph";
toggleBtn.addEventListener("click", function() {
    pTag.classList.toggle("highlight");
});
document.body.append(toggleBtn);