import React from 'react'
import './Form_login.css'

function Form_login() {
  return (
    <div className='main'>
        <h1 id='title'>Dailybrief</h1>

        <form action="" className='form'>
            {/* <div> */}
                <label htmlFor="email">Email</label> <br />
                <input type="email" placeholder='Enter Your email' />
                <br />

                <label htmlFor="password">Password</label> <br />
                <input type="password" placeholder='Enter Your password' />
                <br />
            {/* </div> */}

            <div className='remember'>
                <div>
                    <input type="checkbox" name="rememberme" id="" />
                    <label htmlFor="">Remember me?</label>
                </div>

                <a href="#">Forgot password</a>
            </div>


            <input type="submit" value="Login" className='login-button'/>
        </form>

        <div className="frame">
            <hr />
            <span className='or'>or</span>

            <div className='buttons'>
                <button>
                    <img src="https://i.pinimg.com/736x/2d/69/10/2d69108bd4c046bba683589b106a5dd3.jpg"
                        alt=""
                        width={'45px'}
                        height={'42px'} />
                </button>
                <button>
                    <img src="https://images.hindustantimes.com/tech/img/2023/09/21/960x540/fb_1695273515215_1695273522698.jpg" 
                        alt="" 
                        width={'80px'} 
                        height={'42px'}/>
                </button>
                <button>
                    <img src="https://admin.itsnicethat.com/images/AdihJKT4fXnuV0w24xhusry98yA=/82604/format-webp%7Cwidth-1440/4fd07cea5c3e3c0d810000db.jpg" 
                        alt="" 
                        width={'60px'} 
                        height={'42px'}/>
                </button>
            </div>

            <div className="register">
                Don't have an account? 
                <a href="#"> Register here</a>
            </div>

        </div>
    </div>
  )
}

export default Form_login