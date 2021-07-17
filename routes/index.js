var express = require('express');
var fileSystem = require('fs').promises;
var router = express.Router();

/* GET home page. */
// /expenses/sum
router.get('/expenses/sum', async function (req, res, next) {
    try {
        let result = JSON.parse(await fileSystem.readFile(__dirname + "/expenses.json"))
        let sum = 0;
        for (let i = 0; i < result.expenses.length; i++) {
            //     "response": "0[object Object][object Object][object Object][object Object][object Object][object Object][object Object][object Object][object Object]"
            console.log(result.expenses[i])

            sum += result.expenses[i].expense;
        }
        res.status(200).send({response: sum})
    } catch (error) {
        console.log(error)
    }

})


router.post('/expenses', async function (req, res, next) {


    //{
    /*  {
        "expense":3000
      }*/
    // }


    /*  POST http://edcfcd65f668.ngrok.io/expenses
      {
        "expense":123
      }*/
    try {
        const newExpense = req.body
        let file = JSON.parse(await fileSystem.readFile(__dirname + "/expenses.json"));
        console.log(newExpense)
        console.log(file)
        // file = { expenses: [ { expense: 0 } ] }
        file.expenses.push(newExpense);
        console.log(__dirname)
        await fileSystem.writeFile(__dirname + "/expenses.json", JSON.stringify(file))

        res.status(200).send({response: file})

    } catch (error) {
        console.log(error)
    }
});


module.exports = router;
