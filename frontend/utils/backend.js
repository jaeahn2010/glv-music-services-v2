import axios from 'axios'

//clients CRUD
export async function postClient(client) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/clients', client, authHeader)
    return data
}
export async function updateClient(client, clientId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/clients/${clientId}`, client, authHeader)
    return data
}

export async function deleteClient(clientId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/clients/${clientId}`, authHeader)
    return data
}

//musicians CRUD
export async function getMusicians() {
    const { data } = await axios.get(`/api/musicians`)
    return data
}

export async function postMusician(musician) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/musicians', musician, authHeader)
    return data
}
export async function updateMusician(musician, musicianId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/musicians/${musicianId}`, musician, authHeader)
    return data
}

export async function deleteMusician(musicianId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/musicians/${musicianId}`, authHeader)
    return data
}

//opuses CRUD
export async function getOpuses() {
    const { data } = await axios.get(`/api/opuses`)
    return data
}

export async function getOpusesByMusician(musicianId) {
    const { data } = await axios.get(`/api/opuses/${musicianId}`)
    return data
}

export async function postOpus(opus) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/opuses', opus, authHeader)
    return data
}
export async function updateOpus(opus, opusId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/opuses/${opusId}`, opus, authHeader)
    return data
}

export async function deleteOpus(opusId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/opuses/${opusId}`, authHeader)
    return data
}

//requests CRUD
export async function getRequests() {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/requests`, authHeader)
    return data
}

export async function getRequestsByClient(clientId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/requests/${clientId}`, authHeader)
    return data
}

export async function getRequestsByMusician(musicianId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/requests/${musicianId}`, authHeader)
    return data
}

export async function postRequest(request) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/requests', request, authHeader)
    return data
}
export async function updateRequest(request, requestId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/requests/${requestId}`, request, authHeader)
    return data
}

export async function deleteRequest(requestId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/requests/${requestId}`, authHeader)
    return data
}

//reviews CRUD
export async function getReviewsByClient(clientId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/reviews/${clientId}`, authHeader)
    return data
}

export async function getReviewsByMusician(musicianId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/reviews/${musicianId}`, authHeader)
    return data
}

export async function postReview(review) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/reviews', review, authHeader)
    return data
}
export async function updateReview(review, reviewId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/reviews/${reviewId}`, review, authHeader)
    return data
}

export async function deleteReview(reviewId) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/reviews/${reviewId}`, authHeader)
    return data
}

//signup & login
export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}