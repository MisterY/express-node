
/*
 * GET home page.
 */

exports.index = function(req, res){
	// todo: do stuff with filesystem.

	res.render('index', { title: 'Express' });
};