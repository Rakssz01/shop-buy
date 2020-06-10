import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
// import { signInWithGoogle } from '../../firebase/firebase.js';
import { auth,signInWithGoogle } from '../../firebase/firebase.js'



class SignIn extends Component {

    state={
        email: '',
        password: ''
      }

      handleSubmit =async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try {
          await auth.signInWithEmailAndPassword(email,password)
          this.setState({email:'',password:''})
         
          
        } catch (error) {
          console.log(error);
          
        }
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    render() {
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={this.handleSubmit}>
               
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
              <div className='buttons'>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in With Google </CustomButton>
              </div>
              
            </form>
          </div>
        )
    }
}

export default SignIn
