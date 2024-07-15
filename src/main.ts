export type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

export interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

export const pacientes: Pacientes[] = [
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

//  Apartado 1

//  a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
): Pacientes[] => {

    let pacientesPediatra: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatra.push(pacientes[i]);
        }
    }

    return pacientesPediatra;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes))

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
): Pacientes[] => {
    let pacientesPediatraMenorDiezAnios: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
            pacientesPediatraMenorDiezAnios.push(pacientes[i]);
        }
    }

    return pacientesPediatraMenorDiezAnios;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))