/**
 * Created by Paulius on 11/11/2016.
 */
const routes = require('express').Router();

var accountCtrl = require('./controllers/creationController')
var mulesCtrl = require('./controllers/mulesCtrl')
var activeAccountCtrl = require('./controllers/activeAccountCtrl')
var scriptsCtrl = require('./controllers/scriptCtrl')

routes.get('/api/accounts', accountCtrl.getAccounts)

routes.get('/api/getAllAccounts', activeAccountCtrl.getAllAccounts)

routes.delete('/api/removeAccount/:id', accountCtrl.removeAccount)

routes.get('/api/getByServer/:id', accountCtrl.getByServer)

routes.get('/api/getMules', mulesCtrl.getMules)

routes.get('/api/getActiveAccount/:id', activeAccountCtrl.getActiveAccount)

routes.get('/api/getScripts', scriptsCtrl.getScripts)

module.exports = routes