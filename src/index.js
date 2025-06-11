const cardData = [
  {
    "bandeira": "Visa",
    "prefixes": ["4"],
    "lengths": [13, 16, 19]
  },
  {
    "bandeira": "Mastercard",
    "prefixes": ["51-55", "2221-2720"],
    "lengths": [16]
  },
  {
    "bandeira": "Elo",
    "prefixes": ["401178", "438935", "5067", "5090", "6504", "6516", "6550"],
    "lengths": [16]
  },
  {
    "bandeira": "American Express",
    "prefixes": ["34", "37"],
    "lengths": [15]
  },
  {
    "bandeira": "Discover",
    "prefixes": ["6011", "622126-622925", "644-649", "65"],
    "lengths": [16, 19]
  },
  {
    "bandeira": "Hipercard",
    "prefixes": ["6062", "3841"],
    "lengths": [13, 16, 19]
  },
  {
    "bandeira": "Diners Club",
    "prefixes": ["300-305", "36", "38"],
    "lengths": [14]
  },
  {
    "bandeira": "Enroute",
    "prefixes": ["2014", "2149"],
    "lengths": [15]
  },
  {
    "bandeira": "JCB",
    "prefixes": ["3528-3589"],
    "lengths": [16]
  },
  {
    "bandeira": "Voyager",
    "prefixes": ["8699"],
    "lengths": [15]
  },
  {
    "bandeira": "Aura",
    "prefixes": ["50"],
    "lengths": [16]
  }
];

function validateCreditCard(cardNumber) {
  const cardLength = cardNumber.length;

  for (const card of cardData) {
    // Check if the length matches
    if (!card.lengths.includes(cardLength)) {
      continue;
    }

    // Check if the prefix matches
    for (const prefix of card.prefixes) {
      if (prefix.includes('-')) {
        const [start, end] = prefix.split('-').map(Number);
        const cardPrefix = parseInt(cardNumber.slice(0, start.toString().length), 10);
        if (cardPrefix >= start && cardPrefix <= end) {
          return card.bandeira;
        }
      } else if (cardNumber.startsWith(prefix)) {
        return card.bandeira;
      }
    }
  }

  return "Invalid card";
}

// Example usage:
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