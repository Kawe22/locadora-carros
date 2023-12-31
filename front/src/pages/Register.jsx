import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import React from "react";
import '../styles/logins.css'
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [successMessage, setSuccessMessage] = useState(""); // Estado para a mensagem de sucesso



    //função para cadastrar na API "JSON QUE SERVER PARA A REQUISIÇÃO" *********** Mudar de acordo com o site dps 
    const realizarCadastro = () => {
        const cadastro = {
            "email": email,
            "nome": firstName,
            "password": password, 
            "UsuarioRole": "user"
        }

        try {
            axios.post("http://localhost:8080/api/auth/registrar", cadastro)
                .then((response) => {
                    setSuccessMessage("Cadastro efetuado com sucesso!");
                    // Utilize o SweetAlert para mostrar a mensagem de sucesso
                    Swal.fire({
                        title: 'Cadastro efetuado com sucesso!',
                        icon: 'success',
                    });
                })
                .catch((error) => {
                    console.log("Erro ao cadastrar. Tente novamente.");
                });
        } catch (error) {
            console.log("Erro na requisição.");
        }
        
    } 
return <div>
    <div className="login">
        <Container>
            <Row>
                <Col lg='10' md='10' sm='10'>
                    <form className="login-form">
                        <span className="login-form-title"> Criar Conta </span>

                        <div className="wrap-input">
                            <input
                                className={firstName !== "" ? "has-val input" : "input"}
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Firs Name"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={lastName !== "" ? "has-val input" : "input"}
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Last Nome"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={confirmPassword !== "" ? "has-val input" : "input"}
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Confirm Password"></span>
                        </div>

                        <div className="container--form-btn">
                            <button className="login-form-btn" onClick={(e) => { 
                                e.preventDefault();realizarCadastro();
                                }}>Cadastrar</button>
                            </div>

                        <div className="text-center">
                            <span className="txt1">Já possui conta? </span>
                            <Link className="txt2" to="/login">
                                Acessar com Email e Senha
                            </Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
</div>
};
export default Register;