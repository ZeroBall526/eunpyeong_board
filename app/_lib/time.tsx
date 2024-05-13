function time() {
    const today = new Date()
    let month = today.getMonth()+1
    const send_date= today.getFullYear() + "/" + month + "/" + today.getDate() +" " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    return send_date
}

const gettime = time()

export default gettime