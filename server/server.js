// const mysql = mongoose.connect(configDB.url); // MongoDB connection
//
// app.prepare().then(() => {
//     server.use((req, res, next) => {
//         req.mongodb = mongoDb
//         req.mysqldb = models
//         // Logging req.mysqldb/req.mongodb at this point gives the correct result.
//         next()
//     });
//
//     server.get('*', (req, res) => {
//         return handle(req, res)
//     })
// })
