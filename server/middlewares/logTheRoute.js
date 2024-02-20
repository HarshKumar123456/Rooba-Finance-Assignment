const logTheRoute = async (req,res,next) => {
    const timestamp = new Date().toISOString();
    const accessToken = req.headers.authorization || 'No Access Token'; // Assuming access token is in the authorization header
  
    console.log(`[${timestamp}] ${req.method}: ${req.originalUrl}, AccessToken: "${accessToken}"`);
    next(); // Pass control to the next middleware function
};

export default logTheRoute;