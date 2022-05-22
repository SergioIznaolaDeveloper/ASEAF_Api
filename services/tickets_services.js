

const parseBody = (body) => {
    const keys = Object.keys(body);
    const query = [];
    keys.forEach(key => {
        if (key === "nombre" && body["nombre"]) {
            query.push({$or: [{"member1.nombre": `${body["nombre"]}`}, {"member2.nombre": `${body["nombre"]}`}]})
        }
        else if (body[key]) {
            return query.push({ [key]: `${body[key]}` })
        }
        else {
            return
        }
    });
    return { $and : query}
}

// const parseBody = (body) => {
//     const keys = Object.keys(body);
//     const query = [];
//     keys.forEach(key => {
//         if (key === "nombre" && body["nombre"]) {
//             query.push({$or: [{"member1.nombre": `${body["nombre"]}`}, {"member2.nombre": `${body["nombre"]}`}]})
//         }
//         else if (body[key]) {
//             return query.push({ [key]: `${body[key]}` })
//         }
//         else {
//             return
//         }
//     });
//     return { $and : query}
// }

module.exports = {
    parseBody,
}