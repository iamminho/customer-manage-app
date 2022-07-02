import { FieldErrors, useForm } from "react-hook-form";

// <Reason why use React hook forms>
// Less code (v)
// Better validation (v)
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events (v)
// Easier Inputs (v)

// 기능: Validation
// required를 사용하려면 onSubmit에 handleSubmit을 넣어줘야한다.
// handleSubmit은 매개변수로 받는 또다른 함수를 실행시킨다.
// requried된것들의 조건을 만족하면 매개변수함수(onValid)가 실행된다.
// requried의 조건을 만족하지 못하면 requried에 적힌 내용들이 message에 담기게 된다.
// requried의 조건을 만족하지 못한 input에 커서가 옮겨진다.

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  // register = input과 state를 연결시켜준다.
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
  };
  const onInValid = (errors: FieldErrors) => {
    console.log("errors:", errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "Username is requried",
          minLength: {
            message: "The username at least 5",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "email is requried" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "password is requried",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
