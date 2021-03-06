const express = require('express');
const routes = express.Router();
const Tag =  require('./../controllers/TagController');
const Note = require('./../controllers/NoteController');
const Notebook = require('./../controllers/NoteBookController');
const User = require('./../controllers/UserController');

routes.get('/',(req,res) =>{
    res.send("hello world");
});

routes.get('/holi',(req,res) =>{
    res.json({"holi": "holi"});
});

routes.get('/user/666',(req,res) =>{
    res.json(
        {
        "name": "Steven",
        "lastName": "Morrisey",
        "id": "666",
        "pictureUrl": "https://pbs.twimg.com/profile_images/547081189123563520/XS7Otwwu.jpeg"
        }
    );
});

routes.get('/users',User.getAll);

routes.get('/notebooks',Notebook.getAll);
routes.post('/notebooks', Notebook.add);
routes.put('/notebooks/:id', Notebook.update);
routes.delete('/notebooks/:id', Notebook.del);

routes.get('/tags',Tag.getAll);
routes.post('/tags', Tag.add);
routes.put('/tags/:id', Tag.update);
routes.delete('/tags/:id', Tag.del);

routes.get('/notes', Note.getAll);
routes.post('/notes', Note.add);
routes.put('/notes/:id', Note.update);
routes.delete('/notes/:id', Note.del);


module.exports = routes;
