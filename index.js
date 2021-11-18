//variables below
//global
const select = document.querySelector('select')
select.classList.add('hidden')
const optionArr = document.querySelectorAll('option')
const container = document.createElement('div')

//main window
const header1 = document.createElement('h2');
const header2 = document.createElement('h2');
const item1 = document.createElement('div')
const item2 = document.createElement('div')
const link = document.createElement('span')
const mainInput1 = document.createElement('input')
const mainInput2 = document.createElement('input')
//modalWindow
const modalWindow = document.createElement('div')
const modalWindowHeader = document.createElement('div')
const modalFooter = document.createElement('div')
//modalWindow header block
const arrowBack = document.createElement('div')
const headerModal = document.createElement('h2')
const Search = document.createElement('input')
// modal content
const content = document.createElement('div')
//modalWindow footer block
const btn = document.createElement('button')
const clearBtn = document.createElement('span')

// options description below
let optionTitle = ['[A] - Продукция сельского, лесного хозяйства, рыбоводства и рыболовства',
    '[O] - Услуги в области государственного управления и обороны, предоставляемые уобзеству в целом); услуги по обязательному социальному страхованию',
    '[84]  - Услуги в области государственного управления и обороны, предоставляемые уобзеству в целом); услуги по обязательному социальному страхованию',
    '[84.1] - Услуги в области государственного управления обзего характера и социально-экономической сфере',
    '[84.11] - Услуги в области государственного управления общего характера',
    '[84.11.11] - Услуги в области исполнительной и законодательной деятельности',
    '[84.11.11.100] - Услуги центральных органов исполнительной и законодательной власти',
    '[84.11.11.200] - Услуги органов управления и самоуправления областного территориального уровня',
    '[84.11.11.300] - Услуги органов управления и самоуправления базового территориального уровня',
    '[84.11.11] - Услуги в области исполнительной и законодательной деятельности',
    '[A] - Продукция сельского, лесного хозяйства, рыбоводства и рыболовства',
    '[O] - Услуги в области государственного управления и обороны, предоставляемые уобзеству в целом); услуги по обязательному социальному страхованию',
    '[84]  - Услуги в области государственного управления и обороны, предоставляемые уобзеству в целом); услуги по обязательному социальному страхованию',
    '[84.1] - Услуги в области государственного управления обзего характера и социально-экономической сфере',
    '[84.11] - Услуги в области государственного управления общего характера',
    '[84.11.11] - Услуги в области исполнительной и законодательной деятельности',
    '[84.11.11.100] - Услуги центральных органов исполнительной и законодательной власти',
    '[84.11.11.200] - Услуги органов управления и самоуправления областного территориального уровня',
    '[84.11.11.300] - Услуги органов управления и самоуправления базового территориального уровня',
    '[84.11.11] - Услуги в области исполнительной и законодательной деятельности']



// modal window

modalWindow.classList.add('modalWindow')
headerModal.innerText = 'Реализуемые товары'
headerModal.classList.add('container_header')
arrowBack.classList.add('arrowBack')
Search.classList.add('search')
modalWindowHeader.append(arrowBack, headerModal, Search)
modalWindowHeader.classList.add('modalWindowHeader')

const form = document.createElement('form')
const getSelect = (arr) => {
    let options = []

    for (let i = 0; i < arr.length; i++) {
        options[i] = {
            title: optionTitle[i],
            value: optionArr[i].value,
            level: optionArr[i].dataset.level
        }
        if (options[i].level === undefined) {
            options[i].level = 1
        }
    }
    return options
}

//creating new selec below
const Form = document.createElement('form')
const options = getSelect(optionArr)
inputWrapper = []
inputForm = []
const inputFormLabel = []
customCheckbox = []
for (let i = 0; i < options.length; i++) {
    customCheckbox[i] = document.createElement('span')
    customCheckbox[i].classList.add('custom_checkbox')
    inputForm[i] = document.createElement('input')
    inputForm[i].setAttribute('type', 'checkbox'); inputForm[i].classList.add('inputForm');
    inputFormLabel[i] = document.createElement('label'); inputFormLabel[i].innerText = options[i].title; inputFormLabel[i].setAttribute('id', options[i].value); inputFormLabel[i].classList.add('inputFormLabel')
    inputWrapper[i] = document.createElement('div'); inputWrapper[i].classList.add('inputWrapper'); inputWrapper[i].append(inputForm[i], customCheckbox[i], inputFormLabel[i]);
    if (options[i].level === 1) {
        inputFormLabel[i].style.paddingLeft = '0'
    } else if (+options[i].level === 2) {
        inputFormLabel[i].style.paddingLeft = '15px'
    }
    else if (+options[i].level === 3) {
        inputFormLabel[i].style.paddingLeft = '30px'
    }
    else if (+options[i].level === 4) {
        inputFormLabel[i].style.paddingLeft = '45px'
    }
    else if (+options[i].level === 5) {
        inputFormLabel[i].style.paddingLeft = '60px'
    } else if (+options[i].level === 6) {
        inputFormLabel[i].style.paddingLeft = '75px'
    }
    Form.append(inputWrapper[i])
}

