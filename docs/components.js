module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type:'objectId',
                        description: "Task identification number",
                        example: "654547"
                    },
                    title: {
                        type: 'string',
                        description: "task to register",
                        example: "Swagger mola"
                    },
                    completed: {
                        type: 'boolean',
                        description: 'chequeo de tarea realizada',
                        example: false
                    }
                }
            }
        }
    }
}