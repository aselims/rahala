/**
 * GET /
 * Home page.
* app.get('/', function(request, response){
 *response.sendfile('yourhtmlpagename.html');
*});
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};
