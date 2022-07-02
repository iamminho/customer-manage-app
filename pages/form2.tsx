import { useForm } from "react-hook-form";

// <Reason why use React hook forms>
// Less code (v)
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events
// Easier Inputs (v)

export default function Forms() {
  const { register, watch } = useForm();
  // register = input과 state를 연결시켜준다.
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
