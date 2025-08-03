import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"


const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    console.log("find user", client.user)
    socket.send("Hi you are connected to the server")
})

