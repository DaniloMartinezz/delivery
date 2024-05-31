import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <div className="  font-inter text-textgray-400">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">Nome</label>
                    <input type="text" id="name" name="name" placeholder='Digite seu nome' value={formData.name} onChange={handleChange} className="w-full border border-cardgray-300 bg-transparent rounded-md px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input type="email" id="email" name="email" placeholder='Digite seu E-mail' value={formData.email} onChange={handleChange} className="w-full border border-cardgray-300 bg-transparent rounded-md px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">Nova senha</label>
                    <input type="password" id="senha" name="senha" placeholder='Crie uma senha' value={formData.senha} onChange={handleChange} className="w-full border border-cardgray-300 bg-transparent rounded-md px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1">Como podemos ajudar?</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border border-cardgray-300 bg-transparent rounded-md px-3 py-2" />
                </div>
                <Link to="/my-address">
                    <button type="submit" className="bg-violet-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-violet-800 transition-colors w-full">Enviar</button>
                </Link>
            </form>
        </div>
    );
}

export default SignUpForm;
