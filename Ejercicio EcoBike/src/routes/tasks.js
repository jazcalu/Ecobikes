const router = require('express').Router();
const mongojs = require('mongojs');
//>>>


const db = mongojs('eco-db', ['tasks']);
//BUSCAR TODOS PRODUCTOS
router.get('/tasks', (req, res, next) => {

    db.tasks.find({}, (err, tasks) => {
        if (err) return next(err)
        res.json(tasks);
    });
    // res.send('TASK API');


});
//BUSCAR PRODUCTO X ID
router.get('/tasks/:id', (req, res, next) => {
    db.tasks.findOne({ id: mongojs.ObjectID(req.params.id) }, (err, task) => {
        if (err) return next(err)
        res.json(task);
    });
});
//ENVIAR PRODUCTOS
router.post('/tasks', (req, res, next) => {
    const task = req.body;
    if (!task.tiendaNom || !(task.isDone + '')) {
        res.status(400).json({
            error: 'Datos mal'
        });
    } else {
        db.tasks.save(task, (err, task) => {
            if (err) return next(err)
            res.json(task);
        });
    }
});
// BORRAR DATOS
router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({ _id: mongojs.ObjectID(req.params.id) }, (err, result) => {
        if (err) return next(err)
        res.json(result);
    });
});
//ACTUALIZAR PRODUCTOS
router.put('/tasks/:id', (req, res, next) => {
    const task = req.body;
    const updateTask = {};
    if (task.isDone) {
        updateTask.isDone = task.isDone;
    }
    if (task.tiendaNom) {
        updateTask.tiendaNom = task.tiendaNom;
    }
    if (task.productoNom) {
        updateTask.productoNom = task.productoNom;
    }
    if (task.productoCant) {
        updateTask.productoCant = task.productoCant;
    }
    if (task.productoPrec) {
        updateTask.productoPrec = task.productoPrec;
    }
    if (task.vendedorNick) {
        updateTask.vendedorNick = task.vendedorNick;
    }
    if (!updateTask) {
        res.status(400).json({
            error: 'Datos incompletos o inválidos'
        })
    } else {
        db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updateTask, (err, task) => {
            if (err) return next(err)
            res.json(task);
        });
    }
});

router.get('/charts', (req, res, next) => {
    
    res.send({ data: Math.floor(Math.random() * (1000 - 1) + 1), code: 200, error: false })
})

module.exports = router;
