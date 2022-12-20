// 3 Дз сделать авто-слайдеры,улучшить модальные окна.

const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}
hideTabContent()

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                console.log(i)
                hideTabContent()
                showTabContent(i)
            }
        })
    }
});



let currentSlide = 0;
const nextSlide = () => {
    currentSlide ++;
    if (currentSlide>=tabs.length){
        currentSlide=0
    }
    hideTabContent()
    showTabContent(currentSlide)
}
setInterval(nextSlide, 2000)





const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () =>{
    modal.classList.add('show');
    modal.classList.remove('hide')
    document.body.style.overflow = "hidden";
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () =>{
    modal.classList.add('hide');
    modal.classList.remove('show')
    document.body.style.overflow = "";
}

closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        closeModal()
    }
})

function openModalScroll(){
    const page = document.documentElement;

    if(page.scrollTop + page.clientHeight >= page.scrollHeight){
        openModal()
        window.removeEventListener("scroll", openModalScroll)
    }
}
window.addEventListener("scroll", openModalScroll)
