const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let random = '#';
    for (let i = 1; i <= 6; i++)
    {   
        console.log(random);
        random = random + String(hex[getRandomNumber()]);
    }
    document.body.style.backgroundColor = random;
    color.textContent = random;
    

    function getRandomNumber()
    {
        return Math.floor(Math.random() * hex.length);
    }
})