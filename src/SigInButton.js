import React, { useState } from 'react'
import AppWinReg from "./AppWindowReg";

 import styled from "styled-components"
//
 import './css/modal.css'

const SignInButton = styled.button`
font-size: 18px;
		margin-left: 56px;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		cursor: pointer;
	    width: 45px;
	    height: 45px;
		&:hover .text{
			text-decoration: underline;} 
            ${({ active }) =>
    active}`;

let item;
item={
    email: '',
    password: ''
}

 async function autorize(email, password) {
     await fetch(`/auth`, {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(item)
     });
     this.props.history.push('/');
 }

function SignInButtons() {
    const [modalActive, setModalActive] = useState(false)
    // return AXIOS.post('/auth', data).then((response) => {
    //     //context.commit('putLogin', data);
    //     var str = response.headers.authorization;
    //     localStorage.setItem('token', str.substring(7));
    return (
        <div>
            <SignInButton onClick={() => setModalActive(true)}>ВХОД</SignInButton>
            <AppWinReg active={modalActive} setActive={setModalActive}>
                <div className="headerI">Авторизация</div>
                <input className="text" placeholder="NickName" value={item.email}></input>
                <div></div>
                <input type="password" className="text" placeholder="password" value={item.password}/>
                <div></div>
                <button className = "green" >Войти</button>
            </AppWinReg>
        </div>
    );
}

export default SignInButtons