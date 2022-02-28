import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Burgers = [{ id: 1, name: "American Burger", price: 2 }, { id: 2, name: "Figg Burger", price: 3 }]
}

export const dbContext = new DbContext()
