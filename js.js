let homes = [];
function updatehomeList() {
    const homeList = document.getElementById('home-list');
    homeList.innerHTML = '';
    homes.forEach((home, index) => {
        const li = document.createElement('li');
        li.classList.add('home-item');
        li.textContent = home.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить дом';
        editButton.onclick = function() {
            edithome(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить дом';
        deleteButton.onclick = function() {
            deletehome(index);
        };
        li.appendChild(deleteButton);

        homeList.appendChild(li);
    });
}
function addhome() {
    const agenstvoInput = document.getElementById('agentstvo');
    const zalogInput = document.getElementById('zalog');
    const cenaInput = document.getElementById('cena');
    const FIOvladInput = document.getElementById('FIOvlad');
    const ploshadInput = document.getElementById('FIOarend');

    if (agenstvoInput.value===""){
        agenstvoInput.value="нет"
    }
    if (zalogInput.value === ""){
        zalogInput.value=0;
    }
    const agenstvo = agenstvoInput.value.trim();
    const zalog = parseInt(zalogInput.value);
    const cena = parseInt(cenaInput.value);
    const FIOvlad = FIOvladInput.value.trim();
    const ploshad = parseInt(ploshadInput.value);


    if ( zalog<0 || cena<=0 || FIOvlad==="" || ploshad<=10) {
      alert('В полях присутсвуют ошибки. Учтите следующие требования\n  1. Необходимо заполнить все поля, помеченные *\n  2. Площадь должна быть больше 10кв/м\n  3. Цена и залог не могут быть отрицательными');
    }
    else {
        const home = {
        agenstvo: agenstvo,
        zalog: zalog,
        cena: cena,
        FIOvlad: FIOvlad,
        ploshad: ploshad,
        displayInfo: function () {
            if (agenstvo === "нет" || agenstvo === "" ){
                return ` ${this.FIOvlad}  предоставляет уютный дом, площадью ${this.ploshad} кв/м для комфортного отдыха!!!   Залог: ${this.zalog}руб (возвращается после истечения срока сдачи) ------- Цена: ${this.cena}руб   Хорошего настроения и до новых встреч!`;
            }
            else{
                return `Агенство ${this.agenstvo} предоставляет уютный дом, площадью ${this.ploshad} кв/м для комфортного отдыха!!!   Залог: ${this.zalog}руб (возвращается после истечения срока сдачи) ------- Цена: ${this.cena}руб    ФИО арендодателя: ${this.FIOvlad}   Хорошего настроения и до новых встреч!`;
            }
        }
    };
        homes.push(home);
        updatehomeList();
        agenstvoInput.value = '';
        zalogInput.value = '';
        cenaInput.value = '';
        FIOvladInput.value = '';
        ploshadInput.value = '';
    }
}
function deletehome(index) {
    homes.splice(index, 1);
    updatehomeList();
}

function edithome(index) {
    const home = homes[index];
    const newag = prompt('Укажите новое агенство:', home.agenstvo);
    const newzal = parseInt(prompt('Введите новый залог:', home.zalog));
    const newcena = parseInt(prompt('Введите новую цену *:', home.cena));
    const newFIOv = prompt('Введите ваше ФИО *:', home.FIOvlad);
    const newploshad = parseInt(prompt('Введите новую площадь *:', home.ploshad));
    if (newag===""){
        home.agenstvo.value="нет";
    }
    else if (newzal=== null){
        home.zalog.value=0;
    }
    else if(newag!==null){
        home.agenstvo = newag;
    }
    else if (newzal!==0){
        home.zalog= newzal;
    }
    else if ( newzal<0 || newcena<=0 || newFIOv==="" || newploshad<10) {
      alert('В полях присутсвуют ошибки. Учтите следующие требования\n  1. Необходимо заполнить все поля, помеченные *\n  2. Площадь должна быть больше 10кв/м\n  3. Цена и залог не могут быть отрицательными');
         return;
    }
    home.cena = newcena;
    home.FIOvlad = newFIOv;
    home.ploshad = newploshad;
    updatehomeList();
}
