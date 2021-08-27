# language: pt

Funcionalidade: Doctor
    como um Doctor
    Eu devo curar outro Traveler para que ele siga saudável
    Eu posso caçar para obter mais comida
    Para que eu posso seguir saudável.

    Contexto:
        Dado um Doctor de nome "Robson"
        E ele sempre começa com 1 de comida
        E ele sempre começa a viagem saudável.

    Cenário: Comeu e não ficou doente
        Quando o Doctor comer 1 vezes
        Então a quantidade de comida deve ser igual 0
        E o Doctor não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Doctor comer 2 vezes
        Então a quantidade de comida deve ser igual 0
        E o Doctor ficará doente
