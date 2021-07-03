const main =document.querySelector('#main');
const blogMain = document.querySelector('#blogMain');


if (main != null) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data));
}

const displayUsers = (data)=>{
  data.forEach(element => {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const a = document.createElement('a')
    
    
    a.setAttribute('href',`/htmlCssJsChallengeByNelly/blog.html?id=${element.id}`)
    h1.innerText = element.name
    p.innerText = element.email
    console.log(element)
    a.innerText = "Get users posts"

    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(a)
    main.appendChild(div)
  });
  console.log(data)
}

if (blogMain != null) {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => displayPost(data));
}


const displayPost = (data) => {
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  h1.innerText = data.title
  p.innerText = data.body
  blogMain.appendChild(h1)
  blogMain.appendChild(p)
}