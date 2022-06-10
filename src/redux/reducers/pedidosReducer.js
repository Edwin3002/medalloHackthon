import { createSlice } from "@reduxjs/toolkit";
import { pedidosFood } from "../../data/pedidos";
const initialState = {
    pedidosItems: pedidosFood.slice(0, 4),
    cantidad: 4,
    total: 0,
    isLoading: true
}

const pedidosReducer = createSlice({
    name: 'pedi',
    initialState,
    reducers: {
        vaciarPedido: (state) => {
            state.pedidosItems = [];
        },
        agregarPedido: (state, action) => {
            const pedItem = action.payload;
            state.pedidosItems = state.pedidosItems.concat(pedItem);
            // state.pedidosItems = state.pedidosItems.push(pedItem);
        },
        removerPedido: (state, action) => {
            const pedItem = action.payload;
            state.pedidosItems = state.pedidosItems.filter((item) => item.id !== pedItem);
        },
        aumentarPedido: (state, { payload }) => {
            const pedItem = state.pedidosItems.find((item) => item.id === payload.id);
            pedItem.cantidad = pedItem.cantidad + 1;
        },
        disminuirPedido: (state, { payload }) => {
            const pedItem = state.pedidosItems.find((item) => item.id === payload.id);
            pedItem.cantidad = pedItem.cantidad - 1;
        },
        totalPedido:(state)=>{
            let cant = 0;
            let tota = 0;
            state.pedidosItems.forEach((pedi)=>{
                cant += pedi.cantidad;
                tota += pedi.cantidad * pedi.precio;
            })
            state.cantidad = cant;
            state.total = tota;
        }
    },
});


export const { vaciarPedido, aumentarPedido, disminuirPedido, agregarPedido, removerPedido, totalPedido } = pedidosReducer.actions
export default pedidosReducer.reducer