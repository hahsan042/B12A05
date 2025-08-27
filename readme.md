
- 📂 **GitHub Repository**: https://github.com/hahsan042/B12A05
- 🌐 **Live Link**: https://hahsan042.github.io/B12A05/index.html
  
 **Answer to questions:**
#1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
  **Ans:** getElementById() finds one element by its id.
getElementsByClassName() finds many elements that have the same class name.
querySelector() finds the first element that matches a CSS rule (like #id, .class, div p).
querySelectorAll() finds all elements that match a CSS rule.

#2. How do you **create and insert a new element into the DOM**?
 **Ans:** Frist of all i have to  create new div using document.createElement().
 then Set its text/attributes (like innerText, className).
 then Add it to the page using appendChild() / append() on a parent element.

#3. What is **Event Bubbling** and how does it work?
   **Ans:** Event bubbling means when you click on an element, the event first happens on that element and then "bubbles up" to its parent, then grandparent, and so on until it reaches the top (`document`). For example, if you click a button inside a div, the click event will run on the button first, then on the div, then on the body, and finally on the document. 

#4. What is **Event Delegation** in JavaScript? Why is it useful?
   **Ans :** Event Delegation means putting a single event listener on a parent element instead of many listeners on each child. Because of event bubbling, when a child is clicked, the event goes up to the parent, and the parent can check which child was clicked. It’s useful because it saves memory, makes code shorter, and also works for new elements added later.
#5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Ans:** preventDefault() is used when you want to stop the browser’s default behavior, like stopping a form from submitting or a link from opening. On the other hand, stopPropagation() is used when you want to stop the event from passing up to parent elements during bubbling. In short: one stops the browser’s action, the other stops the event from moving upward.





---

# Let's Code and Achieve your Dream 🎯
