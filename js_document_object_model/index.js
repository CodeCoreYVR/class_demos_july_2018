// JS: Document Object Model

// Selecting Nodes

// In the following, <node> can be replaced with
// any node object or the `document` object.

// <node>.querySelector(<css-query>)
// Finds the **first** node that matches the <css-query>.
// Replace <css-query> with any valid CSS selector
// (written as string).

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <node>.querySelectorAll(<css-query>)
// Finds ALL nodes that match the <css-query>.
// It returns the nodes in an object called a NodeList
// which can iterated with `for .. of` loops and
// the `.forEach()`.

const allDoggos = document.querySelectorAll(".doggo");
const allTeams = document.querySelectorAll(".team");

// Iteration example:

// for (let node of allDoggos) {
//   console.log(node.id);
// }

// <node>.nextElementSibling
// Returns the node after <node>

const bumbleBertha = toxicTim.nextElementSibling;
const ninaTheNinja = toxicTim.nextElementSibling.nextElementSibling;

// <node>.previousElementSibling
// Returns the node before <node>

toxicTim.previousElementSibling === null; // true
// toxicTim doesn't have a node before itself

// <node>.parentElement
// Returns the parent node of <node>

teamSalmon === toxicTim.parentElement.parentElement; // true

// <node>.children
// This property returns the children nodes of <node>
teamSalmon.children;
teamSalmon.children[1].children;

// <node>.matches(<css-query>)
// Returns `true` if <node> matches the <css-query>;
// `false`, if it doesn't.

toxicTim.matches("div"); // true;
toxicTim.matches("form"); //  false;
toxicTim.matches("#toxic-tim"); // true;
toxicTim.matches("dim#toxic-tim"); // false;
toxicTim.matches("div#toxic-tim"); // true;

// <node>.closest(<css-query>)
// Searches all ancestors of <node> including itself
// for the first that matches <css-query>. It returns
// `null` if no ancestor matches <css-query>.
// Like a reverse, .querySelector(...)

toxicTim.closest(".team"); // <div class=​"team salmon">​…​</div>​
toxicTim.closest("input"); // null
toxicTim.closest("body"); // <body>​…​</body>​
toxicTim.closest(".team.teal"); // null

// Manipulation

// Styling Inline Styles

// Nodes have a `style` property that can be used to
// manipulate the inline styles of an HTML element.
// This is the same as adding CSS to the "style"
// attribute.

// Examples:
toxicTim.style.border = "20px solid aquamarine"; // "20px solid aquamarine"

// For properties composed of multiple words, use
// camelCase instead of kebab-case when referring
toxicTim.style.borderRadius = "10px"; // "10px"
toxicTim.style.borderRadius = "20px"; // "20px"

// Or, use [] notation instead
toxicTim.style["background-color"] = "blue"; // "blue"
toxicTim.style["borderRadius"] = "30px"; // "30px"

// Sometimes its necessary to read the actual applied
// CSS properties on a Node. To do this, use the global
// function `getComputedStyle(<node>)`

getComputedStyle(toxicTim);
getComputedStyle(toxicTim).backgroundColor;
getComputedStyle(toxicTim).fontFamily;

// Changing and Reading Contents of a Node

// <node>.innerHTML
// This property contains all of the HTML content
// of <node>. It can be assigned to to replace the contents
// as well.

toxicTim.innerHTML; // <h1>Toxic Tim</h1>

toxicTim.innerHTML = "<h1>Toxic Ted</h1>";
// Replaces toxicTim's contents with the above string.

// <node>.outerHTML
// Like, <node>.innerHTML, but includes the
// <node> itself.

// Reading and Writing to HTML5 Attributes

// All common HTML attributes that are part of the spec
// are accessible as properties of Nodes. You read them or
// assign them to change their values.

// Examples:
toxicTim.id; // "toxic-tim"
toxicTim.class; // undefined
toxicTim.className; // "doggo fighter"

// For custome attributes and all attributes, we must
// alternate methods.

// <node>.getAttribute(<attribute-name>)
// Returns the value of HTML attribute with name
// <attribute-name> from a Node even if its a custom
// attribute.

toxicTim.getAttribute("id");

// <node>.setAttribute(<attribute-name>, <value>)
// Sets a new attribute replaces an existing one with
// name of <attribute-name> giving a value of <value>.

toxicTim.setAttribute("data-confirm", "Are you sure?");
toxicTim.getAttribute("data-confirm"); // "Are you sure?"

// <node>.removeAttribute(<attribute-name>)
// Removes attribute named <attribute-name> from <node>

// Manipulating Classes

// <node>.classList is a property that returns
// a DOMTokenList with methods to add, remove or toggle
// classes that are part of <node>.
// You should use this most of the time when working with
// classes instead of <node>.className

// <node>.classList.add(<class-name>, <class-name>, ...)
// Adds all <class-name> arguments as classes to
// <node>

toxicTim.classList.add("labourer");

// <node>.classList.remove(<class-name>, <class-name>, ...)
// Removes any number of <class-name> arguments from <node>

toxicTim.classList.remove("fighter", "labourer");

// <node>.classList.toggle(<class-name>)
// Toggles <class-name> from <node>

// "labourer" is present therefore, its removed
toxicTim.classList.toggle("labourer"); // false
// "labourer" is present therefore, its added
toxicTim.classList.toggle("labourer"); // true
toxicTim.classList.toggle("labourer"); // false

// Remove Nodes

// <node>.remove()
// Removes <node> from the DOM
// toxicTim.remove()

// Exercise: Vandalise the Arena

// 1.

// for (let node of document.querySelectorAll(".team")) {
//   node.style.backgroundColor = "fuchsia";
// }

// 2.

// document.querySelectorAll(".team .doggo").forEach(node => {
//   node.innerHTML = "<h1>Rob The Slob</h1>";

//   // 3.
//   node.style.backgroundImage = `url(https://i.imgur.com/V59Xzw8.jpg)`;
// });

// Creating Nodes

// document.createElement(<tag-name>)
// To create a node, use the method above with the name
// of tag (e.g. p, div, form, a...).

const drillBitDarel = document.createElement("div");

drillBitDarel.id = "drill-bit-darel";
drillBitDarel.classList.add("doggo", "fighter");
drillBitDarel.style.backgroundImage = `url(./images/drill_bit_darel.jpg)`;

// <parent-node>.append(<child-node>)
// Adds <child-node> as the last of <parent-node>

const h1 = document.createElement("h1");
h1.innerText = "Drill Bit Darel";
drillBitDarel.append(h1);

// <parent-node>.prepend(<child-node>)
// Adds <child-node> as the first child of <parent-node>

teamSalmon.querySelector(".roster").prepend(drillBitDarel);

// <node>.cloneNode(<deep?>)
// To make copies of <node>, use the cloneNode method.
// This will duplicate without its descendents unless
// `true` is given as its argument.

teamSalmon.querySelector(".roster").prepend(drillBitDarel.cloneNode(true));
