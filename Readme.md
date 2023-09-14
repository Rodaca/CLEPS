
# Microservicio CL EPS

Dar Solucion a CampusLands EPS que requiere de la realización de un sistema de gestión de citas, donde se pueda crear, administrar, consultar y eliminar (con logs y registro) de las citas realizadas. Dicho esto, el sistema (BackEnd) debe permitir mediante unos EndPoints distribuir los procedimientos necesarios para su correcto funcionamiento, pues el equipo de Front-End requerirá de dichos EndPoints para plasmar a nivel de UI/UX las funcionalidades para su personal administrativo y pacientes. 


## EndPoints de las consultas:

1. Obtener todos los pacientes de manera alfabética.
localhost:6964/api/usuario/ordenar
2. Obtener las citas de una fecha en específico , donde se ordene los pacientes de manera alfabética.


3. Obtener todos los médicos de una especialidad en específico (por ejemplo, ‘Cardiología’).
localhost:6964/api/medico/especialidad
    para buscar la especialidad cambia la constante especialiadad
    1 Cardiología
    2 Dermatologia
    3 Pediatria
    4 Gastroenterología
    5 Oftalmología
    6 Neurología
    7 Ortopedia
    8 Psiquiatría
    9 Endocrinología
    10 Urología
4. Encontrar la próxima cita para un paciente en específico (por ejemplo, el paciente con user_id 1).
localhost:6964/api/usuario/citaPaciente 
    para buscar pos usuario cambia la constante usuario
5. Encontrar todos los pacientes que tienen citas con un médico en específico (por ejemplo, el médico con **med_numMatriculaProfesional 1**).

6. Encontrar todas las citas de un día en específico (por ejemplo, ‘2023-07-12’).
localhost:6964/api/cita/filtroFecha
    para buscar la fecha de busqueda cambia la constante fecha 
7. Obtener todos los médicos con sus consultorios correspondientes.
localhost:6964/api/medico/listarconsultoria
8. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_numMatriculaProfesional 1 en ‘2023-07-12’).
9. Obtener lo/s consultorio/s donde se aplicó las citas de un paciente.
10. Obtener lo/s consultorio/s donde se aplicó las citas de un paciente.
11. Insertar un paciente a la tabla usuario, donde si es menor de edad deberá solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente (El usuario deberá poder ingresar de manera personalizada los datos del usuario a ingresar).
12. Mostrar todas las citas que fueron rechazadas de un mes en específico. Dicha consulta deberá mostrar la fecha de la cita, el nombre del usuario y el médico designado.

