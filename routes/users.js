const express = require('express');
const router = express.Router();
const models  = require('shoppingmall-db-model');
const CommonResult = require('./domain/CommonResult');
const validate = require('express-validation');
const validation = require('./validation/user.js');

router.post('/', validate(validation.post), (req, res, next) => {
  return models.sequelize.transaction(t => {
    return models.userSso.findAll({
      where: {
        token: req.body.token,
        type:  req.body.type
      },
      transaction: t
    }).then(userSso => {
      if(userSso.length > 0) {
        return Promise.reject(new CommonResult('이미 가입된 아이디 입니다.'));
      }
      return models.user.add(req.body.name, req.body.mdn, req.gender ).save({transaction: t});
    }).then(user => {
      return models.userSso.add(user.id, req.body.type, req.body.token, req.body.secret).save({transaction: t});
    }).then(userSso => {
      models.user.find({where: {id: userSso.userId}, include: [models.userSso] },{transaction: t}).then(user =>{
        res.json(user);
        });
    });
  }).catch(err => {
    next(err);
  });
});
router.get('/login-id/:email', (req, res, next) => {
  return models.userSso.findAll({
    where : { type: 'LOGIN_ID', token: req.params.email},
    include: [models.user]
  }).then(users => {
    res.json(users);
  });
});

router.delete('/:id', (req, res, next) => {
  return models.sequelize.transaction(t => {
    return models.user.destroy({where:{
      id: req.params.id
    }},{transaction:t});
  }).then(() => {
    res.statusCode(200).json({});
  }).catch(err => {
    next(err);
  });
});

module.exports = router;