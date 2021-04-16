const fetch = require('node-fetch');

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index')
});

app.get('/api', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const test = await fetch('https://cat-fact.herokuapp.com/facts')
  const facts = await test.json();
  res.end(JSON.stringify(facts));
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
