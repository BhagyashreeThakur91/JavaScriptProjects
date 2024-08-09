const data = [
    {
        id : '1',
        question : 'What is React?',
        answer : 'React is JavaScript library which is used for User Interface.' 
    },
    {
        id : '2',
        question : 'What is Props?',
        answer : 'Props(properties) is a way to pass data from parent component to child component.' 
    },
    {
        id : '3',
        question : 'What is component?',
        answer : 'Component are the building block of react application.' 
    },
    {
        id : '4',
        question : 'What is arrow function?',
        answer : 'Arrow function in react is a consise way of writing function' 
    },
]

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
accordionWrapper.innerHTML = data.map((dataItem)=> (
    `<div class="accordion-item">
        <div class="accordion-title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordion-content">
        <p>${dataItem.answer}</p>
        </div>
    </div>`
)).join("")
}


createAccordionData()

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event)=>{
        if(currentItem.classList.contains('active')) {
            currentItem.classList.remove('active')
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active')
            })
            currentItem.classList.add('active');
        }
    })
})
