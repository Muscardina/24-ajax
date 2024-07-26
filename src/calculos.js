exports.suma = (req, res) => {
    var sumando1 = Number(req.query.sumando1)
    var sumando2 = Number(req.query.sumando2)
    var suma = sumando1*2 + sumando2*2
    var sumaString = suma.toString()
    console.log(`Sumando ${sumando1} + ${sumando2} = ${sumaString}`)
    res.send(`--> ${sumaString} <--`)
}
