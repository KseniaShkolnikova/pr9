let homes = [];
function updatehomeList() {

    const homeList = document.getElementById('home-list');
    const modal = document.getElementById('myModal');

    homeList.innerHTML = ''; // Очищаем список перед обновлением
    homes.forEach((home, index) => {
        const li = document.createElement('li');
        li.classList.add('home-item');
        li.textContent = home.displayInfo();
        const editButton = document.createElement('button');
        editButton.textContent  = 'Изменить дом';
        editButton.classList.add("btns");
        editButton.style.border = null;
        editButton.onclick = function() {
            modal.style.display='block';
            edithome(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить дом';
        deleteButton.classList.add("btns");
        deleteButton.style.border = null;
        deleteButton.onclick = function() {
            deletehome(index);
        };
        li.appendChild(deleteButton);
        homeList.appendChild(li); // Добавляем элемент в список
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
                return `${this.FIOvlad}  предоставляет уютный дом, площадью ${this.ploshad} кв/м для комфортного отдыха!!!   Залог: ${this.zalog} руб  ---------------- Цена: ${this.cena} руб.`
            }
            else{
                return `Агенство ${this.agenstvo} предоставляет уютный дом, площадью ${this.ploshad} кв/м для комфортного отдыха!!!   Залог: ${this.zalog} руб ---------------- Цена: ${this.cena} руб.`;
            }
        }

    };
        homes.push(home);
    }
    updatehomeList();
    agenstvoInput.value = '';
    zalogInput.value = '';
    cenaInput.value = '';
    FIOvladInput.value = '';
    ploshadInput.value = '';
}
function deletehome(index) {
    homes.splice(index, 1);
    updatehomeList();
}

function edithome(index) {
    const home = homes[index];
    const newag = document.getElementById('newAgency').value;
    const newFIOv = document.getElementById('newFIO').value;
    const newzal = document.getElementById('newZal').value;
    const newcena = document.getElementById('newCena').value;
    const newploshad = document.getElementById('newPloshad').value;

    if (newag===""){
        home.agenstvo="нет";
    }
    if (newzal=== null){
        home.zalog=0;
    }
    if(newag!==null){
        home.agenstvo = newag;
    }
    if (newzal!==0){
        home.zalog= newzal;
    }
    if ( newzal<0 || newcena<=0 || newFIOv==="" || newploshad<10) {
      alert(' Учтите следующие требования заполнения\n  1. Необходимо заполнить все поля, помеченные *\n  2. Площадь должна быть больше 10кв/м\n  3. Цена и залог не могут быть отрицательными');
      return;
    }
    else{
        home.cena = newcena;
        home.FIOvlad = newFIOv;
        home.ploshad = newploshad;

    }
    updatehomeList();
    newag.value = '';
    newFIOv.value = '';
    newploshad.value = '';
    newcena.value = '';
    newzal.value = '';

}
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    updatehomeList();
}