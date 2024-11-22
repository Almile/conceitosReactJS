import React, { useState } from 'react';// Importa React e o hook useState
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Importa componentes do react-router-dom para navegação
import '../styles/Tabs.css'; //Estilo da pagina Tabs

// Importar páginas de projetos
import Contador from './Contador';
import ChangeBackground from './ChangeBackground';
import ToDoList from './ToDoList';
import Temporizer from './Temporizer';
import NameFilter from './NameFilter';
import RegistrationForm from './RegistrationForm';
import Timer from './Timer';
import PostPage from '../pages/PostPage';
import Gallery from './Gallery';

// Content barra de links - paginas: sobre, projetos e contato
const content = [
    {
        label: "Sobre",
        items: [
            "React é extremamente popular",
            "Facilita a criação de interfaces de usuário complexas e interativas",
            "É poderoso e flexível",
            "Possui um ecossistema muito ativo e versátil"
        ]
    },
    {
        label: "Projetos",
        items: [
            { name: "Contador Simples", path: "/Contador" },
            { name: "Alteração de Cor de Fundo", path: "/ChangeBackground" },
            { name: "Lista de Tarefas", path: "/ToDoList" },
            { name: "Temporizador com useEffect", path: "/Temporizer" },
            { name: "Filtro de Lista", path: "/NameFilter" },
            { name: "Formulário de Registro Simples", path: "/RegistrationForm" },
            { name: "Aplicação de Requisição de Dados Simples", path: "/PostPage" },
            { name: "Galeria de Imagens com Visualização Detalhada", path: "/Gallery" },
            { name: "Timer com Intervalo e Alerta", path: "/Timer" }
        ]
    },
    {
        label: "Contato",
        items: [
            "Página oficial (react.dev)",
            "GitHub"
        ]
    }
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1); 
    return (
        <BrowserRouter>
            <div className="container">
                {/* Header da página */}
                <header>
                    <h1>React.js</h1>
                    <p>Usando a biblioteca React para renderizar a UI</p>
                    <div id="tabs">
                        <menu>
                            {content.map((tab, index) => (
                                <button
                                    key={tab.label}
                                    className={activeTab === index ? "active" : ""}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </menu>
                    </div>
                </header>

                {/* Content sobre */}
                {activeTab === 0 && (
                        <div> 
                            <h2>Sobre</h2>
                            <ul className='center-items'>
                                <p><b>Atividade proposta para pratica de conceitos essenciais em ReactJS</b></p>
                                {content[0].items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                <div className="layout">
                    {/* Lista - no lado esquerdo */}
                    {activeTab === 1 && (
                        <div className="sidebar">
                            <ul>
                                {content[1].items.map((project) => (
                                    <li key={project.name}>
                                        <Link to={project.path}>{project.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                   

                    {/* Conteúdo do projeto - no lado direito */}
                    {activeTab === 1 && (
                        <div className="content">
                            <Routes>
                                <Route path="/Contador" element={<Contador />} />
                                <Route path="/ChangeBackground" element={<ChangeBackground />} />
                                <Route path="/ToDoList" element={<ToDoList />} />
                                <Route path="/Temporizer" element={<Temporizer />} />
                                <Route path="/NameFilter" element={<NameFilter />} />
                                <Route path="/RegistrationForm" element={<RegistrationForm />} />
                                <Route path="/Timer" element={<Timer />} />
                                <Route path="/PostPage" element={<PostPage />} />
                                <Route path="/Gallery" element={<Gallery />} />
                            </Routes>
                        </div>
                    )}
                    {/* Content - contato */}
                    {activeTab === 2 && (
                        <div className="contact"> 
                            <h2>Contato</h2>
                            <ul>
                            <label> Name: </label>
                            <input type="text" name="name"/>

                            <label>Email:  </label>
                            <input type="email" name="email"/>
                            <textarea name="" id="" placeholder='Deixe uma mensagem...'></textarea>
                                <p></p>
                                {content[2].items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Tabs;
