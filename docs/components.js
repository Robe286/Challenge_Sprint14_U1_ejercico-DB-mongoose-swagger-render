const Task = require("../models/Task");

module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type:'objectId',
                        description: "user identification number",
                        example: "654547"
                    },
                    title: {
                        type: 'string',
                        description: "titulo de la tarea",
                        example: "comprar platanos"
                    },
                    completed: {
                        type: 'boolean',
                        description: 'chequeo de tarea realizada',
                        example: "true"
                    }
                }
            }
        }
    }
}