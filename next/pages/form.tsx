import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const onValid = () => {
    console.log("valid!");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", {
          required: true,
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: true,
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: true,
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
