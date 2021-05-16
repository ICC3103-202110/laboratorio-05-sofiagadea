const {initModel} = require('./model'); //seria lo mismo que decir from model import initModel
const {view } = require('./view');

const {app} = require('./app')
const {update} = require('./update')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state,update,view)