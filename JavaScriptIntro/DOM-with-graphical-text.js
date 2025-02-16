//Using canvas elements

//Step 1: build a canvas for holding image pixel information.
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

//Step 2: Get a two-dimensional drawing context
const ctx = canvas.getContext('2d');

//Step 3: Create a new image element
const img1 = new Image();

//Step 4: Set the source of the image and handle loading
img1.src = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg';
img1.onload = function () {
    // Step 4.1: Draw the image onto the canvas when it's loaded
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);

    // Step 4.2: Retrieve the pixel data from the canvas
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imageData); // This contains the image's pixel data
};

// Step 5: Add the canvas element to the page
document.body.appendChild(canvas);

// Using SVG

// Step 1: Create an SVG element container with dimensions
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '500');
svg.setAttribute('height', '300'); // Increased height to fit the image and text

// Step 2: Build a text element with desired positioning and font characteristics
const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '100'); // Set the horizontal position of the text
text.setAttribute('y', '50'); // Set the vertical position of the text
text.style.fontFamily = 'Times New Roman'; // Specify the font family for the text
text.style.fontSize = '50px'; // Specify the font size for the text

// Step 3: Add the actual text to display
text.textContent = 'Jambo Kenya!'; // The text content to be displayed

// Step 4: Add the text element to the SVG container
svg.appendChild(text);

// Step 5: Add an image inside the SVG container
const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
img.setAttribute('href', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_map_of_Kenya.svg'); // Link to the external image
img.setAttribute('x', '0'); // Set x position
img.setAttribute('y', '60'); // Set y position below the text
img.setAttribute('width', '500'); // Width of the image
img.setAttribute('height', '230'); // Height of the image

// Step 6: Append the image to the SVG container
svg.appendChild(img);

// Step 7: Add the SVG container to the HTML document
document.body.appendChild(svg);

