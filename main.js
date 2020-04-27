// 1
let books = document.querySelectorAll('.book');
books[1].style.order = '-1';
books[2].style.order = '2';
books[3].style.order = '1';
books[5].style.order = '1';

// 2
document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

// 3
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';

// 4
document.querySelector('.adv').remove();

// 5
    // 2 глава
function sortLi(liList) {
    let sortedLi = [];
    for(li in liList) {
        for(subLi of liList) {
            if(subLi.textContent.includes(`Глава ${li}:`)) {
                sortedLi.push(subLi);
            }
        }
    }
    return sortedLi
}

sortLi(books[0].querySelectorAll('li')).reduce(function(prev, it, i, ar){
    ar[i-1].after(ar[i]);
});

books[0].querySelectorAll('li')[books[0].querySelectorAll('li').length-2].after(books[0].querySelectorAll('li')[2]);

    // 5 глава
sortLi(books[5].querySelectorAll('li')).reduce(function(prev, it, i, ar){
    ar[i-1].after(ar[i]);
});

books[5].querySelectorAll('li')[books[5].querySelectorAll('li').length-1].before(books[5].querySelectorAll('li')[3]);
books[5].querySelectorAll('li')[books[5].querySelectorAll('li').length-2].before(books[5].querySelectorAll('li')[2]);

// 6
books[2].querySelector('ul').append(document.createElement('li').textContent='Глава 8: За пределами ES6');