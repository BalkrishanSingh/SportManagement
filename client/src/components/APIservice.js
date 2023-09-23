

export default class APIService{
    static updateEquipment(id,data){
        return fetch(`http://127.0.0.1:5000/equipment/${id}/`,{
            'method': 'PUT',
            headers:{
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
    }
}