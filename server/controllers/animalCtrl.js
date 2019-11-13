module.exports = {
  addAnimal: (req, res) => {
    const {
      species,
      breed,
      name,
      animal_age,
      location_id,
      gender,
      houseTrained,
      health,
      preference,
      bio,
      imageUrl
    } = req.body;
    const db = req.app.get("db");
    console.log(species);
    if (species === "dog") {
      db.addDogs([
        breed,
        name,
        animal_age,
        location_id,
        gender,
        houseTrained,
        health,
        preference,
        bio,
        imageUrl
      ]);
      res.sendStatus(200);
    } else if (species === "cat") {
      db.addCats([
        breed,
        name,
        animal_age,
        location_id,
        gender,
        houseTrained,
        health,
        preference,
        bio,
        imageUrl
      ]);
      res.sendStatus(200);
    }
  },
  getDogs: (req, res) => {
    const db = req.app.get("db");
    db.getAllDogs()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getCats: (req, res) => {
    const db = req.app.get("db");
    db.getAllCats()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getIndivDogs: (req, res) => {
    // console.log(req.params.id)
    // console.log(typeof req.id)
    const db = req.app.get("db");
    db.getIndivDog(req.params.id)
      .then(response => {
        // console.log(response)
        res.status(200).send(response[0]);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getIndivCats: (req, res) => {
    console.log(req.params.id)
    // console.log(typeof req.id)
    const db = req.app.get("db");
    db.getIndivCat(req.params.id)
      .then(response => {
        console.log(response)
        res.status(200).send(response[0]);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
