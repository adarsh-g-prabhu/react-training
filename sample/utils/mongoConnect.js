
const mongoose=require('mongoose');

const mongoConnect=()=>{
    try{
   const conn= mongoose.connect(process.env.MONGODB_URI);
   if (conn)
   {
    console.log('mongodb connected');
   }
   else{
    console.log('connection error');
   }
}
catch{
    console.log('error');
}
};

module.exports= mongoConnect