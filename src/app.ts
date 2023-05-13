import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // Inserting a test data in mongodb
    /*
        Step 1: Interface
        Step 2: Schema
        Step 3: Model
        Step 4: Database Query
    */
    // res.send('Hello World!')
    // next();




    const createUserToDB = async () => {
        const user = new User({
            id: '787',
            role: "student",
            password: 'password2',
            name: {
                firstName: "Rubayat.",
                middleName: "Jimti",
                lastName: "Prathona",
            },
            dateOfBirth: "31-07-1992",
            gender: "male",
            email: "rajibrt@gmail.com",
            contactNo: "01711380679",
            emergencyContactNo: "01911834587",
            presentAddress: "Dhaka",
            permanentAddress: "Jessore",
        });
        await user.save();
        console.log(user)
    }
    createUserToDB();
})


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