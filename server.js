const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const gameDetails = require('./controllers/gameDetails');
const company = require('./controllers/company');

app.get('/', (req, res) => {
  res.send('Root working');
});

app.get('/company', async (req, res) => {
  console.log(await company.handleCompanyGet(req, res));
  return res.json(await company.handleCompanyGet(req, res));
});

app.post('/gameDetails', async (req, res) => {
  await gameDetails.handleGameDetailsPost(req, res);
});

app.listen(process.env.PORT || 2000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
