export default class APIService{
    static updateEquipment(id,data){
        return fetch(`/equipment/${id}/`,{
            'method': 'PUT',
            headers:{
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
    }
    static deleteEquipment(id){
        return fetch(`/equipment/${id}/`,{
            'method': 'DELETE',
            headers:{
                'Content-Type': 'applications/json'
            },
        })
        .then(resp => resp.json())
    }
}q    