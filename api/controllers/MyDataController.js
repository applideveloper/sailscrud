/**
 * MyDataController
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
    
        index : function(req, res) {
                MyData.find().done(function(err, mydatas) {
                        return res.view({
                                title : 'Index Page',
                                msg : 'MyDataの一覧リスト',
                                datas : mydatas
                        });
                });
        },
  
        add : function(req, res) {
//                return res.view({
//                        title : 'Add Page',
//                        msg : 'MyDataの新規作成'
//                });

          return res.view({
                  title : 'Add Page',
                  msg : 'MyDataの新規作成',
                  name : '',
                  mail : '',
                  // age : 0,
                  age : '',
                  // err : null
                  err : {}
          });
        },
        
//        create : function(req, res) {
//                MyData.create({
//                        name:req.body.name,
//                        mail:req.body.mail,
//                        age:req.body.age
//                }).done(function(err){
//                        res.redirect('/mydata');
//                });
//        },

        create : function(req, res) {
                MyData.create({
                        name : req.body.name,
                        mail : req.body.mail,
                        age : req.body.age
                }).done(function(err, mydata) {
                        if (err){
                                if (err.ValidationError){
                                return res.view('mydata/add',{
                                        title : 'Add Page',
                                        msg : '入力に問題があります。',
                                        name : req.body.name,
                                        mail : req.body.mail,
                                        age : req.body.age,
                                        err : err.ValidationError
                                });
                                } else {
                                        res.redirect('/mydata');
                                }
                        } else {
                                res.redirect('/mydata');
                        }
                });
        },


        edit : function(req, res) {
                MyData.findOne(req.query.id).done(function(err, mydata) {
                        if (err == undefined) {
                                return res.view({
                                        title : 'Edit Page',
                                        msg : 'MyDataの更新',
                                        mydata : mydata
                                });
                        } else {
                                res.redirect('/mydata');
                        }
                });
        },
  
        update : function(req, res) {
                MyData.update({
                        id : req.body.id
                }, {
                        name : req.body.name,
                        mail : req.body.mail,
                        age : req.body.age
                }, function(err) {
                        res.redirect('/mydata');
                });
        },

        del : function(req, res) {
                MyData.findOne(req.query.id).done(function(err, mydata) {
                        if (err == undefined) {
                                return res.view({
                                        title : 'Delete Page',
                                        msg : 'MyDataの削除',
                                        mydata : mydata
                                });
                        } else {
                                res.redirect('/mydata');
                        }
                });
        },


        destroy : function(req, res) {
                MyData.destroy({
                        id : req.body.id
                }).done(function(err) {
                        res.redirect('/mydata');
                });
        },

        find : function(req, res) {
                var msg = "検索テキストを入力：";
                var fstr = "";
                if (req.route.method == "post"){
                        fstr = req.body.fstr;
                }
//                MyData.findByName(fstr).done(function(err, mydatas) {
//                        return res.view({
//                                title : 'Find Page',
//                                msg : msg,
//                                fstr: fstr,
//                                datas : mydatas
//                        });
//                });

//          MyData.findByName({'contains':fstr}).done(function(err, mydatas) {
//                  return res.view({
//                          title : 'Find Page',
//                          msg : msg,
//                          fstr: fstr,
//                          datas : mydatas
//                  });
//          });
  
//          MyData.findByAge({'<=':fstr}).done(function(err, mydatas) {
//                  return res.view({
//                          title : 'Find Page',
//                          msg : msg,
//                          fstr: fstr,
//                          datas : mydatas
//                  });
//          });

//          MyData.find({
//                  name : {'contains' : fstr},
//                  age : {'>=' : 20}
//          }).done(function(err, mydatas) {
//                  return res.view({
//                          title : 'Find Page',
//                          msg : msg,
//                          fstr: fstr,
//                          datas : mydatas
//                  });
//          });

          MyData.find({
                  'or' : [
                          { name : {'contains' : fstr} },
                          {mail : {'contains' : fstr} },
                          {age : {'contains' : fstr} }
                  ]
          }).done(function(err, mydatas) {
                  return res.view({
                          title : 'Find Page',
                          msg : msg,
                          fstr: fstr,
                          datas : mydatas
                  });
          });

        },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MyDataController)
   */
  _config: {}

  
};
