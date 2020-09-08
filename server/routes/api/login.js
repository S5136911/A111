class User {
     
     constructor(username, birthdate, age, email, password) { //, valid) {
         this.username = username;
         this.birthdate = birthdate;
         this.age = age;
         this.email = email;
         this.password = password;
         this.valid = false //= valid; 
     }
 
 }
 
 module.exports = function(app) {
 
     var bodyParse = require('body-parser');
     app.use(bodyParse.json());
 
     app.post('/api/login', function(req, res) {
         console.log("sss");
         let users = [
             new User('user1', '4/5/19', 28, 'abc@com.au', '123'),
             new User('user2', '4/7/19', 20, 'abd@com.au', '123'),
             new User('user3', '4/9/19', 27, 'abe@com.au', '123')
            
         ];
 
         if (!req.body) {
             return res.sendStatus(400);
         }
         var customer = {};
         customer.email = req.body.email;
         customer.upwd = req.body.upwd;
        console.log(customer.email);
        console.log(customer.upwd);
         result = {}
 
         for (let i = 0; i < users.length; i++) {
             if (customer.email == users[i].email && customer.upwd == users[i].password) {
                 users[i].valid = true;
 
                 result.username = users[i].username;
                 result.birthdate = users[i].birthdate;
                 result.age = users[i].age;
                 result.email = users[i].email;
                 result.valid = users[i].valid;
             }
         }
         res.send(result);
     });
 }