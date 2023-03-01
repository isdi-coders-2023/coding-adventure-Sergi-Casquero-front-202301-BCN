import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <h2 className="form__title">Register for the event</h2>
      <form>
        <div className="form__input-container">
          <label htmlFor="email">
            Email
            <input
              placeholder="Introduce your email"
              type={"text"}
              id="email"
              autoFocus
            />
          </label>
          <span className="form__feedback">Email is required</span>
        </div>

        <div className="form__input-container">
          <label htmlFor="password">
            Password
            <input
              placeholder="Introduce your password"
              type={"password"}
              id="password"
            />
          </label>
          <span className="form__feedback">Password is required</span>
        </div>

        <label className="last-input">
          Image
          <input placeholder="Introduce an image" type={"file"} />
        </label>
        <Button text={"Sign Up"} />
        <span className="form__feedback--error">
          Sorry, something went wrong
        </span>
      </form>
    </FormStyled>
  );
};

export default Form;
