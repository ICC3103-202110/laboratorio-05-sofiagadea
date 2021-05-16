const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')


function getTitle(){
        return chalk.whiteBright(
            figlet.textSync(
                'Tip Calculator App',
                {
                    horizontalLayout: "full",
                    font: 'big'
                }

            )
        )
}

function getTable(model){
    const {amount,percentaje,tip,total} = model
    return [{
        'Bill Amount': amount, 'Tip (%)': percentaje , 'Tip': tip, 'Total': total
    }]
}

function listForm(update){
    const message = "Bill amount?"
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message
    })
}

function inputForm(model){
    //const{input} = update
    return inquirer.prompt([
        {
            name: 'amount',
            type: 'input',
            message: 'Bill Amount?',
            validate: function(value){
                if((value) < 0){
                    return 'No puede ser menor a 0'
                }
                else {
                    return true
                }
            }

        },
        {
            name: 'percentaje',
            type: 'input',
            message: 'Tip(%)?',
            validate: function(value){
                if((value) < 0){
                    return 'No puede ser menor a 0'
                }
                else if(value> 100){
                    return 'El porcentaje debe ser menor a 100'
                }
                else {
                    return true
                }    
            }}
    ])
}



function view(update){
    return{
        title: getTitle(),
        table: getTable(update)
    }
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}


module.exports = {
    view,
    inputForm
}