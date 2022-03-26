const checkAuth = (req, res, next) => {

        console.log('desde mi middleware');
        next();
};

export default checkAuth;