// Алгоритм вложенности. Написал, но он не пригодился
// arr = []
// for(let i = 0; i<inputWrapper.length;i++){
//     arr[i] = {
//         title: inputWrapper[i],
//         dataLevel: options[i].level,
//     }
// }
// const normalTree = [];

// function setChildren(children, item) {
//   if (!children.length) {
//     children.push(item);
//     return;
//   }

//   const last = children[children.length - 1];
//   if (last.dataLevel == item.dataLevel) {
//     children.push(item);


//   }
//   if (last.dataLevel < item.dataLevel) {
//     last.children ||= [];
//     setChildren(last.children, item);

//   }
// }

// arr.forEach(item => {
//   setChildren(normalTree, item);
// })

// console.log(arr, normalTree)

// function print_list(list, container) {
//     for (var i = 0; i < list.length; i++) {
//         if (list[i]?.children?.length > 0) {
//             var div = document.createElement('div');
//             list[i].title.appendChild(div);
//             div.classList.add('inputWrapper')
//             print_list(list[i].children, div);

//         }
//         container.appendChild(list[i].title);
//     }
// }
// print_list(normalTree, Form);




Form.classList.add('Form')

content.classList.add('content')
content.append(Form)
modalWindow.append(content)

btn.innerText = 'Применить'
btn.classList.add('btn')
clearBtn.innerText = 'Очистить'
clearBtn.classList.add('clearBtn')
modalFooter.append(btn, clearBtn)
modalFooter.classList.add('modalFooter')

modalWindow.append(modalWindowHeader, content, modalFooter)

// events events events
link.addEventListener('click', () => {
    modalWindow.style.pointerEvents = 'auto'
    modalWindow.style.opacity = '1'

})
arrowBack.addEventListener('click', () => {
    modalWindow.style.pointerEvents = 'none'
    modalWindow.style.opacity = '0'
    mainInput1.setAttribute('placeholder', count[0].innerText)
    link.innerText = ('Показать выбранное(' + count.length + ')')

})

Search.addEventListener('input', () => {
    for (let i = 0; i < inputFormLabel.length; i++) {
        if (inputFormLabel[i].innerText.search(Search.value) != -1) {
            inputWrapper[i].style.display = ''
        } else {
            inputWrapper[i].style.display = 'none'
        }
    }
})

let count = [];
for (let i = 0; i < inputWrapper.length; i++) {
    inputWrapper[i].addEventListener('click', () => {
        if (inputForm[i].checked) {
            inputWrapper[i].classList.remove('checked')
            count = count.filter(item => {
                return item !== inputFormLabel[i]
            })

        } else {
            inputWrapper[i].classList.add('checked')
            count.push(inputFormLabel[i])
        }
        inputForm[i].checked = !inputForm[i].checked
        if (count[0] === undefined) {
            mainInput1.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции')
            mainInput1.style.borderLeft = '1px solid #D9D9D9'
        } else {
            mainInput1.setAttribute('placeholder', count[0].innerText)
            mainInput1.style.borderLeft = '2px solid #035B77'
        }
        if (count.length > 0) {
            link.innerText = ('Показать выбранное(' + count.length + ')')
        } else {
            link.innerText = ''
        }
    })

}

btn.addEventListener('click', () => {
    modalWindow.style.pointerEvents = 'none'
    modalWindow.style.opacity = '0'
    let result = []
    if(count.length > 0 ){
        for (let i = 0; i <count.length; i++ ){
            result.push(count[i].innerText)
        }
        alert('Выбрано: ' + result.join(', '))
    }else{
        alert('ничего не выбрано')
    }
    

})

clearBtn.addEventListener('click', () => {
    inputForm.forEach(item => {
        item.checked = false;
    })
    inputWrapper.forEach(item => {
        item.classList.remove('checked')
    })
    count = [];
    link.innerText = ''
    mainInput1.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции')
})

// main window
header1.innerText = 'Тендеры в роли Заказчика'
header2.innerText = 'Тендеры в роли Поставщика'
header2.classList.add('container_header')
header1.classList.add('container_header')
mainInput1.classList.add('main_input')
mainInput2.classList.add('main_input')
mainInput1.addEventListener('click', () => {
    if (modalWindow.style.opacity == '1') {
        modalWindow.style.pointerEvents = 'none'
        modalWindow.style.opacity = '0'
    } else {
        modalWindow.style.pointerEvents = 'auto'
        modalWindow.style.opacity = '1'
    }

})
mainInput1.readOnly = true
mainInput2.readOnly = true
mainInput1.setAttribute('placeholder', 'Код ОКРБ или наименование закупаемой продукции')

link.classList.add('link')

item1.classList.add('item')
item2.classList.add('item')
item1.append(header1, link, mainInput1)
item2.append(header2, mainInput2)

container.classList.add('container')
container.append(item1, item2)


//appending main elements to body below

document.body.append(container)
document.body.append(modalWindow)


