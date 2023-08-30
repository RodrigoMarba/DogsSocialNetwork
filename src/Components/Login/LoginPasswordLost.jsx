import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Head from "../Helper/Head";

function LoginPasswordLost() {
	const login = useForm();

	const { data, loading, error, request } = useFetch();

	async function handleSubmit(event) {
		event.preventDefault();

		if (login.validate()) {
			const { url, options } = PASSWORD_LOST({
				login: login.value,
				url: window.location.href.replace("lost", "reset"),
			});

			await request(url, options);
		}
	}

	return (
		<section className="animeLeft">
			<Head title="Lost password" />
			<h1 className="title">Lost password?</h1>
			{data ? (
				<p style={{ color: "#4c1" }}>{data}</p>
			) : (
				<form onSubmit={handleSubmit}>
					<Input
						label="Add yout email or username to reset your password"
						type="text"
						name="email"
						{...login}
					/>
					{loading ? <Button disabled>Send Email</Button> : <Button>Send Email</Button>}
				</form>
			)}
			<Error error={error} />
		</section>
	);
}

export default LoginPasswordLost;
