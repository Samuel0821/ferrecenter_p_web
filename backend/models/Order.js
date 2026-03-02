const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    },
  ],
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, required: true, default: false },
  paidAt: { type: Date },
  paymentStatus: {
    type: String,
    required: true,
    enum: ['Pendiente', 'Pagado', 'Rechazado'],
    default: 'Pendiente',
  },
  deliveryStatus: {
    type: String,
    required: true,
    enum: ['Pendiente', 'En Tránsito', 'Entregado', 'Cancelado'],
    default: 'Pendiente',
  },
  isDelivered: { type: Boolean, required: true, default: false },
  deliveredAt: { type: Date },
  orderId: { type: Number }, // Consecutivo numérico para facturación (Ej: 1, 2, 3...)
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
