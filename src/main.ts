type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

/* Apartado 1

 a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría*/

let pacientesPediatra: Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
): Pacientes[] => {

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatra.push(pacientes[i]);
        }
    }

    return pacientesPediatra;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(pacientesPediatra)

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

let pacientesPediatraMenorDiezAnios: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
): Pacientes[] => {

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pacientesPediatraMenorDiezAnios.push(pacientes[i]);
        }
    }

    return pacientesPediatraMenorDiezAnios;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


/* Apartado 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true / false dependiendo si se da la condición, algo así como: */

let pacientesProtocoloUrgencia: Pacientes[] = [];

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {

            activarProtocolo = true;
            return activarProtocolo
        }
    }

    return activarProtocolo
};

console.log(activarProtocoloUrgencia(pacientes));
console.log(pacientesProtocoloUrgencia)

/* Apartado 3
El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia. */
let nuevosPacientesMedicoFamilia: Pacientes[] = [];

const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
): Pacientes[] => {

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientes[i].especialidad = "Medico de familia";
            nuevosPacientesMedicoFamilia.push(pacientes[i]); //He puesto este push para aislar los que eran de pediatria y se reasignaban a medico de familia.
        }
    }
    return nuevosPacientesMedicoFamilia
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(nuevosPacientesMedicoFamilia);

/* Apartado 4
Queremos saber si podemos mandar al Pediatra a casa(si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría */

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

    let pacientesPediatra = false;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatra = true;
            return pacientesPediatra
        }
    }

    return pacientesPediatra
};

console.log("¿Hay pacientes de Pediatria?", HayPacientesDePediatria(pacientes));

/* Apartado 5
Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología*/

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}
const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {

    const conteoPacientes: NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    }
    let i = 0;
    while (i < pacientes.length) {
        switch (pacientes[i].especialidad) {
            case "Medico de familia":
                conteoPacientes.medicoDeFamilia++
                break;
            case "Pediatra":
                conteoPacientes.pediatria++
                break;
            case "Cardiólogo":
                conteoPacientes.cardiologia++
                break;
            default:
                break;
        }
        i++;
    }

    return conteoPacientes

};

const conteoPacientesEspecialidad = cuentaPacientesPorEspecialidad(pacientes)
console.log(conteoPacientesEspecialidad);
