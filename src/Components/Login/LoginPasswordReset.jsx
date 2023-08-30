import React, { useEffect, useState } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

function LoginPasswordReset() {
	const navigate = useNavigate();

	const [login, setLogin] = useState("");
	const [key, setKey] = useState("");

	const password = useForm();

	const { error, loading, request } = useFetch();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		const key = params.get("key");
		const login = params.get("login");

		if (key) setKey(key);
		if (login) setLogin(login);
	}, []);

	async function handleSubmit(event) {
		event.preventDefault();

		if (password.validate()) {
			const { url, options } = PASSWORD_RESET({
				login,
				key,
				password: password.value,
			});

			const { response } = await request(url, options);
			if (response.ok) navigate("/login");
		}
	}

	return (
		<section className="animeLeft">
			<Head title="Reset password" />
			<h1 className="title">Reset password</h1>
			<form onSubmit={handleSubmit}>
				<Input label="Type new password" type="password" name="password" {...password} />
				{loading ? (
					<Button disabled>Reset password</Button>
				) : (
					<Button>Reset password</Button>
				)}
			</form>
			<Error error={error} />
		</section>
	);
}

export default LoginPasswordReset;
