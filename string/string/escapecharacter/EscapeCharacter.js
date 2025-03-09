// Using backslash to escape single quote
const str1 = 'Achieng\' said, "Go Away!"';
console.log("Escape single quote: ", str1);

// using backslash to escape double quote
const str2 = "She said, \"Go Away!\"";
console.log("Escape double quote: ", str2);

// Special attention must be given to escaping quotes if you're storing HTML representations within a String
const content = "<p class=\"special\">Hello World!</p>";
console.log("Escaping double quotes in a string stored in HTML using backslash: ", content);
const hello1 = '<p class="special">I\'d like to say "Hi"</p>';
console.log("Escaping single quotes in a string stored in HTML using backslash: ", hello1);

// Quotes in HTML strings can also be represented using &apos; (or &#39;) as a single quote
const hi = "<p class='special'>I'd like to say &quot;Hi&quot;</p>";
console.log("Escaping single quotes in a string stored in HTML using &apos: ", hi);

// Quotes in HTML strings can also be represented using &quot; ( or &#34;) as double quotes.
const hello2 = '<p class="special">I&apos;d like to say "Hi"</p>';
console.log("Escaping double quotes in a string stored in HTML using &quot: ", hello2);

/*
If a string has ' and " you may want to consider using template literals (also known as template strings in previous ES6 editions), which do not require you to escape ' and ".
These use backticks (`) instead of single or double quotes.
 */

// Using template literals
const hello3 = `<p class="special">I'd like to say "Hi"</p>`;
console.log("Using template literals in HTML: ", hello3);
const x = `"Escaping " and ' can become very annoying`;
console.log("Using template literals in JavaScript: ", x);