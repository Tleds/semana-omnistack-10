module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(arrayAsString => arrayAsString.trim());//map percorre o vetor e faz algo (Parecido com o foreach)
}