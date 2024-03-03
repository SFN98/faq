

function displayanswer(){
    let iconplus = document.querySelectorAll(".icon-plus")
    let answer = document.querySelectorAll(".answer")
    let iconminus = document.querySelectorAll(".icon-minus")
    
        for(let i=0; i<iconplus.length;i++){
            iconplus[i].addEventListener("click", ()=>{
                answer[i].classList.add("showanswer")
                iconplus[i].classList.add("hideplus") 
                iconminus[i].classList.add("showiconminus")

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