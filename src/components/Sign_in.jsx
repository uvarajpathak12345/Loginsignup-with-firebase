import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // For Facebook and Google icons
import { SignIn } from "../Services/authentication";
import { UserContext } from "../Services/UserContext";
import googlelogin from "../Services/googleauthentication";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);



  const handlegooglesignin = async () => {
    try {
      setLoading(true);
      let response = await googlelogin();
      setUser({ ...user, pagechange: false });
      console.log(response)

    } catch (err) {
      console.log(err)
    }finally{
      setLoading(false);
    }
  }



  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let response = await SignIn({ email, password, firstname, lastname });

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <CenteredWrapper>
      <StyledHeader>
        <h1>Welcome to the Sign-In Page</h1>
        <p>Please sign in to continue accessing your account</p>
      </StyledHeader>
      <StyledWrapper>
        <form className="form" onSubmit={(e) => handlesubmit(e)}>
          <div className="flex-column">
            <label>First Name</label>
          </div>
          <div className="inputForm">
            <input value={firstname}
              onChange={(e) => { setFirstname(e.target.value) }}
              type="text"
              className="input"
              placeholder="Enter your First Name"
            />
          </div>


          <div className="flex-column">
            <label>Last Name</label>
          </div>
          <div className="inputForm">
            <input
              value={lastname}
              onChange={(e) => { setLastname(e.target.value) }}
              type="text"
              className="input"
              placeholder="Enter your Last Name"
            />
          </div>



          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              className="input"
              placeholder="Enter your Email"
            />
          </div>


          <div className="flex-column">
            <label>Password</label>
          </div>
          <div className="inputForm">
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              className="input"
              placeholder="Enter your Password"
            />
          </div>



          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <span className="span">Forgot password?</span>
          </div>



          <button type="submit" className="button-submit">
            {loading ? "Sign In....." : "Sign In"}
          </button>


          <p className="cursor-pointer" onClick={() => { setUser({ ...user, pagechange: false }) }}>
            Already have an account? <span className="span">Sign Up</span>
          </p>

          <p className="p line">Or With</p>
          <div className="flex-row">
            <button className="btn google" onClick={handlegooglesignin}>
              <FaGoogle /> Google
            </button>
            <button className="btn facebook">
              <FaFacebook /> Facebook
            </button>
          </div>
        </form>
      </StyledWrapper>
    </CenteredWrapper>
  );
};

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background: linear-gradient(120deg, #2d79f3, #151717);
  width: 100%;
  padding: 20px 0;
`;

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: white;
  }

  p {
    font-size: 1rem;
    color: white;
    margin-top: 5px;
  }
`;

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: "Segoe UI", Roboto, Arial, sans-serif;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .button-submit:hover {
    background-color: #252727;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
  }

  .google {
    color: #db4437;
  }

  .facebook {
    color: #3b5998;
  }

  @media (max-width: 768px) {
    .form {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default Form;
