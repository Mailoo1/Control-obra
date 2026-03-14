import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('Nombre_Base_de_datos');

//logica para arracnar la base de datos

const actuqalizarGasoline =()=>{
    const resultado = db.runSync(// consulta SQL para UPDATE
         );
}

export default {
    init,
    ActualizarMateriales
};
