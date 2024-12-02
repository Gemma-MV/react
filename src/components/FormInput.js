import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function FormInput() {
    return (
        <form>
            <div>
                <label for="">Nombre: </label>
                <input tipe="text"></input>
            </div>
            <div>
                <label for="">Apellidos: </label>
                <input tipe="text"></input>
            </div>
        </form>
    );
}