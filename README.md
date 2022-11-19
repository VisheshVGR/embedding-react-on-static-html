# Example of embedding React project on Statick HTML
The final output of a React project is 'build' folder which contains all assets (js, css, media), this is connected with html by inserting elements dynamically inside the 'root' div.
To load / embed react project onto static HTML, we just have to create a div with id="root" and load all react build assets.

## To Run
1. Download repository and install all node modules
```npm install```
2. Run ```node server.js``` to start server and then open index.html which requests all React build assets (excluding media) and embed them in our static HTML page.
