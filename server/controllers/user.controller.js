// import user model 
// import User from '../models/user.model';


const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    res.status(200).json({ message: "register" })
  } catch (error) {
    const err = new Error();
    err.message = "Error: " + error.message;
    err.statusCode = 401;
  }
}