const monitor = document.getElementById("monitor")
const botoes = document.querySelectorAll("#botoes button")

botoes.forEach((botao) => {
    botao.addEventListener("click", function(){
        const value = this.value
        if (value==="="){
        monitor.innerText = eval(monitor.innerHTML)
        }
        else if(value==="C"){
            monitor.innerText=""
        }
        else{
            if(monitor.innerText==="null"){
                monitor.innerText=""
            }
            else{
                monitor.innerText += value;
            }
        }
    })

})

   
              