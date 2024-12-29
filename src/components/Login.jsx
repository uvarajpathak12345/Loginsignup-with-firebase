import React , {useState} from 'react';
import styled from 'styled-components';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import {login} from '../Services/authentication';
import { UserContext } from '../Services/UserContext';
import { useContext } from 'react';




const Login = () => {


  const handleCreateAccount = () => {
    setUser({ ...user, pagechange: true });
  }; 


  
  //defining thee useState 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading , setLoading] = useState(false);
  const { user , setUser } = useContext(UserContext);




  // handling the submit of the form 
  const handlesubmit = async (e) => {
    e.preventDefault();


   try{
    setLoading(true)
    let response = await login({email,password});
    setUser({
      firstname:response.firstname,
      lastname:response.lastname,
      isLogin:true,
    })
   
    
   }catch(err){
    console.log('failed login',err);
    alert('Incorrect email or password');
   }finally{
    setLoading(false)
    setIsLogin(true)
   }

  }


  



  return (
   <>
      <Wrapper>
      <Header>
        <h1>Login to Your Account</h1>
        <p>Access your personalized dashboard and more</p>
      </Header>
      <FormWrapper>
        <form onSubmit={(e) => handlesubmit(e)}>
          <div className="form-group">
            <label>Email</label>
            <div className="input-group">
              <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email" />
            </div>
          </div>


          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <input value={password} onChange={e => {setPassword(e.target.value)}} type="password" placeholder="Enter your Password" />
            </div>
          </div>


          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

        
          <button type='submit' className="btn-primary">{loading? 'Login...':'Login'}</button>
          <p onClick={handleCreateAccount} className='cursor-pointer'>Create New account</p>
          <p>Or login with</p>



          <div className="social-login">
            <button className="btn-google">
              <FaGoogle /> Google
            </button>
            <button className="btn-facebook">
              <FaFacebook /> Facebook
            </button>
          </div>
        </form>
      </FormWrapper>
    </Wrapper>
   </>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f7f9fc;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        font-weight: bold;
        color: #333;
      }

      .input-group {
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      }
    }

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        color: #007bff;
        text-decoration: none;
      }
    }

    .btn-primary {
      background: #007bff;
      color: #fff;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s;

      &:hover {
        background: #0056b3;
      }
    }

    .social-login {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 10px;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s;

        &.btn-google {
          background: #db4437;
          color: #fff;

          &:hover {
            background: #c33c2f;
          }
        }

        &.btn-facebook {
          background: #3b5998;
          color: #fff;

          &:hover {
            background: #2d4373;
          }
        }
      }
    }
  }
`;



export default Login;