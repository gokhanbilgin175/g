const input = document.querySelector("#input")

const message = document.querySelector("#message")

const handle =()=>{

    const name = localStorage.getItem("veri");
    name ??=""

    const welcomeMessage = `hoşgeldin canım ${name}`

    document.querySelector("#message").innerHTML =welcomeMessage






}












const veriAl = ()=>{

 document.querySelector("#btn").addEventListener("click",(e)=> {
        e.preventDefault;
        const inputEl = input.Value;
    if(!inputEl) return;
       

        localStorage.setItem("veri",inputEl)







    })

}

veriAl()
handle()