function isNotEmptyAndIsString(value){
    return !(value == null || value == undefined) && typeof value == 'string';
}

function isNotEmptyAndIsNumber(value){
    return !(value == null || value == undefined) && typeof value == 'number';
}

exports.body = (req, res, next) => {
    let method = req.method;
    if (method == "POST" || method == "PUT") {
      let data = req.body;
      if (
            (method == "POST"
            ? (data.id == null || data.id == undefined)
            : isNotEmptyAndIsNumber(data.id)) &&
                        isNotEmptyAndIsString(data.name) &&
                        isNotEmptyAndIsString(data.description) &&
                        isNotEmptyAndIsString(data.category) &&
                        isNotEmptyAndIsNumber(data.price)
            ){ next();
            } else {
            res.status(400).send({
            error: { status: 400, description: "Invalid object format." },
        }); }
        } else { next();
  } };