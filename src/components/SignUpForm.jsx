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
        // const email = formData.get("email");
        // const password = formData.get("password");
        // console.log("form submitted 2", { email, password });
        // // radio buttons
        // const employmentStatus = formData.get("employmentStatus");
        // console.log("employmentStatus: ", employmentStatus);
        // // checkboxes
        // const dietaryRestrictions = formData.getAll("dietaryRestrictions");
        // console.log("dietaryRestrictions: ", dietaryRestrictions);
        // // select & options
        // const favColor = formData.get("favColor");
        // console.log("favColor: ", favColor);

        // get all form data as an object
        const data = Object.fromEntries(formData);
        const dietaryRestrictions = formData.getAll("dietaryRestrictions");
        const fullData = { ...data, dietaryRestrictions };
        console.log("form submitted 2", fullData);
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

                {/* Radio buttons */}
                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true} />
                        Full-time
                    </label>
                </fieldset>
                <br />

                {/* Checkbox */}
                <fieldset>
                    <legend>Dietary Restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="gluten-free" defaultChecked={true} />
                        Gluten-free
                    </label>
                </fieldset>
                <br />

                {/* Textarea */}
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" placeholder="Tell us about yourself"></textarea>
                <br />

                {/* Select & Options */}
                <div className="favColor-container">
                    <label className="lb-favColor" htmlFor="favColor">What is your favorite color?</label>
                    <select name="favColor" id="favColor" defaultValue="">
                        <option value="">Choose</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                        <option value="Purple">Purple</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                </div>

                <button type="submit">Create account</button>

            </form>
        </section>
    )
}