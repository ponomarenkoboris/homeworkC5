const div = document.querySelector('div');
const input1 = document.querySelector('.input1').value;
const input2 = document.querySelector('.input2').value;
const btn = document.querySelector('.btn');

const request = (number1, number2) => {
    fetch(`https://picsum.photos/${number1}/${number2}`)
        .then((response) => {
            return response;
        })
        .catch((reject) => {
            console.log('error', reject);
        })
        .then((data) => {
            console.log(data);
            let card = data.url;
            div.innerHTML = card;
                
        })
        
}



btn.addEventListener('click', async () => {
    if (100 <= +input1 <= 300 && 100 <= +input2 <= 300) {

        await request(+input1, +input2);

     } else {
        let warningMessage = `
            <p>Одно из чисел вне диапазона от 100 до 300</p>
        `;
        document.body.insertAdjacentHTML('beforeend', warningMessage);
    }
})