<template>
	<div class="container">
		<div class="counter">{{ count.message }}</div>
		<form @submit.prevent="addCount" class="mb-3">
			<div v-if="error" class="alert alert-dismissible alert-warning">
				<button type="button" class="close" data-dismiss="alert">×</button>
			</div>

			<button type="submit" class="btn btn-primary">Increment</button>
			<button type="button" class="btn btn-primary" @click="resetCount()">
				Reset
			</button>
		</form>
	</div>
</template>

<script>
const API_URL = "http://localhost:4000/count";

export default {
	name: "App",
	data: () => ({
		error: "",
		count: "",
	}),
	mounted() {
		fetch(API_URL)
			.then((response) => response.json())
			.then((result) => {
				this.count = result;
			});
	},
	methods: {
		addCount() {
			this.count.message += 1;

			fetch(API_URL, {
				method: "POST",
				body: JSON.stringify(this.count),
				headers: {
					"content-type": "application/json",
				},
			});
		},
		resetCount() {
			this.count.message = 0;
			fetch(API_URL, {
				method: "POST",
				body: JSON.stringify(this.count),
				headers: {
					"content-type": "application/json",
				},
			});
		},
	},
};
</script>

<style>
img {
	max-width: 300px;
	height: auto;
}

.container {
	text-align: center;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
}
.list-group {
	border: 1px solid red;
}

.counter {
	width: 100%;
	font-size: 90px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 30%;
	height: 200px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5%;
	margin: 50px;
}

.btn {
	margin: 0 10px;
	width: 90px;
}
</style>
