import api from './apiConfig'

// create a getBook function to make a async api call to get all books
export const getBooks = async () => {
  // create try-catch statement
  try {
// make a response variable = await & getting the books
    const response = await api.get("/books")
    // return the data with response
    return response.data
  } catch (error) {
    throw error 
  }
// export const getBook = async (id) => {
  
//   try {
//     const response = await api.get(`/books/${id}`)
//   return response.data
//   } catch (error) {
//     throw error
//   }
// }

}