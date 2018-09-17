// JS: Events & The Loop

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <node>.addEventListener(<event-name>, <listener-callback>)
// This method allows us to react to events that occur in the
// browse whether triggered by a user or another source.

// Its first arg. is a string that refers to an event name.
// You can get a list of supported event names from:
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second arg. is callback named "listener" that
// is called when the event is triggered.

// Demo: Clicks, Events & Properties

teamSalmon.addEventListener("click", function(event) {
  // The `event` object contains a host of usefull information
  // about the triggering including the state of the browser
  // at the time.

  // console.log(event);

  console.log("=====================");
  console.log("type:", event.type);
  console.log("target:", event.target);
  // The `target` property holds the node that originally
  // triggered the event. In the case of a "click" event,
  // this is the node where the cursor was located
  // at the time the click happened.
  console.log("currentTarget:", event.currentTarget);
  // The `currentTarget` property holds the node that has
  // the `.addEventListener` (or the node that is listening for
  // the event)
  console.log("this:", this);
  // `this` inside the listener will be same as `event.currentTarget`.
  // Avoid using `this` because it doesn't work with arrow functions or
  // it can be forcefully bound to other objects as well.
  // `event.currentTarget` is reliable and should always stay the same.
});

// Exercise: Last in Queue
// document.querySelector(".teams").addEventListener("click", event => {
//   const target = event.target;

//   if (target.closest(".doggo.fighter")) {
//     target.closest(".roster").append(target.closest(".doggo.fighter"));
//   }
// });

// document.querySelectorAll(".doggo.fighter").forEach(node => {
//   node.addEventListener("click", event => {
//     const currentTarget = event.currentTarget;

//     currentTarget.closest(".roster").append(currentTarget);
//   });
// });

// Mouse Events

document.querySelectorAll(".team .doggo").forEach(node => {
  node.addEventListener("dblclick", event => {
    // const currentTarget = event.currentTarget;
    // 👇 syntax sugar for above 👆
    const { currentTarget } = event;
    currentTarget.classList.toggle("inverted");
  });

  node.addEventListener("mousedown", event => {
    const { currentTarget } = event;
    currentTarget.classList.add("flipped");
  });

  node.addEventListener("mouseup", event => {
    const { currentTarget } = event;
    currentTarget.classList.remove("flipped");
  });

  node.addEventListener("mouseleave", event => {
    const { currentTarget } = event;
    currentTarget.classList.remove("flipped");
  });

  // Exercise: Crouching Mouse Hidden Doggo

  node.addEventListener("mouseenter", event => {
    const { currentTarget } = event;
    currentTarget.classList.add("monochromed");
  });

  node.addEventListener("mouseleave", event => {
    const { currentTarget } = event;
    currentTarget.classList.remove("monochromed");
  });
});

// Input & Form Events

const random = n => Math.ceil(Math.random() * n);
const playSound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll("#application-form input").forEach(node => {
  node.addEventListener("input", event => {
    const { currentTarget } = event;
    // To get the user inputed contents of an input, read the
    // `value` of the `currentTarget` presuming it is the `input`
    // tag. (or `select`, `textarea`, etc)
    // console.log(currentTarget.value);
    playSound().play();
  });
});

// Demo: Applicant's Avatar

document
  .querySelector("#application-form")
  .addEventListener("submit", event => {
    // Use `event.preventDefault()` method to
    // prevent event from triggering any of its normal
    // behaviour. This stops anchors from surfing to
    // its "href" and it prevents forms from making request
    // to its "action".
    event.preventDefault();
    // console.log(event);

    // To easily get all input values from a form's descendent
    // nodes, use the FormData contstructor with a form node
    // as its argument.
    const { currentTarget } = event; // form node
    const formData = new FormData(currentTarget);

    // To get a value of an input, use the `get` method on a
    // FormData object with the "name" attribute of the input.

    console.log(formData.get("name"));
    console.log(formData.get("picture-url"));
    console.log(formData.get("team-name"));

    // TO list all of the data inside of a FormData object,
    // you must iterator over its entries or transform it into
    // an array.

    console.log(Array.from(formData.entries()));

    const blankDoggo = document.querySelector(".doggo.blank");

    blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
    blankDoggo.querySelector("h1").innerText = formData.get("name");
  });

// Keyboard Events

document.addEventListener("keydown", event => {
  // console.log(event);

  const { keyCode, key, altKey, ctrlKey, shiftKey, metaKey } = event;
  console.log(
    "key:",
    key,
    "keyCode:",
    keyCode,
    "altKey:",
    altKey,
    "ctrlKey:",
    ctrlKey,
    "shiftKey:",
    shiftKey,
    "metaKey:",
    metaKey
  );

  // Demo: Shorcut to NyanCat
  if (keyCode === 78 && altKey && ctrlKey) {
    console.log("Going to NyanCat!");
    window.location.href = "http://nyan.cat";
  }
});

// How to submit form when a keyboard shortcut is pressed
document
  .querySelector("#application-form")
  .addEventListener("keydown", event => {
    // console.log("KeyDown inside form!");
    const { ctrlKey, keyCode, currentTarget } = event;

    if (ctrlKey && keyCode === 13) {
      currentTarget.submit();
    }
  });
