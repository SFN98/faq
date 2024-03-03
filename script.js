

function displayanswer(){
    let iconplus = document.querySelectorAll(".icon-plus")
    let answer = document.querySelectorAll(".answer")
    let iconminus = document.querySelectorAll(".icon-minus")
    
        for(let i=0; i<iconplus.length;i++){
            iconplus[i].addEventListener("click", ()=>{
                answer[i].classList.add("showanswer")
                iconplus[i].classList.add("hideplus") 
                iconminus[i].classList.add("showiconminus")

                // if(Array.from(answer).filter(answer => answer.classList.contains("showanswer")).length >= 3){
                //     let main = document.querySelector("main")
                //     main.classList.toggle("grow")
                // }

            })
        }
}
displayanswer()

function hideanswer(){
    let iconplus = document.querySelectorAll(".icon-plus")
    let answer = document.querySelectorAll(".answer")
    let iconminus = document.querySelectorAll(".icon-minus")
        for(let i=0; i<iconminus.length;i++){
            iconminus[i].addEventListener("click", ()=>{
                answer[i].classList.remove("showanswer")
                iconplus[i].classList.remove("hideplus")
                iconminus[i].classList.remove("showiconminus")
            })
        }
}
hideanswer()