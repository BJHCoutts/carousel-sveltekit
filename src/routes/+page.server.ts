// import res from "$lib/dummyData/cards.json"

export async function load({fetch}) {

	try {

		const res = await fetch(`/src/lib/dummyData/cards.json`)
	
		const data = await res.json()
	
		return data

	} catch (error) {

		console.error(error) 
	}
}