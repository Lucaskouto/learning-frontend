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

teste()
console.log(local)


