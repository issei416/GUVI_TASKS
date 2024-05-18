# Window vs Document Objects

_Before moving to the topic we must understand that both window and document object are present only in **Browser js engine** and not in any stripped js such as Node.js._
### window object :
This object represents the entire window or frame that dsiplays the content, in other words window object is a **TOP LEVEL OBJECT** / **GLOBAL OBJECT**.window is the topmost object in the hierarchy.

### Document object :
Document is an object representing the html document of the browser window/frame. Unlike window document is not a top level object, it is a **Property of window object**.since it's not a global object it cannot access the elements that are outside document.

```js
window              // window is a global object
document            // document is a property of window
window.document     // remember that document is not a method  
                    // but an object sowindow.document() is wrong
```

### Key differences between window & document


| Window | Document |
|:------|:--------|
|<h4>scope:</h4>window is a top level object so the scope of <br>this object is global and represents entire frame/window.| <h4>scope:</h4> Since document is a child of window it only represets the DOM. |
|<h4>functionlaity:</h4> window handles the tasks like,<br><ul><li>managing the size</li><li>Navigation</li><li>User Interface</li></ul>for content outsite the DOM.|<h4>functionlaity:</h4>Whereas, document structure ficuses on<br><ul><li>providing structure to document</li><li>managing the content in document</li><li>provide methods and properties to manipulate the document</li></ul>|
| <h4>properties:</h4> Properties of the window manages the window using these properties:<br><ul><li>window.innerwidth</li><li>window.location</li><li>window.navigator</li><li>window.document</li></ul>| <h4>properties:</h4> Below are some properties of document object which can be used to acces the objects on DOM tree,such as:<br><ul><li>document.body</li><li>document.title</li><li>document.nav</li><li>document.images</li></ul>|
| <h4>methods:</h4> methods in window object can be useful in interacting with the frame,such as:<br><ul><li>window.alert()</li><li>window.open()</li><li>window.setTimeout()</li></ul>| <h4>methods:</h4> methods in document object are used to interact and manipulate elements in DOM tree,such as:<br><ul><li>document.getElementByTd()</li><li>document.querySelector()</li><li>document.appendChild()</li></ul>|
| <h4>Events:</h4> events in window object is used to monitor the events on elements or changes outside DOM, such as:<br><ul><li>window.onload</li><li>window.onresize</li></ul> | <h4>Events:</h4> events related to document object are:<br><ul><li>document.onload</li><li>document.onDOMContentLoaded</li></ul> these events does not have access to changes outside DOM content|









