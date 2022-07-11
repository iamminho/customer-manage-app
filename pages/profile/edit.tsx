import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import Input from "@components/input";
import { useForm } from "react-hook-form";

interface EnterForm {
  email?: string;
  phone?: string;
}

const EditProfile: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  return (
    <Layout canGoBack>
      <div className="pb-10 px-4 space-y-5">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          label="이메일(Eamil)"
          name="email"
          type="email"
          register={register("email")}
          id="email"
          placeholder="이메일(Eamil)을 입력해주세요"
          required
        />
        <Input
          label="전화번호 "
          name="phone"
          type="number"
          register={register("phone")}
          placeholder="010-0000-0000"
          kind="phone"
          required
        />
        <Button text="프로필 변경" />
      </div>
    </Layout>
  );
};

export default EditProfile;
