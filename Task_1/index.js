const list = document.getElementsByClassName('list_item');
const input = document.getElementsByClassName('inp');
// console.log(input);
// console.log(list)

function add() {
    if (input[0].value === '') {
        alert('Write Something...');
    }
    else {
        const li = document.createElement("li")
        li.innerHTML = input[0].value
        li.title="Click to mark it do / done..."
        list[0].append(li)

        const span = document.createElement('span')
        span.innerHTML = '❎'
        span.title='Delete item'
        li.append(span)

        const up = document.createElement('span')
        up.innerHTML = '⬆️'
        up.title='Increase the priority of the item'
        li.append(up)

        const down = document.createElement('span')
        down.innerHTML = '⬇️'
        down.title='Decrease the priority of the item'
        li.append(down)

    }
    input[0].value = ''
    saveData();
}

list[0].addEventListener('click', function (e) {
    console.log(e.target.className)
    if (e.target.tagName === 'LI') {  //necessary hai to be in capital letters 
        e.target.classList.toggle('checked')
        saveData()
    }
    else if (e.target.className === 'delete') {
        e.target.parentElement.remove();
        saveData()
    }
    else if (e.target.className === 'up') {
        let currtask = e.target.parentElement;
        let prevtask = currtask.previousElementSibling;
        if (prevtask != null) {
            currtask.after(prevtask);
        }
        saveData()
    }
    else if (e.target.className === 'down') {
        // e.target.parentElement.remove();
        let currtask = e.target.parentElement;
        let nexttask = currtask.nextElementSibling;
        if (nexttask != null) {
            currtask.before(nexttask);
        }
        saveData()
    }

}, false)

input[0].addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        // document.getElementsByClassName("btn1").click();
        if (input[0].value === '') {
            alert('Write Something...');
        }
        else {
            const li = document.createElement("li")
            li.innerHTML = input[0].value
            console.log(list)
            list[0].append(li)

            
        const span = document.createElement('span')
        span.setAttribute('class', 'delete')
        li.title="Click to mark it do / done..."
        span.innerHTML = '❎'
        span.title='Delete item'
        li.append(span)

        const up = document.createElement('span')
        up.setAttribute('class', 'up')
        up.innerHTML = '⬆️'
        up.title='Increase the priority of the item'
        li.append(up)

        const down = document.createElement('span')
        down.setAttribute('class', 'down')
        down.innerHTML = '⬇️'
        down.title='Decrease the priority of the item'
        li.append(down)

        input[0].value = ''
        }
    }
    saveData()

}, false)

function saveData() {
    localStorage.setItem("data", list[0].innerHTML)

}
function showData() {
    list[0].innerHTML = localStorage.getItem("data")
}
showData()
