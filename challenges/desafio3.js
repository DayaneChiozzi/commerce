db.produtos.find({ vendidos: 
  { $eq: 137 } },
   { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 }).pretty();