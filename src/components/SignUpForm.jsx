export default function SignupForm() {

    function signUpHandler(event) {
        event.preventDefault();
        const formEl = event.target;
        const formData = new FormData(formEl);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("form submitted: ", { email, password });
        formEl.reset();
    }

    function signUp(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("form submitted 2", { email, password });
        // radio buttons
        const employmentStatus = formData.get("employmentStatus");
        console.log("employmentStatus: ", employmentStatus);
    }

    return (
        <section className="signup-form">
            <h2>Signup form</h2>
            {/* <form action={signUp} onSubmit={signUpHandler}> */}
            <form action={signUp} >
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" defaultValue="trung@gmail.com" />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" 
                        placeholder="must be at least 8 characters" required />
                <br />

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true}/>
                        Full-time
                    </label>
                </fieldset>
                <br />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" placeholder="Tell us about yourself"></textarea>
                <br />

                <button type="submit">Create account</button>

            </form>
        </section>
    )
}