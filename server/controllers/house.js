let House=require('../models/house')

module.exports ={
  insert : function(req,res){
    House.create({
      "owner":req.body.owner,
      "price":req.body.price,
      "phone":req.body.phone,
      "image":req.body.image,
      "description":req.body.description,
      "address":req.body.address,
      "location":req.body.location
    },
    function(err,succ){
      if (err) {
        res.send(err)
      } else {
        res.send('insert data success')
      }
    })
  },
  views(req,res){
    House.find({},
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
  },
  view(req,res){
    House.findById(req.params.id,
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
  },
  edit(req,res){
    House.findById(req.params.id,
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          data.owner=req.body.owner||data.owner,
          data.price=req.body.price||data.price,
          data.phone=req.body.phone||data.phone,
          data.image=req.body.image||data.image,
          data.description=req.body.description||data.description,
          data.address=req.body.address||data.addresse,
          data.location.latitude=req.body.latitude||data.location.latitude,
          data.location.longitude=req.body.longitude||data.location.longitude
          data.save(function (err, data) {
               if (err) {
                   res.status(500).send(err)
               }
               res.send('update success');
           });
        }
      })
    },
    delete(req,res){
      House.findOneAndRemove({
        _id: req.params.id
      },
        function(err,data){
          if (err) {
            res.send(err);
          } else {
            res.send('data deleted');
          }
      })
    }


}
