const xlsx = require('xlsx')

const wb = xlsx.readFile('kepler_data.xlsx')

const ws = wb.Sheets['kepler_data']

var data = xlsx.utils.sheet_to_json(ws)

var newData = data.filter(function(obj){
    if(obj.__EMPTY_2 === 'CONFIRMED' && (obj.__EMPTY_30 >=.36 && obj.__EMPTY_30 <=1.11 )&& obj.__EMPTY_24 < 1.6){
        
            obj.KepoiName = obj.__EMPTY
            obj.KeplerName = obj.__EMPTY_1
            obj.KoiDisposition = obj.__EMPTY_2
            obj.KoiPrad = obj.__EMPTY_24
            obj.KoiInsol = obj.__EMPTY_30
            
            return obj     
    }
})

console.log(newData);