console.log(`  ____ _ _ _____ ______
    / __ \| | | |_ _|___ /
   | | | | | | | | | | / /  
   | | | | | | | | | | / /   
   | |__| | |__| |_| |_ / /__  
    \___\_\\____/|_____/_____|
                              `)
  
console.log('VAMOS COMEÇAR O QUIZ!!!!')
console.log(`╦═╗╔═╗╔═╗╦═╗╔═╗╔═╗ 
╠╦╝║╣ ║ ╦╠╦╝╠═╣╚═╗ 
╩╚═╚═╝╚═╝╩╚═╩ ╩╚═╝`)

console.log('')
console.log('___________________________')
console.log('')
console.log('A primeira letra de todas as respostas tem que estar em maiúscula')
console.log('Caso voce errar a pergunta, voce nao podera responder novamente.')
console.log('Nao é necessario usar acento')
console.log('')
console.log('___________________________')
console.log('')


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let pontos = 0;

readline.question('Vamos começar o QUIZ?? sim/nao: ', começar => {
    if (começar === 'sim') {
        readline.question('1-Qual é o maior planeta do sistema solar?:', pergunta1 => {
            if (pergunta1 === 'Jupiter') {
                console.log('Esta certa a resposta')
                console.log('Voce ganhou mais um ponto!!')
                pontos++;
            } else {
                console.log('Resposta incorreta')
            }


            readline.question('2-Quem escreveu "Dom Quixote"?:', pergunta2 => {
                if (pergunta2 === 'Miguel de Cervantes') {
                    console.log('Esta certa a resposta')
                    console.log('Voce ganhou mais um ponto!!')
                    pontos++;
                } else {
                    console.log('Resposta incorreta')
                }

                readline.question('3-Qual é a fórmula química da água?:', pergunta3 => {
                    if ( pergunta3 === 'H2o') {
                        console.log('Esta certa a resposta')
                        console.log('Voce ganhou mais um ponto!!')
                        pontos++;
                    } else {
                        console.log('Resposta incorreta')
                    }

                    readline.question('4-Em que ano começou a Primeira Guerra Mundial?:', pergunta4 => {
                        if (pergunta4 === '1914') {
                            console.log('Esta certa a resposta')
                            console.log('Voce ganhou mais um ponto!!')
                            pontos++;
                        } else {
                            console.log('Resposta incorreta')
                        }

                        readline.question('5-Qual é a capital do Japão?:', pergunta5 => {
                            if ( pergunta5 === 'Toquio') {
                                console.log('Esta certa a resposta')
                                console.log('Voce ganhou mais um ponto!!')
                                pontos++;
                            } else {
                                console.log('Resposta incorreta')
                            }

                            readline.question('6-Qual processo as plantas usam para converter luz solar em energia?:', pergunta6 => {
                                if ( pergunta6 === 'Fotossintese') {
                                    console.log('Esta certa a resposta')
                                    console.log('Voce ganhou mais um ponto!!')
                                    pontos++;
                                } else {
                                    console.log('Resposta incorreta')
                                }

                                readline.question('7-Qual é o idioma mais falado no mundo?:', pergunta7 => {
                                    if ( pergunta7 === 'Mandarim') {
                                        console.log('Esta certa a resposta')
                                        console.log('Voce ganhou mais um ponto!!')
                                        pontos++;
                                    } else {
                                        console.log('Resposta incorreta')
                                    }

                                    readline.question('8-Quem pintou a Mona Lisa?:', pergunta8 => {
                                        if ( pergunta8 === 'Leonardo da Vinci') {
                                            console.log('Esta certa a resposta')
                                            console.log('Voce ganhou mais um ponto!!')
                                            pontos++;
                                        } else {
                                            console.log('Resposta incorreta')
                                        }
                                        
                                        readline.question('9-Qual é a distância aproximada entre a Terra e a Lua?(em km):', pergunta9 => {
                                            if ( pergunta9 === '384,400 km') {
                                                console.log('Esta certa a resposta')
                                                console.log('Voce ganhou mais um ponto!!')
                                                pontos++;
                                            } else {
                                                console.log('Resposta incorreta')
                                            }

                                            readline.question('10-Qual é o metal mais abundante na crosta terrestre?:', pergunta10 => {
                                                if (pergunta10 === 'Aluminio') {
                                                    console.log('Esta certa a resposta')
                                                    console.log('Voce ganhou mais um ponto!!')
                                                    pontos++;
                                                } else {
                                                    console.log('Resposta incorreta')
                                                }

                                                console.log(`ACABOU`)
                                                console.log('____________________________________________________________________')
                                                console.log(' ')
                                                console.log('Voce chegou no final do QUIZ DE PERGUNTAS GERAIS')
                                                console.log(' ')
                                                console.log(`Voce terminou o QUIZ com ${pontos}, PARABENS!!!!!😁` )
                                                console.log('ATE A PROXIMA FASE, TCHAU!!')

                                                readline.close()
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })



        })
    } else if (começar === 'nao') {
        console.log('ok, ate a proxima!!!')
        readline.close()
    }
})


