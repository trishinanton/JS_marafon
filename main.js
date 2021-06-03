/* Task 0 */
let player1 = {
    name: 'Anton',
    hp: 99, 
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['pistol', 'gun'],
    attack : function(){console.log(`${this.name} + Fight`)}
}
let player2 = {
    name: 'Dimon',
    hp: 80, 
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['pistol', 'gun'],
    attack : function(){console.log(`${this.name} + Fight`)}
}

/* Task 1 */
function createPlayer(player, player1, name,  hp) {
    let $div = document.createElement('div');
    $div.classList.add(`${player}`);
    document.querySelector('.arenas').appendChild($div);

    let $progressbar = $div.appendChild(document.createElement('div'));
    $progressbar.classList.add('progressbar');

    let $character = $div.appendChild(document.createElement('div'));
    $character.classList.add('character');

    let $life = $progressbar.appendChild(document.createElement('div'));
    $life.classList.add('life');

    let $name = $progressbar.appendChild(document.createElement('div'));
    $name.classList.add('name');

    let $img = $character.appendChild(document.createElement('img'));

    $life.style.width = '100%';
    $life.innerHTML = player1.hp;
    $name.innerHTML = player1.name;
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif';
    
}

/* createPlayer('player1', 'anton', '80');
createPlayer('player2', 'dimon', '70'); */

createPlayer('player1', player1)
