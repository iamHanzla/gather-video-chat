require('dotenv').config();
const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
})

const users = {};
const socketToRoom = {};
const socketToPosition = [];

io.on('connection', socket => {
    socket.on("join room", roomID => {
        if (users[roomID]) {
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }

        socketToRoom[socket.id] = roomID;
        socketToPosition.push({ id: socket.id, room: roomID, x: 400, y: 100 })
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id);
        socket.emit("all users", usersInThisRoom);
    });

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    socket.on('send message', (data) => {
		socket.broadcast.emit('receive message', data)
	})

	socket.on('send move', (data) => {
        let me = {};
        for (let i = 0; i < socketToPosition.length; i ++) {
            if (socketToPosition[i].id === data.id) {
                socketToPosition[i].x = data.x;
                socketToPosition[i].y = data.y;
                me = socketToPosition[i];
                break; 
            }
        }
        let tempPositions = socketToPosition.filter(pos => pos.room === data.room);
		socket.broadcast.emit('receive move', { all: tempPositions, me: me });
	})

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = users[roomID];
        if (room) {
            room = room.filter(id => id !== socket.id);
            users[roomID] = room;
        }
        delete socketToPosition[socket.id];
        socket.broadcast.emit('user left', socket.id);
    });

});

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

const port = rocess.env.PORT || 3001;
server.listen(port, () => console.log(`server is running on port 3001 ${ port }`));

// require('dotenv').config();
// const express = require("express");
// const http = require("http");
// const app = express();
// const cors = require("cors");
// const { Server } = require("socket.io");

// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server, {
// 	cors: {
// 		origin: "*",
// 		methods: ["GET", "POST"],
// 	},
// })

// const users = {};
// const socketToRoom = {};
// const socketToPosition = [];

// io.on('connection', socket => {
//     socket.on("join room", roomID => {
//         if (users[roomID]) {
//             users[roomID].push(socket.id);
//         } else {
//             users[roomID] = [socket.id];
//         }

//         socketToRoom[socket.id] = roomID;
//         socketToPosition.push({ id: socket.id, room: roomID, x: 400, y: 100 });
//         const usersInThisRoom = users[roomID].filter(id => id !== socket.id);
//         socket.emit('all users', usersInThisRoom);
//     });

//     socket.on("sending signal", payload => {
//         io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
//     });

//     socket.on("returning signal", payload => {
//         io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
//     });

//     socket.on('send message', (data) => {
// 		socket.broadcast.emit('receive message', data)
// 	})

// 	socket.on('send move', (data) => {
//         let me = {};
//         for (let i = 0; i < socketToPosition.length; i ++) {
//             if (socketToPosition[i].id === data.id) {
//                 socketToPosition[i].x = data.x;
//                 socketToPosition[i].y = data.y;
//                 me = socketToPosition[i];
//                 break; 
//             }
//         }
//         let tempPositions = socketToPosition.filter(pos => pos.room === data.room);
// 		socket.broadcast.emit('receive move', { all: tempPositions, me: me});
//         io.to(data.id).emit('receive move', { all: tempPositions, me: me });
// 	})

//     socket.on('disconnect', () => {
//         const roomID = socketToRoom[socket.id];
//         let room = users[roomID];
//         if (room) {
//             room = room.filter(id => id !== socket.id);
//             users[roomID] = room;
//         }
//         socket.broadcast.emit('user left', socket.id);
//     });
// });

// server.listen(3001, () => console.log('server is running on port 3001'));