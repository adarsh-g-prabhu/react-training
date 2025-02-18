const {ObjectId} =require('mongodb');

getAllData = async (req, res,db) => {
    try {
      const books = await db.collection('booksCollection').find({},{projection:{_id:0}}).toArray();
      console.log(books);
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).send("Error fetching books");
    }
  };



getSpecificBook=async(req,res,db)=>{
    const bookId= req.params.id;
    try {
        console.log(bookId)
        const books = await db.collection('booksCollection').findOne({_id:new ObjectId(bookId)});
        console.log(books);
        if(!books)
        res.json({message:'no books'})
        else
        res.json(books);
      } catch (error) {
        console.log('Error:', error);
        res.status(500).json({message:"Error fetching books"});
      }
    }

    addBook=async(req,res,db)=>{
        try{
        const data = req.body;
        await db.collection('booksCollection').insertOne(data);
        console.log('data got successfully.')
        res.status(200).json({message:'data posted'});
        }
        catch(err)
        {
            console.log('error:',err);
        }
    
    }
    
    updateBook= async(req,res,db)=>{
        
        try{
          const bookId=req.params.id;
        const updateData=req.body;
          const updatedBook=await db.collection('booksCollection').updateOne({_id:new ObjectId(bookId)},{$set:{updateData}})
       if(updatedBook)
       {
        res.status(200).json({message:'update successs'})
    }
    else{
        res.status(404).send({message:'Book doesnt exist'})
    }
    }
    catch(err)
    {
        console.log('error:',err)
    }
    }
    
    
    
      
    deleteBook=async(req,res,db)=>{
      try{
        const bookId=req.params.id;
      
        const deletedBook=await db.collection('booksCollection').deleteOne({_id:new ObjectId(bookId)})
     if(deletedBook)
     {
      res.status(200).json({message:'delete successs'})
  }
  else{
      res.status(404).send({message:'Book doesnt exist'})
  }
  }
  catch(err)
  {
      console.log('error:',err)
  }
    }
  


  module.exports={getAllData,getSpecificBook,updateBook,deleteBook,addBook}
