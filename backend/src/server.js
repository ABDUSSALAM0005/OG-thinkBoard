import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import dotenv from 'dotenv';
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()



//middleware
if(process.env.NODE_ENV !== "production") {
app.use(cors({
    origin: "http://localhost:5173"
}))
}
app.use(express.json({ limit: "10kb" })); //this middleware will parse JSON bodies: req.body
app.use(ratelimiter);





//our simple custom middleware
app.use((req,res,next) => {
    console.log(`Req method ${req.method} & Req URL is ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(
      path.join(__dirname, "../frontend/dist")
    )
  );

  app.get("/.*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}


connectDB().then(() => {
    app.listen(PORT, () => {
    console.log('Listening on port',PORT);
});

})



// password:7VrKTLBDq2qmfa55

//mongodb+srv://abdussalamsuleiman2_db_user:7VrKTLBDq2qmfa55@cluster0.sia7pxl.mongodb.net/?appName=Cluster0