module.exports={
    //get and add endpoints elsewhere...

    //delete doggo function
    deleteDogs: (req, res) =>{
        const db = req.app.get('db');
        const { id } = req.params;
        console.log('dog deleted', id)
        db.deleteDogs(id)
        .then((dogs) => res.status(200).send(dogs))
    },
    deleteCats: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        console.log('cat deleted', id)
        db.deleteCats(id)
        .then((cats) => res.status(200).send(cats))
    },
    editDogs: async (req, res) => {
        console.log('hit edit dogs')

        let db = req.app.get('db');
        const {
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
        const { id } = req.params;
        console.log(req.body)
        console.log(req.params)

        let data = await db.editDogs([
            id,
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
            ])
        console.log(data)
        res.status(200).send(data)
    },
    editCats: async (req, res) => {
        console.log('hit edit cats')

        let db = req.app.get('db');
        const {
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
        const { id } = req.params;
        console.log(req.body)
        console.log(req.params)

        let data = await db.editCats([
            id,
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
            ])
        console.log(data)
        res.status(200).send(data)
    }
}