import "./SignUs.css"

function SignUs() {
  return (

    <div className='login-pop'>
      <div className="login-pop-container">
        <h5>Login</h5>
        <input type='email' placeholder='Your email' required></input>
        <input type='password' placeholder='password' required></input>

        <div className="login-pop-condition">
          <input type='checkbox' required />
          <p>By continue, I agree to the term of use & privacy policy</p>
        </div>
        <button> Sumbit</button>
      </div>
    </div>
  )
}

export default SignUs;