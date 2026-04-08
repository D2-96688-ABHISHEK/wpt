function result(data,error){
  const result = {}

  if(data){
    result.status="Success"
    result.data=data
  }
  else{
    result.status="Error"
    result.error=error
  }
  return result
}

module.exports = {result}