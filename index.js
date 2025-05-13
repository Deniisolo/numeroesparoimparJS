const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', function(numero) {
  const num = Number(numero);

  if (isNaN(num)) {
    console.log('Por favor ingresa un número válido.');
  } else {
    if (num % 2 === 0) {
      console.log(`${num} es un número par.`);
    } else {
      console.log(`${num} es un número impar.`);
    }
  }

  rl.close();
});

