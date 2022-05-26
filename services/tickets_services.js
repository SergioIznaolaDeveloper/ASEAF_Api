const { capitalize, toBoolean, toNumber, parseSalary, toDate } = require('../utils/validations');

const parseCreateBody = (body) => {
    const keys = Object.keys(body);
    // console.log(body)    
    keys.forEach(key => {
        if (body[key] && (key === "nombre" || key === "apellidos" || key === "nombre2" || key === "apellidos2")) {
            return body[key] = capitalize(body[key]);
        }
        else if (body[key] && (key === "telefono" || key === "telefono2" || key === "miembros" || key === "metros_vivienda" || key === "numero_hijos" || key === "numero_acogida" || key === "tiempo_acogida")) {
            return body[key] = toNumber(body[key])
        }
        else if (body[key] && (key === "fecha_nacimiento" || key === "fecha_nacimiento2" || key === "fecha_profesion" || key === "fecha_profesion2" || key === "fecha_inicio_acogida" || key === "fecha_resolucion_acogida" || key === "fecha_asigsnacion_acogida")) {
            return body[key] = toDate(body[key])
        }
        else if (body[key] && (key === "salario" || key === "salario2")) {
            return body[key] = parseSalary(body[key])
        }
        else if (body[key] && (key === "acogida" || key === "asociado" || key === "quiere_asociado")) {
            return body[key] = toBoolean(body[key])
        }
    });
    // console.log(body)    
    return body
}

const parseFilterBody = (body) => {
    const keys = Object.keys(body);
    const filter = [];
    
    keys.forEach(key => {
        if (body[key] && (key === "acogida" || key === "asociado")) {
            return filter.push({ [key]: toBoolean(body[key]) })
        }
        else if (body[key] && key === "miembros") {
            return filter.push({ [key]: toNumber(body[key]) })
        }
        else if (body[key] && key === "salario") {
            return filter.push({ [key]: parseSalary(body[key]) })
        }
        else if (body[key]) {
            return filter.push({ [key]: body[key] })
        }
    });
    return filter.length ? {$and: filter} : {}
}

// const parseBody = (body) => {
//     const keys = Object.keys(body);
//     const query = [];
//     keys.forEach(key => {
//         if (key === "nombre" && body["nombre"]) {
//             query.push({ $or: [{ "miembro1.nombre": `${body["nombre"]}` }, { "miembro2.nombre": `${body["nombre"]}` }] })
//         }
//         else if (body[key]) {
//             return query.push({ [key]: `${body[key]}` })
//         }
//         else {
//             return
//         }
//     });
//     return { $and: query }
// }

module.exports = {
    parseFilterBody,
    parseCreateBody
}