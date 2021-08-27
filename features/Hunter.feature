# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu posso dar comida para outro Traveler
    Eu devo caçar para obter mais comida
    Para que eu possa seguir viagem saudável.

    Contexto:
        Dado um Hunter de nome "Lucas"
        E ele sempre começa com 2 de comida
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de comida deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeição deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente    

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando Hunter sair para caçar 1 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 3
        E o Hunter não ficará doente
        