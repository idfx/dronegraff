//var logoScript = 'RT 90 FD 200 RT 200'

module.exports = function(app, io, logodrone) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    //app.get('/api/nerds', function(req, res) {
    //    // use mongoose to get all nerds in the database
    //    Nerd.find(function(err, nerds) {
    //
    //        // if there is an error retrieving, send the error.
    //        // nothing after res.send(err) will execute
    //        if (err)
    //            res.send(err);
    //
    //        res.json(nerds); // return all nerds in JSON format
    //    });
    //});

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

    // Setup the ready route, and emit talk event.
    io.on('connection', function(socket){
        console.log('a user connected');
        io.emit('srvmsg', 'Connection request ACK. Type your code here...');

        setInterval(function(){
            var batteryLevel = logodrone.drone.battery();
            socket.emit('event', { name: 'battery',value: batteryLevel});
        },1000);

        socket.on('send2drone', function(msg){
            console.log('Request to send command to drone: ' + msg);
        //    Send commands to drone
            logodrone.convertAndSend(msg);
        });

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });

        socket.on('event', function (data) {
            if(data.name=="takeoff"){
                console.log("Browser asked Ar Drone to Take Off");
                logodrone.drone.takeoff();
            }

            if(data.name=="spin"){
                console.log("Browser asked Ar Drone to Start Spinning");
                logodrone.drone.clockwise(1);
            }

            if(data.name=="stop"){
                console.log("Browser asked Ar Drone to Stay and Hover");
                logodrone.drone.stop();
            }

            if(data.name=="land"){
                console.log("Browser asked Ar Drone to Land");
                logodrone.drone.land();
            }

        });
    });
};