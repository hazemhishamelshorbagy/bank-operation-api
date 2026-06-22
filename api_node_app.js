const http = require("http");
const fs = require("fs");
const accounts = require("./data/accounts");
const transactions = require("./data/transactions");
const customers = require("./data/customer")
const server = http.createServer((req, res) => {

    if (req.url === "/api/accounts") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(accounts));
        return;
    } else if (req.url === "/api/transactions") {

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(transactions));
        return;
    } else if (req.url === "/api/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
        return;
    } else if (req.url === "/api/customers") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(customers));
        return;
    } else if (req.url.startsWith('/api/accounts/')) {
         const accountId =req.url.split("/").pop();
        const accountData = accounts.find(acc => acc.id === parseInt(accountId));
        if (accountData) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(accountData));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Account not found" }));
        }
    }
    
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Not found" }));
    }
});

server.listen(3000, "localhost", () => {
    console.log("Server is running on port 3000");
});
