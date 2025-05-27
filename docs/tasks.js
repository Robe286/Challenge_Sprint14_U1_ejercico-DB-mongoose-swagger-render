module.exports = {
    paths: {
        "/create": {
            task: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createUser",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                response: {
                    201: {
                        description: "Task created succesfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
    },
};