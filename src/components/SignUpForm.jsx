export default function SignupForm() {

    function signUpHandler(event) {
        event.preventDefault();
        const formEl = event.target;
        const formData = new FormData(formEl);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("form submitted: ", {email, password});
        formEl.reset(); 
    }

    function signUp(formData) {
        const email = formData.get("email");    
        const password = formData.get("password");
        console.log("form submitted 2", {email, password});
    }

    return (
    <section className="signup-form">
      <h2>Signup form</h2>
      <form action={signUp} onSubmit={signUpHandler}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" defaultValue="trung@gmail.com"/>
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" placeholder="must be at least 8 characters" />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder="Tell us about yourself"></textarea>  
        <br />

        <button type="submit">Create account</button>
        
      </form>
    </section>
  )
}