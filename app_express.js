const express = require('express');
const app = express();
const accounts = require("./data/accounts");
const transactions = require("./data/transactions");
const customers = require("./data/customer");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});
app.get('/api/accounts', (req, res) => {
    res.json(accounts);
});

app.get('/api/transactions', (req, res) => {
    res.json(transactions);
}); 

app.get('/api/customers', (req, res) => {
    res.json(customers);
});

app.get('/api/accounts/:id', (req, res) => {
    const accountId = parseInt(req.params.id);
    const accountData = accounts.find(acc => acc.id === accountId);     
    if (accountData) {
        res.json(accountData);
    } else {
        res.status(404).json({ error: 'Account not found' });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});