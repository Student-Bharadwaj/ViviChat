import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import {  AuthContext } from "../contexts/AuthContext";

function Auth() {
  let [formState, setFormState] = useState(0);
  let [name,setName]=useState("");
  let [username,setUsername]=useState("");
  let [password,setPassword]=useState("");
  let [error,setError]=useState();
  let [messages,setMessages]=useState();
  let {handleRegister,handleLogin}=useContext(AuthContext);

  let handleAuth=async()=>{
    try {
      if(formState===0){
        let result=await handleLogin(username,password);
        console.log(result);


      }
      if(formState===1){
        let result=await handleRegister(name,username,password);
        console.log(result);
        setMessages(result);
        setUsername("");
        setPassword("");
        setFormState(0);
        


      }
      
    } catch (error) {
      let message=(error.response.data.message);
      setError(message);
      
    }

  }
  

  return (
    <div>
      <div className="container text-center mt-5">
        <Button
          variant={formState === 0 ? "contained" : "text"}
          onClick={() => {
            setFormState(0);
          }}
        >
          Signin
        </Button>
        <Button
          variant={formState === 1 ? "contained" : "text"}
          onClick={() => {
            setFormState(1);
          }}
        >
          Signup
        </Button>
      </div>

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      {
        formState===1 ? <MDBInput wrapperClass='mb-4' label='Full Name' value={name}  name='name' id='name' type='text'   onChange={(e)=>{
            setName(e.target.value);
          }} />
        : null
      }
    
     
        <MDBInput
          wrapperClass="mb-4"
          label="Username"
          name="username"
          id="username"
          value={username}
          type="text"
          onChange={(e)=>{
            setUsername(e.target.value);
          }}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          name="password"
          id="password"
          value={password}
          type="password"
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          
          />
         
        </div>
        <p>{error}</p>

        <MDBBtn className="mb-4" onClick={handleAuth}>
          {
            formState===0 ? " Login"
            :"Register"
          }
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </MDBContainer>
    </div>
  );
}

export default Auth;
