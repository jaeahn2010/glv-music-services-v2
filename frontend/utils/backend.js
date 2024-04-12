import axios from 'axios'

//clients CRUD
export async function getClients() {
    const { data } = await axios.get(`/api/clients`)
    return data
}

export async function postClient(client) {
    const { data } = await axios.post('/api/clients', client)
    return data
}
export async function updateClient(client, clientId) {
    const { data } = await axios.put(`/api/clients/${clientId}`, client)
    return data
}

export async function deleteClient(clientId) {
    const { data } = await axios.delete(`/api/clients/${clientId}`)
    return data
}

//musicians CRUD
export async function getMusicians() {
    const { data } = await axios.get(`/api/musicians`)
    return data
}

export async function postMusician(musician) {
    const { data } = await axios.post('/api/musicians', musician)
    return data
}
export async function updateMusician(musician, musicianId) {
    const { data } = await axios.put(`/api/musicians/${musicianId}`, musician)
    return data
}

export async function deleteMusician(musicianId) {
    const { data } = await axios.delete(`/api/musicians/${musicianId}`)
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
    const { data } = await axios.post('/api/opuses', opus)
    return data
}
export async function updateOpus(opus, opusId) {
    const { data } = await axios.put(`/api/opuses/${opusId}`, opus)
    return data
}

export async function deleteOpus(opusId) {
    const { data } = await axios.delete(`/api/opuses/${opusId}`)
    return data
}

//requests CRUD
export async function getRequests() {
    const { data } = await axios.get(`/api/requests`)
    return data
}

export async function getRequestsByClient(clientId) {
    const { data } = await axios.get(`/api/requests/${clientId}`)
    return data
}

export async function getRequestsByMusician(musicianId) {
    const { data } = await axios.get(`/api/requests/${musicianId}`)
    return data
}

export async function postRequest(request) {
    const { data } = await axios.post('/api/requests', request)
    return data
}
export async function updateRequest(request, requestId) {
    const { data } = await axios.put(`/api/requests/${requestId}`, request)
    return data
}

export async function deleteRequest(requestId) {
    const { data } = await axios.delete(`/api/requests/${requestId}`)
    return data
}

//reviews CRUD
export async function getReviews() {
    const { data } = await axios.get(`/api/reviews`)
    return data
}

export async function getReviewsByClient(clientId) {
    const { data } = await axios.get(`/api/reviews/${clientId}`)
    return data
}

export async function getReviewsByMusician(musicianId) {
    const { data } = await axios.get(`/api/reviews/${musicianId}`)
    return data
}

export async function postReview(review) {
    const { data } = await axios.post('/api/reviews', review)
    return data
}
export async function updateReview(review, reviewId) {
    const { data } = await axios.put(`/api/reviews/${reviewId}`, review)
    return data
}

export async function deleteReview(reviewId) {
    const { data } = await axios.delete(`/api/reviews/${reviewId}`)
    return data
}