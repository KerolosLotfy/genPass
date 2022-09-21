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
    e.target.parentElement[0].blur();
    let pass = e.target.parentElement[0].value.trim();
    // Generate New Pass 
    let newPass = generate(pass);

    // Copy the New Pass
    copy(newPass);
});

// Generate New Pass 
function generate(pass) {

    let newPass = '';
    for (let i = 0; i < pass.length; i++) {
        newPass += `K#eljrqpe${pass[i]}@ljrqper${pass[0].toUpperCase()}oljrqpe`;
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
            gearIcon.parentElement.classList.remove('active');

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