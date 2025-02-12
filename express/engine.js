
const express= require('express');
const app=express();
const fs = require('fs');
const path = require('path');

// Set the view directory
app.set('views', path.join(__dirname, 'views'));

// Define the custom template engine 'ntl'
app.engine('ntl', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    
    // Simple template replacement (replace placeholders with actual data)
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', `<h1>${options.message}</h1>`);
    
    return callback(null, rendered);
  });
});

// Set 'ntl' as the default view engine
app.set('view engine', 'ntl');


app.get('/', (req, res) => {
  res.render('index', { title: 'My Custom Template Engine', message: 'Hello, this is a message from Express!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
