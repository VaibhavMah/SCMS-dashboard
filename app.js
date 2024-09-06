const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

// Set the static folder for serving CSS and JS
app.use(express.static(path.join(__dirname, 'public')));

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
