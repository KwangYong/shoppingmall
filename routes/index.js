const express = require('express');
const router = express.Router();
const models  = require('shoppingmall-db-model');

/* GET home page. */
router.get('/', function(req, res, next) {
  return models.sequelize.transaction((t) => {
    return models.user.create({

    }, {transaction: t}).then((user) => {
      return models.saleGroup.create({
        user_id : user.id
      },{transaction: t});
    }).then((salesGroup) => {
      res.json(salesGroup);
    });
  });

});



module.exports = router;