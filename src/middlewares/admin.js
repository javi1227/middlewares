module.exports = [
    function(req,res,next){

        let nombre = req.query.name

        switch (nombre) {
            case "Riquelme":
            case "Palermo":
            case "Bianchi":
            case "Tevez":
                    res.send("Hola admin " + nombre)
                break;
            default:
                    res.send("no tenes los privilegios para ingresar")
                break;
        }
        next()
    }
]
