// polyfill for document.createRange
// this setup file t enable components as popper to work normally in test virtual dom.
if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: "BODY",
      ownerDocument: document
    }
  });
}
