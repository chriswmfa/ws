const request = require("supertest")
const app = require("../dist/index").default

describe("User API", () => {
	let email = (Math.random() + 1).toString(36).substring(7) + "@gmail.com"
	let createdUserId

	it("should create a new user", async () => {
		const response = await request(app)
			.post("/users")
			.send({
				data: {
					type: "user",
					attributes: {
						name: "Test User",
						email: email,
						password: "password",
            phone: "12345",
            address: "15 Hello Street"
					},
				},
			})
			.expect(200)

		const { data } = response.body
		createdUserId = data.id
		expect(data.id).toBeDefined()
		expect(data.attributes.name).toBe("Test User")
		expect(data.attributes.email).toBe(email)
		expect(data.attributes.phone).toBe("12345")
    expect(data.attributes.address).toBe("15 Hello Street")
	})

	it("should get a user by ID", async () => {
		const response = await request(app).get(`/users/${createdUserId}`).expect(200)

		const { data } = response.body
		expect(data.id).toBe(createdUserId)
		expect(data.id).toBeDefined()
		expect(data.attributes.name).toBe("Test User")
		expect(data.attributes.email).toBe(email)
		expect(data.attributes.phone).toBe("12345")
    expect(data.attributes.address).toBe("15 Hello Street")
	})

	it("should update a user by ID", async () => {
		const response = await request(app)
			.patch(`/users/${createdUserId}`)
			.send({
				data: {
					type: "user",
					attributes: {
						name: "Test User Updated",
					},
				},
			})
			.expect(200)

		const { data } = response.body
		expect(data.id).toBe(createdUserId)
		expect(data.attributes.name).toBe("Test User Updated")
	})

	it("should delete a user by ID", async () => {
		console.log(createdUserId)
		await request(app).delete(`/users/${createdUserId}`).expect(204)
	})
})
