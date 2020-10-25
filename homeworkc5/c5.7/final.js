
const btn = document.querySelector('.btn');
const answerPage = document.querySelector('.page-answer');
const answerLimit = document.querySelector('.limit-answer');
const div = document.querySelector('.answer');

// Отображает последний запрос
if (localStorage) {
    let storageCards = ``;
    for (let i = 1; i < localStorage.length; i++) {
        storageCards += localStorage[i];
    }
    div.innerHTML = storageCards;
}
// Функция запроса
function getImgs(pagesNumber, limitNumber) {
 
 
        
    fetch(`https://picsum.photos/v2/list?page=${pagesNumber}&limit=${limitNumber}`)
        .then((response) => {
            return response.json()
        })
        .catch((reject) => {
            console.log('error', reject);
        })
        .then((data) => {
            localStorage.clear();
            let cards = ``;
            let count = 0
            console.log(data);
            data.forEach(item => {
                let img = `
                    <img src=${item.download_url}>
                `;
                count += 1;
                localStorage.setItem(count, img);
                cards += img;
            });
            div.innerHTML = cards;
                
        });
};
// Обрабосчик события 
btn.addEventListener('click', () => {
    const page = document.querySelector('.page').value;
    const limit = document.querySelector('.limit').value;  
    
    
    if (+page < 1 || 10 < +page) {
        let ansPage = `
            <span>Номер страницы вне диапазона от 1 до 10</span>
        `;
        localStorage.clear()
        answerPage.innerHTML = ansPage;
    } else if (1 > +limit || 10 < +limit) {
        let ansLimit = `
             <span>Лимит вне диапазона от 1 до 10</span>
        `;
        answerLimit.innerHTML = ansLimit;
        localStorage.clear()
           
    } else if (isNaN(page) || isNaN(limit)) {
        console.log(isNaN(+page));
        let ansLimitAndPage = `
        <span>Номер страницы или лимит вне диапазона от 0 до 10</span>
        `;
        localStorage.clear()
        div.insertAdjacentHTML('afterbegin', ansLimitAndPage);
    } else {

        getImgs(page, limit);

    }
});