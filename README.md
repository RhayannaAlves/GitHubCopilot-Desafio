# GitHubCopilot-Desafio

# Validador de Cartões de Crédito

Este projeto implementa um validador de cartões de crédito em JavaScript. Ele verifica a validade de um número de cartão de crédito com base em sua bandeira, prefixo e comprimento.

## Funcionalidades

- Identifica a bandeira do cartão de crédito com base nos prefixos e comprimentos válidos.
- Suporta. as seguintes bandeiras:
  - Visa
  - Mastercard
  - Elo
  - American Express
  - Discover
  - Hipercard
  - Diners Club
  - Enroute
  - JCB
  - Voyager
  - Aura
- Retorna a bandeira do cartão ou informa que o cartão é inválido.

## Estrutura do Código

### `cardData`
Uma lista de objetos que define os prefixos e comprimentos válidos para cada bandeira de cartão.

### Função `validateCreditCard(cardNumber)`
- **Entrada**: Um número de cartão de crédito como string.
- **Saída**: A bandeira do cartão ou `"Invalid card"` se o número não corresponder a nenhuma bandeira.

### Exemplo de Uso
```javascript
console.log(validateCreditCard("4556765795628575")); // Output: Visa
console.log(validateCreditCard("5285287349371276")); // Output: Mastercard
console.log(validateCreditCard("6011943330958047")); // Output: Discover
console.log(validateCreditCard("344304938662997")); // Output: American Express
console.log(validateCreditCard("6062823112988701")); // Output: Hipercard
console.log(validateCreditCard("38399442491090")); // Output: Diners Club
console.log(validateCreditCard("201412345678901")); // Output: Enroute
console.log(validateCreditCard("3530111333300000")); // Output: JCB
console.log(validateCreditCard("869912345678901")); // Output: Voyager
console.log(validateCreditCard("5012345678901234")); // Output: Aura
