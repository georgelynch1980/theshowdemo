/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    add: function (req, res, next) {

        return res.view('add', {
            layout: 'layout'
        });

    },
    create: function (req, res, next) {
        var params = req.params.all();

        Projects.create(params, function (err, data) {
            if (err) return next(err);
            return res.view('add', {
                layout: 'layout'
            });

        });

    },
    find: function (req, res, next) {

        Projects.find(function (err, data) {
            if (data === undefined) return res.notFound();
            if (err) return next(err);
            res.json(data);
        });
    }
};