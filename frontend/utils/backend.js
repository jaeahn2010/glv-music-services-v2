import axios from 'axios'

//clients CRUD (+signup & login)
export async function signUp(user) {
    const { data } = await axios.post('/api/clients/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/clients/login', user, {
        withCredentials: true
    })
    return data
}

export async function updateClient(client, clientId) {
    try {
        const { data } = await axios.put(`/api/clients/${clientId}`, client, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error updating client: ', err)
        throw err
    }   
}

export async function deleteClient(clientId) {
    try {
        const { data } = await axios.delete(`/api/clients/${clientId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error deleting client: ', err)
        throw err
    }
}

//musicians CRUD
export async function getMusicians() {
    const { data } = await axios.get(`/api/musicians`)
    return data
}

export async function postMusician(musician) {
    try {
        const { data } = await axios.post('/api/musicians', musician, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error creating musician: ', err)
        throw err
    }
}
export async function updateMusician(musician, musicianId) {
    try {
        const { data } = await axios.put(`/api/musicians/${musicianId}`, musician, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error updating musician: ', err)
        throw err
    }   
}

export async function deleteMusician(musicianId) {
    try {
        const { data } = await axios.delete(`/api/musicians/${musicianId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error deleting musician: ', err)
        throw err
    }
}

//opuses CRUD
export async function getOpuses() {
    const { data } = await axios.get(`/api/opuses`)
    return data
}

export async function getOpusById(opusId) {
    const { data } = await axios.get(`/api/opuses/opus/${opusId}`)
    return data
}

export async function getOpusesByMusician(musicianId) {
    const { data } = await axios.get(`/api/opuses/musician/${musicianId}`)
    return data
}

export async function postOpus(opus) {
    try {
        const { data } = await axios.post('/api/opuses', opus, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error creating opus: ', err)
        throw err
    }
}
export async function updateOpus(opus, opusId) {
    try {
        const { data } = await axios.put(`/api/opuses/${opusId}`, opus, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error updating opus: ', err)
        throw err
    }   
}

export async function deleteOpus(opusId) {
    try {
        const { data } = await axios.delete(`/api/opuses/${opusId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error deleting opus: ', err)
        throw err
    }
}

//requests CRUD
export async function getRequests() {
    try {
        const { data } = await axios.get(`/api/requests`, authHeader)
        return data
    } catch (err) {
        console.error('Error getting requests: ', err)
        throw err
    }
}

export async function getRequestsByClient(clientId) {
    try {
        const { data } = await axios.get(`/api/requests/${clientId}`, authHeader)
        return data
    } catch (err) {
        console.error('Error getting requests by client: ', err)
        throw err
    }
}

export async function getRequestsByMusician(musicianId) {
    try {
        const { data } = await axios.get(`/api/requests/${musicianId}`, authHeader)
        return data
    } catch (err) {
        console.error('Error getting requests by musician: ', err)
        throw err
    }

}

export async function postRequest(request) {
    try {
        const { data } = await axios.post('/api/requests', request, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error creating request: ', err)
        throw err
    }
}
export async function updateRequest(request, requestId) {
    try {
        const { data } = await axios.put(`/api/requests/${requestId}`, request, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error updating request: ', err)
        throw err
    }   
}

export async function deleteRequest(requestId) {
    try {
        const { data } = await axios.delete(`/api/requests/${requestId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error deleting request: ', err)
        throw err
    }
}

// email sender
export async function sendEmail(email) {
    try {
        const { data } = await axios.post('/api/requests/send-email', email, { withCredentials: true })
    } catch (err) {
        console.error('Error sending email: ', err)
        throw err
    }
}

//reviews CRUD
export async function getReviewsByClient(clientId) {
    try {
        const { data } = await axios.get(`/api/reviews/${clientId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error getting reviews by client: ', err)
        throw err
    }
}

export async function getReviewsByMusician(musicianId) {
    try {
        const { data } = await axios.get(`/api/reviews/${musicianId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error getting reviews by musician: ', err)
        throw err
    }
}

export async function postReview(review) {
    try {
        const { data } = await axios.post('/api/reviews', review, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error creating review: ', err)
        throw err
    }
}
export async function updateReview(review, reviewId) {
    try {
        const { data } = await axios.put(`/api/reviews/${reviewId}`, review, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error updating review: ', err)
        throw err
    }   
}

export async function deleteReview(reviewId) {
    try {
        const { data } = await axios.delete(`/api/reviews/${reviewId}`, { withCredentials: true })
        return data
    } catch (err) {
        console.error('Error deleting review: ', err)
        throw err
    }
}