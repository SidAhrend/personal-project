const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    console.log(username, password);

    let foundUser = await db.check_user([username]);
    console.log(foundUser);
    // foundUser = foundUser[0]
    if (foundUser[0]) {
      res.status(401).send("username already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    console.log('before')
    // db.register([username, password])
      
    

    db.query('insert into admin_table(username, password) values(${username}, ${hash})',
      {username, hash}
    ).then(admins => {
      res.status(200).send("user created");
    })
    .catch(err => console.log(err));
    console.log('after')
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    let foundUser = await db.check_user(username);
    console.log(req.body)
    foundUser = foundUser[0];
    console.log(foundUser) //undefined
    if (!foundUser) {
      res.status(401).send("username doesnt exist");
    } 
    console.log(foundUser) //undefined
    const authenticated = bcrypt.compareSync(password, foundUser.password);
    // console.log(password)

    if (authenticated) {
      delete foundUser.password;
      res.status(200).send("logged in");
    } else {
      console.log("wrong password");
      res.status(401).send("password is bad");
    }
  },
  

  logout: () => {
    localStorage.clear();
    window.location.href = "/admin-login";
  }
};
