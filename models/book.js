import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Book = new Schema (
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: [
      {
        type: String,
        enum: ['Left-Hand-Path', 'Traditional Path', 'Right-Hand-Path'],
        required: true,
      },
    ],

    imgURL: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('books', Book)