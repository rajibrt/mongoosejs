import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload)
    // id: '781',
    // role: "student",
    // password: '$password3',
    // name: {
    //     firstName: "Tumpa.",
    //     middleName: "Rida",
    //     lastName: "Raisha",
    // },
    // dateOfBirth: "28-02-2011",
    // gender: "male",
    // email: "rajibrt@gmail.com",
    // contactNo: "01711380679",
    // emergencyContactNo: "01911834587",
    // presentAddress: "Dhaka",
    // permanentAddress: "Jessore",

    await user.save();
    console.log(user)
    return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
}