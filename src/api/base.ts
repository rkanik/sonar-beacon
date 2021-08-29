import axios from 'axios'

const toFormData = (data: any) => {
	let formData = new FormData()
	Object.entries(data).forEach(([key, value]: [string, any]) => {
		formData.append(key, value)
	})
	return formData
}

const Api = axios.create({
	baseURL: 'https://my-json-server.typicode.com/typicode/demo'
})

export { Api, toFormData }
export default Api