module.exports = (req, res, next) => {
    req.context = {
        page: Number(req.query.page) || 1,
        limit: Number(req.query.limit) || 3,
        skip: req.query.skip || (req.query.page - 1) * req.query.limit || 0,
        search: req.query.search,
        searchTerm: req.query.searchTerm || req.query.q
    }
    next();
};
