const url = 'https://type.fit/api/quotes';
const content = document.querySelector('.text');
const auth = document.querySelector('.author')
const button = document.querySelector('.button');
const image = document.querySelector('.keanu');


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
    console.log(data)
}

function showData(data) {
    let index = Math.floor(Math.random() * 1000);
    content.textContent = data[index].text;
    auth.textContent = data[index].author;
}

button.addEventListener('click', () => {
    getData();
    image.classList.toggle('active')

})

getData()