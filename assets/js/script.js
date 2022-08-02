const buttonInput = document.getElementById('input')
const teksUser = document.getElementById('text-user')
const teksDel = document.getElementById('teks-delete')
const login = document.getElementById('login')
const butLogin = document.getElementById('butLogin')
const gone = document.getElementById('hide')
const nameTag = document.getElementById('nameTag')
const nameUser = document.getElementById('nameUser')


buttonInput.addEventListener('click', function () {
    const parentList = document.getElementById('parentList')
    const newList = document.createElement('li')
    const divList = document.createElement('div')
    const childDiv = document.createElement('div')
    const dropdown = document.createElement('div')
    const button = document.createElement('button')
    const ulList = document.createElement('ul')
    const liUp = document.createElement('li')
    const textLiup = document.createElement('a')
    const liDel = document.createElement('li')
    const textLidel = document.createElement('a')
    const up = document.createTextNode('Update')
    const del = document.createTextNode('Delete')
    const textPlain = document.createElement('div')



    newList.classList.add('list-group-item')
    newList.classList.add('justify-content-between')
    newList.classList.add('align-items-start')
    newList.classList.add('d-flex')


    divList.classList.add('ms-2')
    divList.classList.add('me-auto')

    childDiv.classList.add('fw-bold')

    textPlain.classList.add('plain')

    dropdown.classList.add('dropdown')

    button.classList.add('btn')
    button.classList.add('btn-secondary')
    button.classList.add('dropdown-toggle')
    button.setAttribute("data-bs-toggle", "dropdown",)

    ulList.classList.add('dropdown-menu')

    textLiup.classList.add('dropdown-item')
    textLidel.classList.add('dropdown-item')

    parentList.appendChild(newList)
    newList.appendChild(divList)
    divList.appendChild(childDiv)
    divList.appendChild(textPlain)
    textPlain.innerText = new Date
    childDiv.innerText = teksUser.value
    newList.appendChild(dropdown)
    dropdown.appendChild(button)
    button.appendChild(ulList)
    ulList.appendChild(liUp)
    liUp.appendChild(textLiup)
    textLiup.appendChild(up)
    textLidel.appendChild(del)
    textLidel.setAttribute("id", "teks-delete",)
    ulList.appendChild(liDel)
    liDel.appendChild(textLidel)


    textLidel.addEventListener('click', function () {
        newList.classList.remove('d-flex')
        newList.classList.add('hide')
    })
    textLiup.addEventListener('click', function () {
        const newInput = prompt('Masukan Update:')
        childDiv.innerText = newInput
    })
})

butLogin.addEventListener('click', function () {
    if (nameUser.value == '') {
        alert('Mohon Isi Username!')
        gone.classList.add('hide')
    } else {
        gone.classList.remove('hide')
        login.classList.add('hide')
        nameTag.innerText = 'Hello ' + nameUser.value
    }
})




