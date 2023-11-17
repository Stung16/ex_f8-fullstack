export const MAX_TIME = (RANGE_NUMBER) =>{
    return Math.ceil(Math.log2(RANGE_NUMBER));
    
}
export const randomNumber = (end) => {
    return Math.floor(Math.random() * end)
  }