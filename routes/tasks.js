const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");

/*

## Endpoints de la API a documentar
- POST /create: Endpoint para crear una tarea.
- GET /: Endpoint para traer todas las tareas.
- PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
- DELETE /id/:_id: Endpoint para eliminar una tarea.

*/

//CREATE TASK
router.post("/create", async(req, res) => {
    try {
        const task = await Task.create({...req.body, completed: false });
        res.status(201).send({ message: "Task successfully created", task });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});

//GET TASKS

router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        console.error(error);
    }
});

//GET TASK BY ID

router.get("/id/:_id", async(req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the task with _id number: " +
                req.params._id,
        });
    }
}, )

//MARK TASK AS COMPLETED (en este endpoint no le permitimos que edite el titulo)

router.put("/markAsCompleted/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndUpdate(
                req.params._id, {
                    completed: true,
                }, { new: true }
            );
            res.send({ message: "Task successfully updated", task });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem trying to update the task with _id: " +
                    req.params._id,
            });
        }
    }),

    //UPDATE TASK

    router.put("/id/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndUpdate(req.params._id, req.body, { new: true })
            res.send({ message: "task successfully updated", task });
        } catch (error) {
            console.error(error);
        }
    }),

    //DELETE TASK

    router.delete("/id/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params._id);
            res.send({ message: "task deleted", task });
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .send({ message: "There was a problem trying to delete a task" });
        }
    })

module.exports = router;