# Ejercicio de Identificación de Número Par o Impar

Este es un ejercicio simple en Node.js que solicita al usuario un número y determina si es par o impar.

## Requisitos

- Tener instalado [Node.js](https://nodejs.org/) en tu máquina.
- No es necesario instalar librerías externas, ya que solo usamos la librería integrada `readline`.

## Descripción

Este script utiliza la librería `readline` de Node.js para leer la entrada del usuario desde la consola. Cuando el usuario ingresa un número, el programa determina si el número es par o impar. Si el valor ingresado no es un número válido, el programa solicitará que se ingrese un número válido.

## Funcionamiento

1. El programa solicita al usuario ingresar un número.
2. Luego, verifica si el valor ingresado es un número válido.
3. Si el número es válido, determina si es par o impar:
   - Si el número es divisible por 2, se considera par.
   - Si no es divisible por 2, se considera impar.
4. Muestra el resultado en la consola.

## Instrucciones

1. Clona o descarga el archivo que contiene este script.
2. Abre una terminal en la carpeta donde se encuentra el archivo.
3. Ejecuta el script con el siguiente comando:

   ```bash
   node index.js
