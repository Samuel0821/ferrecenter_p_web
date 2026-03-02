const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Order = require('./models/Order');

// Cargar variables de entorno
dotenv.config();

const clearOrders = async () => {
  try {
    // 1. Conectar a la BD
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB');

    // 2. Eliminar todos los pedidos
    const deleteResult = await Order.deleteMany({});
    console.log(`🗑️  ${deleteResult.deletedCount} pedidos eliminados.`);

    console.log('🎉 Historial de pedidos limpiado exitosamente.');
    process.exit();
  } catch (error) {
    console.error('❌ Error al limpiar los pedidos:', error);
    process.exit(1);
  }
};

clearOrders();