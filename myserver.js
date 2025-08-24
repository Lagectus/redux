// const http = require('http');
// const url = require('url');
// const crypto = require('crypto');

// let users = [];

// function sendJson(res, statusCode, data) {
//     res.writeHead(statusCode, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(data));
// }

// function parseBody(req) {
//     return new Promise((resolve, reject) => {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             try {
//                 const parsed = JSON.parse(body);
//                 resolve(parsed);
//             } catch (e) {
//                 reject(e);
//             }
//         });
//     });
// }

// const server = http.createServer(async (req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     const { pathname } = parsedUrl;

//     const method = req.method;
//     const path = parsedUrl.pathname;

//     if(method === "GET" && path === "/users"){
//         return sendJson(res, 200, users);
//     }
//     if(method === "GET" && path.startsWith("/users/")){
//         const id = path.split("/")[2];
//         const user = users.find(u => u.id === id);
//         if(!user){
//             return sendJson(res, 404, { error: "User not found" });
//         }
//         return sendJson(res, 200, user);
//     }
//     if(method === "POST" && path === "/users"){
//         try {
//             const body = await parseBody(req);
//             const { name, email } = body;
//             if(!name || !email){
//                 return sendJson(res, 400, { error: "Name and email are required" });
//             }
//             const id = crypto.randomBytes(16).toString("hex");
//             const newUser = { id, name, email };
//             users.push(newUser);
//             return sendJson(res, 201, newUser);
//         } catch (e) {
//             return sendJson(res, 400, { error: "Invalid JSON" });
//         }
//     }
//     if(method === "PUT" && path.startsWith("/users/")){
//         const id = path.split("/")[2];
//         const userIndex = users.findIndex(u => u.id === id);
//         if(userIndex === -1){
//             return sendJson(res, 404, { error: "User not found" });
//         }
//         try {
//             const body = await parseBody(req);
//             const { name, email } = body;
//             if(!name || !email){
//                 return sendJson(res, 400, { error: "Name and email are required" });
//             }
//             users[userIndex] = { id, name, email };
//             return sendJson(res, 200, users[userIndex]);
//         } catch (e) {
//             return sendJson(res, 400, { error: "Invalid JSON" });
//         }
//     }
//     if(method === "DELETE" && path.startsWith("/users/")){
//         const id = path.split("/")[2];
//         const userIndex = users.findIndex(u => u.id === id);
//         if(userIndex === -1){
//             return sendJson(res, 404, { error: "User not found" });
//         }
//         users.splice(userIndex, 1);
//         return sendJson(res, 204, null);
//     }
// })
// server.listen(3000, () => {
//     console.log("Server listening on port 3000");
// });