// C5.3
const photos = document.querySelector('.photos');
const btn = document.querySelector('#input-btn');


function request() {
    const limit = document.querySelector('#input').value;
    console.log(limit);
    if (limit >= 1 && limit <= 10){
        const xhr = new XMLHttpRequest();
        xhr.open('get', `https://picsum.photos/v2/list?limit=${limit}`, true);
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('Произошла ошибка статуса ответа: ', xhr.status);
            } else {
                let answer = JSON.parse(xhr.response);
                console.log(answer);
                pasteInPage(answer);
            }
        }
        xhr.send();
    } else {
        photos.innerHTML = 'Число вне диапазона от 1 до 10';
    }

}
function pasteInPage(answerObject) {
    let cards = ``;
    answerObject.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" width="300px">
            </div>
        `;
        cards += cardBlock;
    })
    photos.innerHTML = cards;
}

btn.addEventListener('click', () => {
    request();
})