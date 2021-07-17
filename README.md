- express --view=pug expenses-taller
- http://edcfcd65f668.ngrok.io


POST http://edcfcd65f668.ngrok.io/expenses
{
"expense":123
}



- Se hará un taller de programación en vivo en donde los estudiantes deberán completar el reto de crear una aplicación en Node.js aplicando los conocimientos adquiridos.

- Reto:
    - Se debe crear una API con Express.js que me permita registrar los gastos diarios y mostrar la suma de esos gastos.
    - Los gastos se deben enviar por POST a la ruta /expenses y se deben guardar en un archivo JSON llamado expenses.json, el archivo escrito se debería ver así :

    ```jsx
    {
      "expenses": [
        {
          "expense": 1500
    		
        },
    {"expense":60000},
    {"expense":3000}
      ]
    }

    ```

  El cuerpo de la solicitud debe estar asi:

    ```jsx
    {
    "expense":3000
    }
    ```

  En la respuesta HTTP se debe devolver el mismo JSON

- Se debe devolver la suma de los gastos que fueron escritos en el archivo expenses.json en GET /expenses/sum la respuesta se deberia ver así:

```jsx
{
"sum":64500
}
```

- Instalar Postman para llamar a las rutas en el siguiente sitio: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)