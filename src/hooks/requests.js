const URL = "http://localhost:8000/v1"

// Load planets and return as JSON.
async function httpGetPlanets() {
	const res = await fetch(`${URL}/planets`)
	const resJson = await res.json()
	console.log()
	return resJson
	// TODO: Once API is ready.
}

async function httpGetLaunches() {
	const res = await fetch(`${URL}/launches`)
	const resJson = await res.json()
	console.log()
	return resJson.sort((a, b) => {
		return a.flightNumber - b.flightNumber
	})
	// TODO: Once API is ready.
	// Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
	// TODO: Once API is ready.
	// console.log(launch)
	try {
		return await fetch(`${URL}/launches`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(launch),
		})
	} catch (err) {
		return {
			ok: false,
		}
	}
	// Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
	// TODO: Once API is ready.
	try {
		return await fetch(`${URL}/launches/${id}`, {
			method: "delete",
		})
	} catch {
		return {
			ok: false,
		}
	}
	// Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
