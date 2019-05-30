const path = require('path');
const cors = require('cors');
const express = require('express');
const socket = require('socket.io');
const app = express();
// const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//static
app.use(express.static(path.join(__dirname,'dist/front')));

//middlewares
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
// app.use(indexRoutes);
app.use('/api',tasksRoutes);
//

// app.use((err, req, res, next) => {
//      console.log(err.tasks || err.message);
//      if (res.headersSent)
//        return next(err)
//      res.status(500).send('Internal Server Error')
//    })

//INICIAR SERVIDOR 
const server = app.listen(app.get('port'), ()=>{
     console.log('server en puerto', app.get('port'));
})
//WEBSOCKETS
const SocketIo = require('socket.io');
const io= SocketIo(server);
let x = true;

//websockets
io.sockets.on('connection',(socket)=>{
     console.log(`new conection`);
    //  sendData(socket);
})

// function sendData(socket){
    
//      if(x){
//          socket.emit('data1', Array.from({length: 8}, () => Math.floor(Math.random() * 5)+ 10));
//          x = !x;
//      }else{
//          socket.emit('data2', Array.from({length: 8}, () => Math.floor(Math.random() * 5)+ 10));
//          x = !x;
//      }
//      console.log(`data is ${x}`);
//      setTimeout(() => {
//          sendData(socket);
//      }, 1000);
//  }