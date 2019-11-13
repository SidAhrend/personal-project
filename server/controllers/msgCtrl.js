module.exports = {
  sendMsg: async (req, res) => {
    const db = req.app.get("db");
    const { 
        name, 
        email, 
        phone, 
        message 
    } = req.body;

    db.addMsg([
        name, 
        email, 
        phone, 
        message
    ])
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        res.status(500).send(err)
    });
  },
  
  getMsg: (req, res) => {
    const db = req.app.get('db');
    db.getMsgs()
    .then(response =>{
      console.log(response)
      res.status(200).send(response)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  },
  deleteMsg: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    db.deleteMsgs(id)
    .then((messages) => res.status(200).send(messages))
  }
};
