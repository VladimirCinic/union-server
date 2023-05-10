const express = require('express');
const stripe = require('./routes/stripe');
const validityCheck = require('./routes/validityCheck')
const passportIdCheck = require('./routes/passportCheck')
const countries = require('./routes/countriesRouter')
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/stripe', stripe);
app.use('/api/register',validityCheck)
app.use('/api/passport',passportIdCheck)
app.use('/api',countries)

app.get('/',(req,res)=>{
  res.send('<h1>Server is online</h1>')
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
