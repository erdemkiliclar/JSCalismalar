var helloFunc = function hello(){
    console.log("Merhaba")
}

helloFunc()

const helloFunc2 = () => {
    console.log("Merhaba")
}

helloFunc2()

const helloFunc3 = (message) => {
    console.log(message)
}

helloFunc3("Hello World")

var topla=(sayi1,sayi2) => {
    return sayi1 + sayi2;
}
let toplam = topla(3,4)

console.log(toplam)