import { normalize, schema } from 'normalizr';

const author = new schema.Entity('authors', {}, {idAttribute: 'email'});

const mensaje = new schema.Entity('mensaje', {
    author: author
}, {idAttribute: 'date'})

const mensajes = new schema.Entity('mensajes', {
    mensajes: [mensaje]
}, {idAttribute: 'id'})


const normalizeData = (data) => {
    return normalize(data, mensajes);
} 

export default normalizeData


// console.log(util.inspect(normalizedData, false, 12, true))