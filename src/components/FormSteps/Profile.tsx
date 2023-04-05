import Input from "@components/Input";
import clsx from "clsx";
import { useState } from "react";
import { createStringRequirements } from "utils/regex";
import { FormDataTypes } from "./FormSteps.types";

const Profile = ({ formData }: FormDataTypes) => {
  const { firstName, lastName, email } = formData;
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const passwordRequirements = createStringRequirements({
    minLength: 6,
    includeNumber: false,
    includeLowercase: true,
    includeUppercase: false,
    includeSpecial: false,
  });

  const handlePasswordChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
    setPasswordError(
      password !== target.value ? "As senhas não correspondem." : ""
    );
  };

  const handleRepeatPasswordChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(target.value);
    setPasswordError(
      password !== target.value ? "As senhas não correspondem." : ""
    );
  };

  return (
    <>
      <div className="sm:flex gap-4">
        <Input
          label="Nome"
          name="firstName"
          placeholder="Guy"
          defaultValue={firstName}
          required
        />
        <Input
          label="Sobremone"
          name="lastName"
          placeholder="Hawkins"
          defaultValue={lastName}
          required
        />
      </div>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="user1@gmail.com"
        defaultValue={email}
        required
      />
      <div className="sm:flex gap-4">
        <div className="w-full">
          <Input
            title="Senha: 8 caracteres incluindo maiúsculas, minúsculas, números e símbolos."
            label="Senha"
            name="password"
            placeholder="**********************"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            pattern={passwordRequirements.toString().slice(1, -1)}
            required
          />
          <p
            className={clsx(
              `${
                !password ? "block opacity-90" : "invisible opacity-0"
              } text-xs text-secondary-01 italic  transition-all duration-700`
            )}
          >
            Senha: 8 caracteres incluindo maiúsculas, minúsculas, números e
            símbolos.
          </p>
        </div>
        <div className="w-full">
          <Input
            label="Confirmar senha"
            name=""
            placeholder="**********************"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            pattern={passwordRequirements.toString().slice(1, -1)}
            required
          />
          {passwordError && (
            <p className="text-danger-01 text-xs italic mt-4">
              {passwordError}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
