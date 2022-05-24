const { validateName, validateNumber, validateEmail, validateString, capitalize, toBoolean, toNumber, parseSalary, toDate } = require('../utils/validations');

const parseCreateBody = (body) => {
    const form = body.formulario;
    const miembro1 = {
        nombre: capitalize(form.nombre),
        apellidos: capitalize(form.apellidos),
        nacionalidad: form.nacionalidad,
        telefono: toNumber(form.telefono),
        email: form.email,
        genero: form.genero,
        fecha_nacimiento: toDate(form.fecha_nacimiento),
        estado_civil: form.estado_civil,
        situacion_laboral: form.situacion_laboral,
        profesion: form.profesion,
        fecha_profesion: toDate(form.fecha_profesion),
        salario: parseSalary(form.salario),
    }
    const miembro2 = form.miembros === "1" ? null :
        {
            nombre: capitalize(form.nombre2),
            apellidos: capitalize(form.apellidos2),
            nacionalidad: form.nacionalidad2,
            telefono: toNumber(form.telefono2),
            email: form.email2,
            genero: form.genero2,
            fecha_nacimiento: toDate(form.fecha_nacimiento2),
            estado_civil: form.estado_civil,
            situacion_laboral: form.situacion_laboral2,
            profesion: form.profesion2,
            fecha_profesion: toDate(form.fecha_profesion2),
            salario: parseSalary(form.salario2),
        }
    const query = {
        miembros: toNumber(form.miembros),
        tipo: form.tipo,
        miembro1: miembro1,
        miembro2: miembro2,
        comunidad_autonoma: form.comunidad_autonoma,
        provincia: form.provincia,
        metros_vivienda: toNumber(form.metros_vivienda),
        acogida: toBoolean(form.acogida),
        numero_acogida: toNumber(form.numero_acogida),
        tiempo_acogida: toNumber(form.tiempo_acogida),
        tipo_acogida: form.tipo_acogida,
        fecha_inicio_acogida: toDate(form.fecha_inicio_acogida),
        fecha_resolucion_acogida: toDate(form.fecha_resolucion_acogida),
        fecha_asignacion_acogida: toDate(form.fecha_asignacion_acogida),
        asociado: toBoolean(form.asociado),
        asociacion: form.asociacion,
        quiere_asociado: toBoolean(form.quiere_asociado),
        quiere_asociacion: form.quiere_asociacion
    }
    return query

}

const parseBody = (body) => {
    const keys = Object.keys(body);
    const query = [];
    keys.forEach(key => {
        if (key === "nombre" && body["nombre"]) {
            query.push({ $or: [{ "miembro1.nombre": `${body["nombre"]}` }, { "miembro2.nombre": `${body["nombre"]}` }] })
        }
        else if (body[key]) {
            return query.push({ [key]: `${body[key]}` })
        }
        else {
            return
        }
    });
    return { $and: query }
}

module.exports = {
    parseBody,
    parseCreateBody
}