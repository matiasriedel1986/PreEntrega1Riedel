let totalEmpleados;

let presentes = 0;

let ausentes = 0;

let ingresados = 1;

let x;

alert ("Bienvenido al sistema de consulta de presentismo MUÑE");

function gracias() {

    alert("¡Gracias por usar el sistema de consulta de presentimo MUÑE!");

};

 

totalEmpleados = Number(prompt("Por favor ingresar la cantidad total de empleados de la empresa"));

 

    for(let ingresados = 1;ingresados <= totalEmpleados;ingresados++){

      x = prompt(`El trabajador ${ingresados} esta (P) presente o (A) ausente?`)

      if(x == 'P'){

        presentes++

      }

      else if (x == 'A'){

        ausentes++

      }}

      let presentismo = (presentes * 100)/totalEmpleados;

    console.log(`El numero total de empleados es: ${totalEmpleados}`); 

    console.log(`Hay ${presentes} trabajadores presentes`);

    console.log(`Hay ${ausentes} trabajadores ausentes`);

    console.log(`El porcentaje de presentismo es ${presentismo} %`);

    gracias();


