/**
 * HelloController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/hello/index`
   *    `/hello`
   */
   index: function (req, res) {
    
    // Send a JSON response
//    return res.json({
//      hello: 'world'
//    });
//    return res.send('Hello, this is Sails!');
//    return res.send('<html><body>' + '<h1>Hello</h1>' + '<p>this is Sails sample page.</p>' + '<p>これはSailsを使ったサンプルページです。</p>' + '</body></html>', { 'Content-Type': 'text/html' }, 201);
//    return res.view();
//    return res.view({
//        title: 'Hello Page',
//        msg: '送られたID:' + req.query.id
//    });
//    return res.view({
//        title: 'Hello Page',
//        msg: '送られたID:' + req.params.id
//    });
    var msg = '何か送信してください。';
    var text1 = '';
    if (req.route.method == 'post') {
        text1 = req.body.text1;
        msg = "メッセージ:" + text1;
    }
    
    return res.view({
        title: 'Hello Page',
        msg: msg,
        text1: text1
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HelloController)
   */
  _config: {}

  
};
