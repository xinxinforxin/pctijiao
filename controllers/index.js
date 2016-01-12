module.exports = function(router) {

	router.get('/', function(req, res) {
		res.render('introduce/index');
	});
    router.get('/about', function(req, res) {
        res.render('introduce/pcAbout');
    });
    router.get('/security', function(req, res) {
        res.render('introduce/pcSecurity');
    });
    router.get('/join', function(req, res) {
        res.render('introduce/pcJoin');
    });

};