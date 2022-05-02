//visualizzare in pagina un box con icona e nome icona a seconda della struttura dati ricevuta
//struttura dati
const arrayAll = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//ciclo for each per prendere elemento
const sectionIcon = document.querySelector('.icon-all'); 


arrayAll.forEach( (element) => {
    //inserire icona e nome nell html e aggiungere la classe box
    
    sectionIcon.innerHTML += `
    <div class="box">
        <i class="${element.family} ${element.prefix}${element.name}"></i>
        <div>${element.name}</div>
    </div>
    `;

    //aggiungere colore alle icone
    const elem = document.querySelector('.icon-all .box');
    elem.style.color += `${element.color}`;
    console.log(elem);
    
});




// const promptValue = prompt('o');
// console.log(promptValue);

// const all = [];


// const newArray = arrayAll.filter((element) => {
//     if(promptValue === 'all'){
//         return all.push(element);
//     } else if (promptValue === 'animal'){
//         return all.push(element.type === 'animal')
//     } else if (promptValue.value === 'vegetable'){
//         return all.push(element.type === 'vegetable') 
//     } else {
//         return all.push(element.type === 'user')
//     }
// })

// console.log(newArray);







