import { useForm } from "react-hook-form";

// <Reason why use React hook forms>
// Less code (v)
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events (v)
// Easier Inputs (v)

// 기능: Validation
// required를 사용하려면 onSubmit에 handleSubmit을 넣어줘야한다.
// handleSubmit은 매개변수로 받는 또다른 함수를 실행시킨다.
// requried된것들의 조건을 만족하면 매개변수함수(onValid)가 실행된다.
// requried의 조건을 만족하지 못하면 만족하지 못한 input에 커서가 자동으로 이동한다.

export default function Forms() {
  const { register, handleSubmit } = useForm();
  // register = input과 state를 연결시켜준다.
  const onValid = () => {
    console.log("im valid bby");
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
        {...register("email", { required: true })}
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
      <input type="submit" value="Create Account" />
    </form>
  );
}
