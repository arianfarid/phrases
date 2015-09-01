# phrases
A way to type defined phrases anywhere to fire off callback functions. Type anywhere except input fields to fire off a function!
# Using
Requre the source script in your HTML file. As of now, you'll need jquery for this to work...
```html
<script src="js/jquery.js"></script>
<script src="js/phrases.js"></script>
```

Then create a new Phrases object
```javascript
phrase = new Phrases();
```

You can add phrases one by one with an array containing the string and the function to execute...
```javascript
phrase.addPhrase(['lala', function(){console.log('la-la-la')}]);
```

or as an array containing arrays of strings and functions to execute...
```javascript
phrase.addPhrases([
  ['login', function(){openModalForLogin()}], 
  ['bottom', function(){window.scrollTo(0, document.body.scrollHeight)}],
  ['alert', function(){window.alert('Hi!')}],
  ]);
```

and then start watching on keypress!
```javascript
phrase.checkAllPhrases();
```

Oh, and these methods are chainable!
```javascript
  phrase = new Phrases().addPhrases([
  ['login', function(){openModalForLogin()}], 
  ['bottom', function(){window.scrollTo(0, document.body.scrollHeight)}],
  ['alert', function(){window.alert('Hi!')}],
  ]).checkAllPhrases();
```

#API

<h2>.addPhrase([name, function])</h2>
Add phrase to the list to be checked.
<h3>name</h3>
String containing what you would like to be typed.
<h3>function</h3>
A function containing the code you would like executed once run.

<h2>.addPhrases(array)</h2>
Add multiple phrases to the list to be checked.
<h3>array</h3>
An array containing arrays of names and functions.

<h2>.checkAllPhrases()</h2>
Start listening for typing.

