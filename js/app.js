const copyBtn = document.querySelector('#newPass>span');
const genBtn = document.querySelector('input[type="submit"]');
const gearIcon = document.querySelector('.control span');
const colors = document.querySelectorAll('.colors > div ');
let color = '';

// get Color from local Storage
getColorInlocalStorage(localStorage.getItem('color'))

// submit input Data
genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    copyBtn.classList.remove('active');
    let pass = e.target.parentElement[0].value.trim();

    // Generate New Pass 
    let newPass = generate(pass);

    // Copy the New Pass
    copy(newPass);
});

// Generate New Pass 
function generate(pass) {
    // let arr = {
    //     nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //     capitalLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    //     smallLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('')
    // }

    // let arr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    // console.log(arr.length);

    let newPass = '';
    for (let i = 0; i < pass.length; i++) {
        newPass += `*${pass[i]}`;
    }

    // add New Pass To Page
    document.querySelector('#newPass > p').innerText = newPass;
    return newPass;
}

// Copy the New Pass
function copy(newPass) {
    copyBtn.addEventListener('click', (e) => {
        e.target.classList.add('active');
        navigator.clipboard.writeText(newPass);
    });
}

// change colors
gearIcon.addEventListener('click', () => {
    gearIcon.parentElement.classList.toggle('active');
    colors.forEach((c) => {
        c.addEventListener('click', (e) => {
            document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

            // set Color in local Storage 
            setColorInlocalStorage(e.target.dataset.color);
        })
    })
})



// set Color in local Storage
function setColorInlocalStorage(color = '') {
    localStorage.setItem('color', color)
}

// get Color from local Storage
function getColorInlocalStorage(color = '') {
    document.documentElement.style.setProperty('--main-color', color);
}