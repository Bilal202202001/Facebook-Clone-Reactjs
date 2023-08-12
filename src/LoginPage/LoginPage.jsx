import React from 'react'
import '../LoginPage/LoginPage.css';
import { Link, OutLet } from 'react-router-dom';

let LoginPage = () => {
    return (
        <>
            <div id='mainBox'>
                <div className='section1'>
                    <h1 id='fTitle'>facebook</h1>
                    <p id='fPara'>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className='section2'>
                    <div id='section21'>
                        <input type='text' placeholder='Email address or phone number' className='inputs' />
                        <input type='password' placeholder='password' className='inputs' />
                        <button className='logIn btn'>
                        <Link to='/mainpage' className='ref'>Log in</Link>
                        </button>
                        <a href='/' className='links'>Forgotten password?</a>
                        <div className='line'></div>
                        <button className='create btn'>
                        <Link to='/mainpage' className='ref'>Create New Account</Link>
                        </button>
                    </div>
                    <div id='id=section22'>
                        <p id='linker'><a href='/' className='createPageLink'>Create a Page</a> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage