import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

// Application routes
import userRoutes from './app/modules/user/user.route'

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user', userRoutes)


export default app;

// কোড simplify করার জন‍্য moudular করতে হবে। যেটা এর পূর্বের বোনাছ module এ দেখানো হয়েছে।
// প্রতিটা জিনিসকে আমরা আলাদা আলাদা ফাইলে নিয়ে যাব
// Best 2 Pattern MVC & Modular
/*
 Interface interface.ts
 Schema, Model -> model.ts

 route
 route function -> controller.ts
 Database Query Function -> service.ts
 */