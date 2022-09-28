const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// var não respeita o escopo de bloco, portanto a chamada do array nao ocorre como o planejado