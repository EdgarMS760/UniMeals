const fs = require('fs');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

const db = admin.firestore();

async function exportData() {
  const productosSnapshot = await db.collection('productos').get();
  const productosData = [];

  for (const doc of productosSnapshot.docs) {
    const producto = doc.data();

    // Obtener calificaciones del producto
    const calificacionesSnapshot = await db.collection('calificaciones')
      .where('producto_id', '==', doc.ref)
      .get();

    const calificaciones = calificacionesSnapshot.docs.map(cal => cal.data().calificación);
    const promedioCalificaciones = calificaciones.length > 0
      ? calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length
      : 0;

    // Guardar los datos importantes para el modelo
    productosData.push({
      nombre: producto.nombre,
      precio: producto.precio,
      categoria_id: producto.categoria_id,
      latitud: producto.ubicacion.latitude,
      longitud: producto.ubicacion.longitude,
      promedioCalificaciones
    });
  }

  // Convertir a JSON
  fs.writeFileSync('ml-servide/ML-OP/Modelo-Precios/Data/productos_data.json', JSON.stringify(productosData, null, 2));
  console.log('Datos exportados a productos_data.json');
}

exportData();
