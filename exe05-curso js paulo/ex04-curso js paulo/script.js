function contar(){
    var ini = document.getElementById("txt1")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById('txtp')
    var res = document.getElementById("result")
    if(ini.value.length ==0 || passo.value.length ==0){
    window.alert('ERRO digite algum numero!!!!!!')
    }
    else{
       
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(let c = i ;c<= p ; c+=p)
            res.innerText = `${c}`
      
       
       
    }   
}