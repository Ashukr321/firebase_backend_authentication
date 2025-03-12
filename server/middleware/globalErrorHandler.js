const gloablErrorHandler = (error,req,res,next)=>{
  const err = new Error();
  err.message = error.message|| "Invalid Server Errr";
  err.statusCode = error.statusCode||500;
  return next(err);
}

export default gloablErrorHandler;