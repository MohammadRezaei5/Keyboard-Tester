const keyElements = document.querySelectorAll(".key");

const codeToKeyMap = new Map([
  ["Backspace", "⟵"],
  ["Tab", "Tab"],
  ["Enter", "Enter"],
  ["ShiftLeft", "L Shift"],
  ["ShiftRight", "R Shift"],
  ["ControlLeft", "L Ctrl"],
  ["ControlRight", "R Ctrl"],
  ["AltLeft", "L Alt"],
  ["AltRight", "R Alt"],
  ["CapsLock", "Caps Lock"],
  ["Space", ""],
  ["Digit0", "0"],
  ["Digit1", "1"],
  ["Digit2", "2"],
  ["Digit3", "3"],
  ["Digit4", "4"],
  ["Digit5", "5"],
  ["Digit6", "6"],
  ["Digit7", "7"],
  ["Digit8", "8"],
  ["Digit9", "9"],
  ["KeyA", "A"],
  ["KeyB", "B"],
  ["KeyC", "C"],
  ["KeyD", "D"],
  ["KeyE", "E"],
  ["KeyF", "F"],
  ["KeyG", "G"],
  ["KeyH", "H"],
  ["KeyI", "I"],
  ["KeyJ", "J"],
  ["KeyK", "K"],
  ["KeyL", "L"],
  ["KeyM", "M"],
  ["KeyN", "N"],
  ["KeyO", "O"],
  ["KeyP", "P"],
  ["KeyQ", "Q"],
  ["KeyR", "R"],
  ["KeyS", "S"],
  ["KeyT", "T"],
  ["KeyU", "U"],
  ["KeyV", "V"],
  ["KeyW", "W"],
  ["KeyX", "X"],
  ["KeyY", "Y"],
  ["KeyZ", "Z"],
  ["Semicolon", ";"],
  ["Equal", "="],
  ["Comma", ","],
  ["Minus", "_"],
  ["Period", "."],
  ["Slash", "/"],
  ["Backquote", "`"],
  ["BracketLeft", "["],
  ["Backslash", "\\"],
  ["BracketRight", "]"],
  ["Quote", "'"],
]);

// console.log(codeToKeyMap);

const getElements = (code) => {
  const textContent = codeToKeyMap.get(code);

  for (const element of keyElements) {
    if (element.textContent === textContent) {
      return element;
    }
  }
  return null;
};

const initializeEventListeners = () => {
  document.addEventListener("keydown", (e) => {
    // console.log("e.code", JSON.parse(JSON.stringify(e.code)));
    // console.log("e.key", JSON.parse(JSON.stringify(e.key)));
    // console.log("e.code", e.code);
    // console.log("e.key", e.key);

    const element = getElements(e.code);
    if (!element) return;

    element.classList.remove("key--selected");
    element.classList.add("key--held");
  });

  document.addEventListener("keyup", (e) => {
    // console.log("e.code", JSON.parse(JSON.stringify(e.code)));
    // console.log("e.key", JSON.parse(JSON.stringify(e.key)));
    // console.log("e.code", e.code);
    // console.log("e.key", e.key);

    const element = getElements(e.code);
    if (!element) return;

    element.classList.remove("key--held");
    element.classList.add("key--selected");
  });
};

const main = () => {
  initializeEventListeners();
};
main();
