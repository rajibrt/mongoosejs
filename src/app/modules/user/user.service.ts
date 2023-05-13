import User from "./user.model";

export const createUserToDB = async () => {
    const user = new User({
        id: '789',
        role: "student",
        password: 'password3',
        name: {
            firstName: "Tumpa.",
            middleName: "Rida",
            lastName: "Raisha",
        },
        dateOfBirth: "28-02-2011",
        gender: "male",
        email: "rajibrt@gmail.com",
        contactNo: "01711380679",
        emergencyContactNo: "01911834587",
        presentAddress: "Dhaka",
        permanentAddress: "Jessore",
    });
    await user.save();
    console.log(user)
    return user;
}