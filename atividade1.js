// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

function expandirRetrair(e) {
    let bot = e.currentTarget;
    let divEl = bot.parentNode;
    let click = divEl.classList.toggle('expandido');

    if (click === true)
        bot.innerHTML = "-";
    else
        bot.innerHTML = "+";
}

document.querySelectorAll('.botao-expandir-retrair').forEach(botEl => {
    botEl.addEventListener('click', expandirRetrair);
});