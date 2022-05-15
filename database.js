const mysql=require('mysql');
const dotenv=require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.INSTANCE_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

connection.connect(function (err){
if(!err) {
    console.log("Conexiune realizata cu succes");
}
else {
    console.log("Nu s-a putut realiza conexiunea" + err );
}

});

module.exports=connection;