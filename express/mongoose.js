const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/newTestDb');
  const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
//   const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); 
const fluffy = new Kitten({ name: 'fluffy' });
// await fluffy.save();
// await silence.save();

// await Kitten.updateOne({name:'Silence'},{$set:{name:'Mike'}})

const kittens = await Kitten.find( );
// await Kitten.deleteOne({_id: '67b3336cf729b44d113f27c2'});
console.log(kittens);


}

main();
