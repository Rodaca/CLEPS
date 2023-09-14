import express from 'express';
import { MongoClient } from 'mongodb';
import { Router } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT

const client =new MongoClient(process.env.MONGO_URI) 
const db = client.db('EPS');

const path = {
    generalPath:'/api',
    
}

async function connectdb() {
    try {
        await client.connect();
        console.log('db online');
    } catch (error) {
        console.log(error);
    }
}

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

connectdb();

const router = Router();

//1. Obtener todos los pacientes de manera alfabética.
app.use(path.generalPath, router.get('/usuario/ordenar', async (req, res)=>{
    try {
        const collection = db.collection('usuario');
        const result = await collection.find().sort({usu_nombreCompleto: 1}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}));
//2. Obtener las citas de una fecha en específico , donde se ordene los pacientes de manera alfabética.



//3. Obtener todos los médicos de una especialidad en específico (por ejemplo, ‘Cardiología’).
app.use(path.generalPath, router.get('/medico/especialidad', async (req, res)=>{
    try {
        const especialidad = 1
        const collection = db.collection('medico');
        const result = await collection.find({med_especialidad:especialidad}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}));
//4. Encontrar la próxima cita para un paciente en específico (por ejemplo, el paciente con user_id 1).
app.use(path.generalPath, router.get('/usuario/citaPaciente', async (req, res)=>{
    try {
        const usuario = 1
        const collection = db.collection('cita');
        const result = await collection.find({cit_datosUsuario:usuario}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}));
//5. Encontrar todos los pacientes que tienen citas con un médico en específico (por ejemplo, el médico con **med_numMatriculaProfesional 1**).

//6. Encontrar todas las citas de un día en específico (por ejemplo, ‘2023-07-12’).
app.use(path.generalPath, router.get('/cita/filtroFecha', async (req, res)=>{
    try {
        const fecha = "2023-09-15"
        const collection = db.collection('cita');
        const result = await collection.find({cit_fecha:fecha}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}));
//7. Obtener todos los médicos con sus consultorios correspondientes.
app.use(path.generalPath, router.get('/medico/listarconsultoria', async (req, res)=>{
    try {
        const collection = db.collection('medico');

        const result = await collection.aggregate([
            {
              $lookup: {
                from: "consultoria", // Nombre de la colección de consultorios
                localField: "med_consultorio", // Campo en la colección de médicos que se relaciona
                foreignField: "cons_codigo", // Campo en la colección de consultorios que se relaciona
                as: "consultorio" // Nombre del campo que contendrá los datos del consultorio
              }
            }
          ]).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}));
//8. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_numMatriculaProfesional 1 en ‘2023-07-12’).
//9. Obtener lo/s consultorio/s donde se aplicó las citas de un paciente.
//10. Obtener todas las citas realizadas por los pacientes de acuerdo al género registrado, siempre y cuando el estado de la cita se encuentra registrada como “Atendida”.
//11. Insertar un paciente a la tabla usuario, donde si es menor de edad deberá solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente (El usuario deberá poder ingresar de manera personalizada los datos del usuario a ingresar).
//12. Mostrar todas las citas que fueron rechazadas de un mes en específico. Dicha consulta deberá mostrar la fecha de la cita, el nombre del usuario y el médico designado.

