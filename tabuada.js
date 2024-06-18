console.log("Me diga um número que eu direi a tabuada dele de 1 a 10")
let num=undefined;
process.stdin.on("data", function (data){
if (num===undefined){
    num = Number(data.toString().trim())
    
    if(isNaN(num)){
        console.log("Por favor digite um número válido")
        num=undefined;
    }else{
        for (let i=1; i<=10; i++){
        let tabuada= num*[i]    
        console.log(num +" multiplicado por " + [i] + " é igual a "+ tabuada)
    }}

}process.exit()
})