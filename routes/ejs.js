
/*
 * GET users listing.
 */

exports.index = function(req, res){
	// from index:
	// res.render('index', { title: 'Express' });
	// from users:
	// res.send("blah blah");


	// var html = new EJS({url: 'cleaning.ejs'}).render(data);
	res.render('ejs', { title: 'EJS templated page', supplies: [1, 2, 5] });
};