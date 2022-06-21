const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

const getLetterCombos = require('./letterCombos')

app.use(cors())
app.use(express.json())


app.post('/phonewords', (req, res) => {
	const { numericStr } = req.body;

	if (!numericStr) {
		res.status(418).send({ message: 'provide a number' })
	}

	const result = getLetterCombos(numericStr);

	res.send({
		letterCombos: result
	})
})




app.listen(
	PORT,
	() => console.log(`it's alive on http://localhost:${PORT}`)
)