import React from 'react'

function Login() {
  return (
    <div class="d-flex justify-content-center mt-5">
      <div class="border-dark m-2 mb-5 w-50 p-4 shadow">

        <form class="form ">

          <div class="mb-3 mt-3">
            <input type="text" class="form-control " placeholder='Username' />
          </div>

          <div class="mb-3 mt-3">
            <input type="passsword" class="form-control" placeholder='Password'/>
          </div>

          <div class="text-center">
           
            <button type="button" class="btn btn-success">Login</button>
           
            <p class="mt-3"> Don't have an account? 
              <a href="register.html" class="link-underline-light">Signup</a>
            </p>
          
          </div>

        </form>
      </div>

    </div>
  )
}

export default Login