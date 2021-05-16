function update(newAmount,newPercentaje,model){
    const signo = '$'
    return{
        ...model,
            amount: signo + newAmount,
            percentaje: newPercentaje + '%',
            tip: signo + (newAmount*(newPercentaje/100)),
            total: signo + (Number(newAmount) + Number(((newAmount)*newPercentaje/100)))
    }
}

module.exports = {
    update
}