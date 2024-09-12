import mongoose from "mongoose";
const mongoURI = `mongodb://localhost:27017/FoodApp`;
 const value = async () => {
    mongoose.connect(mongoURI);
    const connected = mongoose.connection;
    connected.once('open', async function() {
      console.log('Connected to MongoDB compass successfully');
      const collection = connected.db.collection('food_items');
      try {
        const documents = await collection.find({}).toArray();
        const collect = connected.db.collection('food_category'); 
      try {
        const catdata = await collect.find({}).toArray();
        global.food_items=documents;
        
        
        global.food_category=catdata;
      } catch{
        console.log("error");
        
      }
        
      } catch (err) {
        console.error('Error fetching documents:', err);
      }
    });
    
}

export default value;