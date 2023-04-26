

const users = require('../data/index');

const listUsers = (req, res) => {res.json(users)
};

const showUser = (req, res) => {
    // const id = req.params.id;
    // res.json(users.id);
    const foundUser = users.filter(user => user.id === parseInt(req.params.id))
    if (foundUser.length === 0) {
        return res.status(404).json({
            error: 'User not found'
        })
    }
    res.json(foundUser);



};


const createUser = (req, res) => {
    
    let newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send('User Created');
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.filter(user => user.id === parseInt(id))
    if (foundUser.length === 0) {
        return res.status(400).json({
            error: 'User does not exist.'
        })
    }
    const index = users.findIndex((person)=> {
        return person.id == id;
    });
    if (foundUser.length == 0) {
       res.status(400).send('400: User does not exist.') 
    }
    
    
    users[index].name = "Justin Furstenfeld";
    users[index].occupation = "Musician";
    res.json(users[index])
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    if (foundUser.length === 0) {
        return res.status(400).json({
            error: 'User does not exist.'
        })
    }
    if (foundUser.length == 0) {
        res.status(400).send('400: User does not exist.') 
     }
    const index = users.findIndex((person)=> {
        console.log(person);
        return person.id == id;
    });
    console.log(index);
    if (index > -1) {
        users.splice(index, 1);
    }
    res.json({message: 'User deleted', data: users});
};

module.exports = {
    listUsers, showUser, createUser, updateUser, deleteUser
}