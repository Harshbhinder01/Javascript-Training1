// // DOM 

// // this finds the first p tag
// const para = document.querySelector("p");

// console.log(para);

// // this is how to access class names that have been set in the css
// const para = document.querySelector(".error");


// // this accesss the div and the class
// const para = document.querySelector("div.error");


// grab multiple tags by using querySelectorAll
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// // it will get the tag depending on the number
// console.log(paras[2]);


// get an element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName("error")
// console.log(errors);
// console.log(errors[0]);


// // get elements by their tag names
// const paras = document.getElementsByTagName('p')
// console.log(paras);
// console.log(paras[1]);


// const para = document.querySelector('p');


// // console.log(para.innerHTML)
// // para.innerText += "ninjas are awsome!"

// const paras = document.querySelectorAll('p')

// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += "new text";
// // });

// const content = document.querySelector(".content");

// // // console.log(content.innerHTML)
// // content.innerHTML += "<h2> this is a new h2 </h2>"

// const people = ["mario", "luigi", "yoshi"];

// people.forEach(person => {
//     content.innerHTML += `<p> ${person} </p>`
// })


// // get and update attributes
// const link = document.querySelector("a");

// console.log(link.getAttribute('href'));

// link.setAttribute("href", "https://www.thenetninja.co.uk")

// link.innerText = "net ninja website"


// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color:green')


// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px')

// console.log(title.style);
// console.log(title.styles.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '2px';



// const paras = document.querySelector('p')

// // console.log(content.classList);
// // content.classList.add('error');
// // content.classList.remove('error');
// // content.classList.add('success');

// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')) {
//         p.classList.add('sucess');
//     }
// })

// const title = document.querySelector('.title');

// title.classList.toggle('test');









