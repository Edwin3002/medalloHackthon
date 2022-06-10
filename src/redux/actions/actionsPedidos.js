import {
    addDoc, collection, deleteDoc, doc, getDocs,
    query, updateDoc, where,
} from 'firebase/firestore';
import { getDataFire } from '../../firebase/ConfigFireBase';

//paint pedidos

export const paintPedidosAsync = () => {
    return async (dispatch) => {
        const getDataPedidos = await getDocs(
            collection(getDataFire, 'pedidos')
        );
        const pedidos = [];
        getDataPedidos.forEach((pedi) => {
            pedidos.push({
                ...pedi.data(),
            });
        });
    };
};

//add pedidos

export const addPedidosAsync = (pedi) => {
    console.log(pedi)
    return (dispatch) => {
        addDoc(collection(getDataFire, 'pedidos'), pedi)
            // .then((resp) => {
            //     dispatch(addCareerSync(pedi));
            // })
            // .catch((err) => {
            //     console.warn(err);
            // });
    };
};