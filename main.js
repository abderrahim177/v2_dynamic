let titre = document.getElementById('Titre');
let destination = document.getElementById('localisation');
let note = document.getElementById('time');
let view = document.getElementById('views');
let submit = document.getElementById('submit');
let Annuler = document.getElementById('Annuler');
let image = document.getElementById('image');
let btn_form = document.getElementById('modal')
let form = document.getElementById('Destination_page');

let tab = [];
let counter = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    counter++;
    let newdest = {
        id :counter,
        titre: titre.value,
        destination: destination.value,
        note: note.value,
        view: view.value,
        image: image.value,
    }
    
    tab.push(newdest);
    console.log(tab);
    afficherVoyage();
    clearData();
    btn_form.classList.add('hidden');
});




function afficherVoyage() {

    let array = '';
    for (let i = 0; i < tab.length; i++) {

        array += ` 
        <section class="h-[300px] w-[100%]">

        <a href=""><img id="image" class="mt-7 w-[100%] lg:w-[100%]" src="${tab[i].image}" alt="jungel"></a>
        <article class="flex justify-between mr-3 ml-3">
            <div>
                <P id="titre" class="font-bold lg:text-[40px]">${tab[i].titre}</P>
             </div>
             <div>
             <i class="fa-solid fa-location-dot lg:text-[40px]"></i>
             <span id="localisation" class="lg:text-[30px]">${tab[i].destination}</span>
             <i class="fa-regular fa-clock lg:text-[40px]"></i>
             <span id="time" class="lg:text-[30px]">${tab[i].note}</span>
             <i class="fa-solid fa-eye lg:text-[40px]"></i>
             <span id="views"  class="lg:text-[30px]">${tab[i].view}</span>
             </div>
        </article>
        <div class="flex justify-end pr-[10px] pt-[10px] gap-[10px] ">
                <button id="delete" onclick ="deleteVoyage(${i})"><i  class="fa-solid fa-trash text-red-600 text-[20px]"></i></button>
                <i class="fa-solid fa-pen text-[20px] text-blue-600"></i>
                
             </div>
`;
    }

    document.getElementById('countainer').innerHTML = array;


}


function clearData() {
    titre.value = '';
    image.value = '';
    destination.value = '';
    note.value = '';
    view.value = '';
}


 function deleteVoyage(index){
    tab.splice(index , 1);
    afficherVoyage() 
}
