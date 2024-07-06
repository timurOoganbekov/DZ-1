const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{5,30}@gmail.com$/g
    gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}


const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');
const mainWidth = parentBlock.offsetWidth - childBlock.offsetWidth;

let moveLeft = 0;

const moveLeftChildBlock = () => {
    if (moveLeft < mainWidth) {
        moveLeft += 1;
        childBlock.style.left = `${moveLeft}px`;
        requestAnimationFrame(moveLeftChildBlock);
    }
}

moveLeftChildBlock();