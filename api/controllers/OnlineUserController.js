module.exports = {

    // Create a new user and tell the world about them.
    // This will be called every time a socket connects, so that each socket
    // represents one user--this is so that it's easy to demonstrate inter-user
    // communication by opening a bunch of tabs or windows.  In the real world,
    // you'd want multiple tabs to represent the same logged-in user.
    announce: function (req, res) {

        // Get the socket ID from the request
        var socketId = sails.sockets.getId(req);

        // Get the session from the request
        var session = req.session;

        // Create the session.users hash if it doesn't exist already
        session.users = session.users || {};

        var user = req.body;
        //user.socketId = socketId;
        //user.userId = user.id;
        //delete user.id;

        //console.log(user);

        OnlineUser.create({
            user: req.body.user,
            socketId: socketId
        }).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            }
            user.user = req.body.user;
            //console.log('user');

            // Save this user in the session, indexed by their socket ID.
            // This way we can look the user up by socket ID later.
            session.users[socketId] = user;
            console.log(session.users);

            // Subscribe the connected socket to custom messages regarding the user.
            // While any socket subscribed to the user will receive messages about the
            // user changing their name or being destroyed, ONLY this particular socket
            // will receive "message" events.  This allows us to send private messages
            // between users.
            OnlineUser.subscribe(req, user, 'message');

            // Get updates about users being created
            OnlineUser.watch(req);

            // Get updates about rooms being created
            Room.watch(req);

            // Publish this user creation event to every socket watching the User model via User.watch()
            OnlineUser.publishCreate(user, req);

            res.json(user);

        });


    }

};