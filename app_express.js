const express = require('express');
const app = express();
const accounts = require("./data/accounts");
const transactions = require("./data/transactions");
const customers = require("./data/customer");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


app.get('/', (req, res) => {
    res.render('index', { title: 'Customer Portal', customers: customers });
});
app.get('/accounts', (req, res) => {
    res.render('accounts', { title: 'Accounts', accounts: accounts });
});

app.get('/transactions', (req, res) => {
    res.render('transactions', { title: 'Transactions', transactions: transactions });
});

app.get('/createaccount', (req, res) => {
    res.render('createaccount', { title: 'Create Account' });
});

app.post('/createaccount', (req, res) => {
    const name = (req.body.name || '').trim();
    if (!name) {
        return res.status(400).render('createaccount', {
            title: 'Create Account',
            error: 'Name is required',
        });
    }

    const nextCustomerId = customers.length ? Math.max(...customers.map(c => c.id)) + 1 : 1;
    const nextAccountId = accounts.length ? Math.max(...accounts.map(a => a.id)) + 1 : 1;

    customers.push({ id: nextCustomerId, name });
    accounts.push({ id: nextAccountId, customerId: nextCustomerId, balance: 0,name:name });

    res.redirect('/accounts');
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Not Found' });
});

/****this is for create api using ndoe *****/ 
// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
// });
// app.get('/api/accounts', (req, res) => {
//     res.json(accounts);
// });

// app.get('/api/transactions', (req, res) => {
//     res.json(transactions);
// }); 

// app.get('/api/customers', (req, res) => {
//     res.json(customers);
// });

// app.get('/api/accounts/:id', (req, res) => {
//     const accountId = parseInt(req.params.id);
//     const accountData = accounts.find(acc => acc.id === accountId);     
//     if (accountData) {
//         res.json(accountData);
//     } else {
//         res.status(404).json({ error: 'Account not found' });
//     }
// });

// app.use((req, res) => {
//     res.status(404).json({ error: 'Not found' });
// });