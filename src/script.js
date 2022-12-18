let typeOfaddsAndCategories = [
    {id: 0, name:"Botas", value: 19},
    {id: 1, name:"Calças", value: 19},
    {id: 2, name:"Celulares e Smartphones", value: 16}, 
    {id: 3, name:"Luminárias de Teto, Solares e Arandelas", value: 16.5}, 
    {id: 4, name:"Notebooks", value: 16},
    {id: 5, name:"Pneus", value: 16.5}, 
    {id: 6, name:"Suplementos", value: 17}, 
    {id: 7, name:"Televisores", value: 16}, 
    {id: 8, name:"Tênis", value: 19}, 
    {id: 9, name:"Tratamentos para Cabelo", value: 18},
    {id: 10, name:"outros", value: 17}
];
let weightStringsNoAndYellowReputetion = [
    {id: 0, name:"500g", value: 20.94},
    {id: 1, name:"500g até 1kg", value: 22.74},
    {id: 2, name:"1kg até 2kg", value: 23.34}, 
    {id: 3, name:"2kg até 5kg", value: 28.74}, 
    {id: 4, name:"5kg até 9kg", value: 43.14},
    {id: 5, name:"9kg até 13kg", value: 67.74}, 
    {id: 6, name:"13kg até 17kg", value: 75.54}, 
    {id: 7, name:"17kg até 23kg", value: 88.14}, 
    {id: 8, name:"23kg até 30kg", value: 101.94}, 
    {id: 9, name:"30kg até 40kg", value: 115.74}, 
    {id: 10, name:"40kg até 50kg", value: 123.54}, 
    {id: 11, name:"50kg até 60kg", value: 132.54},
    {id: 12, name:"60kg até 70kg", value: 142.74},
    {id: 13, name:"70kg até 80kg", value: 151.74},
    {id: 14, name:"80kg até 90kg", value: 161.94},
    {id: 15, name:"90kg até 100kg", value: 170.94},
    {id: 16, name:"100kg até 125kg", value: 183.54}, 
    {id: 17, name:"125kg até 150kg", value: 194.94},
    {id: 18, name:"Maior que 150kg", value: 205.14}
];
function getInputValues() {
    let price = document.getElementById('preco').value;
    let weight = document.getElementById('peso').value;
    let writeCategorie = document.getElementById('writeCategorie').value;
    let categories = document.getElementById('categories').value;
    let weightItemValue;
    let categoriesItemValue;
    weightStringsNoAndYellowReputetion.forEach(item => {
        if (weight == item.id) {
            weightItemValue = item.value;
        }
    });

    typeOfaddsAndCategories.forEach(item => {
        if (categories == item.id) {
            categoriesItemValue = item.value;
        }
    });

    if (price != 0) {
        let porcentagem = 100;
        let priceLimit = 79;
        if (price <= priceLimit) {
            document.getElementById('Resps').innerHTML = `
            <p> Valor do produto abaixo de R$ 79 então a taxa fixa cobrada pelo ML será de R$ 5 por produto. 
            Fonte:<a href="https://www.mercadolivre.com.br/ajuda/quanto-custa-vender-um-produto_870">Custo fixo adicional</a> </p> 
            <p> O Valor do frete será: ${weightItemValue} </p>
            `;
        }
        else if(writeCategorie == 0){
            console.log(categoriesItemValue);
            let valorACobrarCategoriesItemValue = (categoriesItemValue * price)/porcentagem;
            document.getElementById('Resps').innerHTML = `
            <p> O Valor menos a porcentagem do ML será: ${valorACobrarCategoriesItemValue } </p> 
            <p> O Valor do frete será: ${weightItemValue} </p>`;
        }
        else if (writeCategorie != 0){
            console.log(writeCategorie);
            let valorACobrar = (writeCategorie * price)/porcentagem;
            console.log(valorACobrar);
            document.getElementById('Resps').innerHTML = `
            <p> O Valor menos a porcentagem do ML será: ${valorACobrar} </p> 
            <p> O Valor do frete será: ${weightItemValue} </p>
            `;
        }
    } else {
        alert("Preencha o campo Preço!");
    }
}

function addinItemsOnSelector() {
    weightStringsNoAndYellowReputetion.forEach(item => {
        let optionsPeso = document.getElementById('peso');
        let selectOptions = document.createElement('option');
        selectOptions.value = item.id;
        selectOptions.innerHTML = item.name;
        optionsPeso.appendChild(selectOptions);
    });
    typeOfaddsAndCategories.forEach(item => {
        let optionsCategories = document.getElementById('categories');
        let selectOptions = document.createElement('option');
        selectOptions.value = item.id;
        selectOptions.innerHTML = item.name;
        optionsCategories.appendChild(selectOptions);
    });
}


//Functon show hiden divs
function removeHide() {
    let writeCategorie = document.getElementById('writeCategorie');
    let categories = document.getElementById('categories');
    writeCategorie.classList.toggle('hide');
    writeCategorie.value = null;
    categories.classList.toggle('hide');
}