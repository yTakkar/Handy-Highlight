# Handy-Highlight

A very handy tool for highlighting the text & having fun with it - Inspired by [Medium](https://medium.com). Demo below!!

# Quick links
1. [Usage](#usage)
2. [Demo](#demo)
3. [API](#api)

# Usage
1. Install with `npm` or `Yarn`.

    ```
    npm install handy-highlight
    ```
    or
    ```
    yarn add handy-highlight
    ```

2. Add these `divs` to your markup.

    ```html
    <div id="cal1">&nbsp;</div>
    <div id="cal2">&nbsp;</div>
    <div id="handy-tooltip"></div>
    ```

3. Copy everything of `/highlight.css` into your stylesheet.

4. Here comes the fun part. Should be used on `mouseup` function on `window` object.

    ```javascript
    import Highlight from 'handy-highlight'
    window.onmouseup = function(){
        Highlight({
            onclick: function(){ /*YOUR STUFF HERE*/ },   // is executed when div is clicked
            text: "<b>Hello, World</b>"   // Ignore this property if you want div's text to be highlighted text
        });
    }
    ```

# Demo
**Visit [this](https://codesandbox.io/s/6xv0xq3o53) link for the demo!!**

# API
```javascript
Highlight(options:Object)
options = {
    extraTop:Number,
    extraLeft:Number,
    text:String,
    onclick:Function
}
```

<dl>
  <dt>extraTop:</dt>
  <dd>Add some extra top to the div.</dd>

  <dt>extraLeft:</dt>
  <dd>Add some extra left to the div.</dd>

  <dt>text:</dt>
  <dd>Text of the div. Ignore this property if you want div's text to be the highlighted text.</dd>

  <dt>onclick:</dt>
  <dd>Function to be executed when clicked on the div.</dd>
</dl>

**Thnx for reading!!**
