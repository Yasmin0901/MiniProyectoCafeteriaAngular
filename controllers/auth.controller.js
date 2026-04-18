exports.login = async(req,res)=>{

 const {email,password} = req.body;

 const [rows] = await db.query(
   "SELECT * FROM usuarios WHERE email=? AND password=?",
   [email,password]
 );

 if(rows.length === 0){
   return res.status(401).json({message:"Usuario incorrecto"});
 }

 res.json(rows[0]);
};