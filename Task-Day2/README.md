# Window vs Document Objects

_Before moving to the topic we must understand that both window and document object are present only in **Browser js engine** and not in any stripped js such as Node.js._
### window object :
This object represents the entire window or frame that dsiplays the content, in other words window object is a **TOP LEVEL OBJECT** / **GLOBAL OBJECT.**window is the topmost object in the hierarchy.

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
|<h4>scope:</h4>window is a top level object so the scope of this object is global and represents entire frame/window.| <h4>scope:</h4> Since document is a child of window it only represets the DOM. |
|<h4>functionlaity:</h4> window handles the tasks like,<br><ul><li>managing the size</li><li>Navigation</li><li>User Interface</li></ul>for content outsite the DOM.|<h4>functionlaity:</h4>Whereas, document structure ficuses on<br><ul><li>providing structure to document</li><li>managing the content in document</li><li>provide methods and properties to manipulate the document</li></ul>|
| <h4>properties:</h4>| <h4>properties:</h4>|
| <h4>Events</h4> | <h4>Events</h4>|










