require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authCtrl = require('./controllers/authCtrl');
const msgCtrl = require('./controllers/msgCtrl');
const animalCtrl = require('./controllers/animalCtrl');
const editCtrl = require('./controllers/editCtrl');
const stripe = require('stripe')('sk_test_TjFjp2pLrGUoAhAmdrlEe7ed00gJSH7BUc')

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//app.use(session) will go here

//stripe endpoints
app.post('/stripe/checkout', async (req, res) => {
    console.log('request', req.body)

    let error;
    let status;
    try{
        const { product, token } = req.body;

        const customer = await stripe.customer.create({
            email: token.email,
            source: token.id
        });
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email,
                description: `purchased the ${product.name}`,
            },
        );
        console.log('charge:', {charge});
        status='success'
    } catch (error){
        console.log('error processing', error);
        status='failure'
    }
    res.json({ error, status });
});

//auth endpoints 
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)

//messages endpoints 
app.post('/contact/send', msgCtrl.sendMsg)
app.get('/contact/getAll', msgCtrl.getMsg)
app.delete('/contact/delete/:id', msgCtrl.deleteMsg)

//animal endpoints 
app.post('/animal/send', animalCtrl.addAnimal)
app.delete('/animal/dog/:id', editCtrl.deleteDogs) //delete dog endpoint
app.delete('/animal/cat/:id', editCtrl.deleteCats) //delete cat endpoint
app.put('/animal/dog/:id', editCtrl.editDogs) //update dogs endpoint
app.put('/animal/cat/:id', editCtrl.editCats) //update cats endpoint

//adoption page endpoints 
app.get('/adopt/getDogs', animalCtrl.getDogs)
app.get('/adopt/getCats', animalCtrl.getCats)
app.get('/adopt-dog/:id', animalCtrl.getIndivDogs)
app.get('/adopt-cat/:id', animalCtrl.getIndivCats)


const port = SERVER_PORT;
app.listen(port, () => console.log(`boolin on port ${port}`))