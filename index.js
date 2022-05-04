const dragItems = document.querySelectorAll('.messages__item')
const dragField = document.querySelector('.messages')

dragField.addEventListener('dragstart', (event) => {
    event.target.classList.add('drag__selected')
})

dragField.addEventListener('dragend', (event) => {
    event.target.classList.remove('drag__selected')
})

dragField.addEventListener('dragover', (event) => {
    event.preventDefault()

    const activeElement = document.querySelector('.drag__selected')
    const currentElement = event.target

    if (!currentElement.classList.contains('messages__item') && activeElement == currentElement) {
        return ;
    }

    const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement

    dragField.insertBefore(activeElement, nextElement)
})

dragItems.forEach((dragItem) => {
    dragItem.setAttribute('draggable', true)
})