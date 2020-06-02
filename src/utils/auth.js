import Cookies from 'js-cookie'
const token = 'Admin'
export function getToken() {
	return Cookies.get(token)
}
