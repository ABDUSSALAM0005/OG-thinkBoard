// import mongoose from "mongoose"

// export const connectDB = async () => {
//     try{
//      await mongoose.connect(process.env.MONGO_URI);
//      console.log('MONGODB CONNECTED SUCCESSFULLY')
//     }catch (error) {
//      console.error('Error connecting to MONGODB', error)
//      process.exit(1);
//     }  
// }

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const uri = process.env.ENVIRONMENT === "online"
//       ? process.env.MONGO_URI_ATLAS
//       : process.env.MONGO_URI_LOCAL;

//     await mongoose.connect(uri);

//     console.log("MONGODB CONNECTED SUCCESSFULLY VIA :", process.env.ENVIRONMENT);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  const atlasURI = process.env.MONGO_URI_ATLAS;
  const localURI = process.env.MONGO_URI_LOCAL;

  try {
    // Try connecting to Atlas first
    await mongoose.connect(atlasURI);
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.warn("Could not connect to Atlas, falling back to local MongoDB...");
    try {
      await mongoose.connect(localURI);
      console.log("Connected to local MongoDB!");
    } catch (localError) {
      console.error("Failed to connect to local MongoDB as well:", localError);
      process.exit(1);
    }
  }
}; 

