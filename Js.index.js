// Definindo um objeto com respostas automáticas
const respostasAutomaticas = {
    "eaii": "Oi! Como posso te ajudar?",
    "como você tá?": "Eu to bem, pensando em mil projetos",
    "quem é vc?": "Eu sou uma versão Yohan automatizado.",
    "tchau": "flww!",
    // perguntas e respostas genericas que peguei numa conversa aleatoriakkkkk
};

function responder(input) {
    let entrada = input.toLowerCase();e
    if (respostasAutomaticas[entrada]) {
        return respostasAutomaticas[entrada];
    } else {      
        return "Desculpe, eu não entendi. Poderia repetir?";
    }
}
function conversar() {
    console.log("Bem-vindo ao chat automatizado!");
    console.log("Digite 'tchau' para sair.");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const perguntar = () => {
        rl.question("> ", (resposta) => {
            if (resposta.toLowerCase() === 'tchau') {
                console.log("flww!");
                rl.close();
            } else {
                console.log(responder(resposta));
                perguntar();
            }
        });
    };
    perguntar();
}
conversar();
