// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputFriend= document.getElementById('friend');
const nameFriends= [];
const ulListFriends =document.getElementById('listFriends');
const ulResult= document.getElementById('result');

function addFriends(){
    
    if(!inputFriend.value) alert('Por favor, digite un nombre');
    else{
        nameFriends.push(inputFriend.value);
        ulListFriends.innerHTML += `<li>${inputFriend.value}</li>`; 
    }
    
}

function sortearAmigo(){
    const randomNum= Math.floor(Math.random()* nameFriends.length);
    const secretFriend= nameFriends[randomNum];
    ulResult.textContent= 'Su amigo secreto es: '+ secretFriend;
}

