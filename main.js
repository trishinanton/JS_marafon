const $arenas = document.querySelector('.arenas'); //обращение к DOM элементу является затратной операцией, поэтому вынесем ее из функции
const $randomButton = document.querySelector('.button');
/* Task 0 */
let player1 = {
    player: 1,
    name: 'Anton',
    hp: 100, 
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['pistol', 'gun'],
    attack : function(){console.log(`${this.name} + Fight`)}
}
let player2 = {
    player: 2,
    name: 'Dimon',
    hp: 100, 
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['pistol', 'gun'],
    attack : function(){console.log(`${this.name} + Fight`)}
}



/* Task 1 */

function createElement (tag, className){
    const $tag = document.createElement(tag);
    if (className){
       $tag.classList.add(className); 
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');


    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    $life.style.width = playerObj.hp + '%'; 
    $name.innerHTML = playerObj.name;
    $img.src = playerObj.img;
    
    return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function changeHP(player){
    const $playerLife = document.querySelector('.player'+player.player+' .life')
    player.hp -= Math.ceil(Math.random()*20);
    
    player.hp > 0 ?  $playerLife.style.width = player.hp + '%' : $playerLife.style.width = 0 + '%'
    // console.log(player.hp)
    // $playerLife.style.width = player.hp + '%';


    if(player.hp < 0){
        if (player.player == 1){
        $arenas.appendChild(playerLose(`${player2.name}`));
       
    }else{
        $arenas.appendChild(playerLose(`${player1.name}`));
        
    }  
    $randomButton.disabled = true;
    }
}

function playerLose(name){
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerHTML = name + ' win';

    return $loseTitle;
}

$randomButton.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);

})



