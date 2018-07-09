var axios = require('axios');


export default{
    async _viacep(cep) {
        var url = 'https://viacep.com.br/ws/{}/json/'.replace('{}', cep)
        try {
        const resp = await axios.get(url);
        return resp
        }
        catch(error){
            console.log(error)
        }

    }
}
