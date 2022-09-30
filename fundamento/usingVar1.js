{ 
    { 
        { 
            { 
                var sera = 'Sera?'
            } 
        } 
    } 
}

// uma variavel com var tem somente dois escopos possiveis

console.log(sera)

function teste() {
    var local = 123
}

var local 
teste()
console.log(local)


