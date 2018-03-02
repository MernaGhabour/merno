var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/MernaController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/Merna/getProducts', productCtrl.getProducts);
router.get('/Merna/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/Merna/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/merna/createProduct', productCtrl.createProduct);
router.patch('/Merna/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/Merna/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
