import { useForm } from "react-hook-form";

const Form = () => {
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <form>
      <input {...register("username")} type="text" name="Username" required />
      <input {...register("email")} type="email" name="Email" required />
      <input
        {...register("password")}
        type="password"
        name="Password"
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
