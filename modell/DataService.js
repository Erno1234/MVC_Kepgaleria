
class DataService {
 
  constructor() {

  }
  getData(vegpont, callBack, hibaCallBack){
    axios.get(vegpont)
  .then(function (response) {
    // handle success
    console.log("resonse",response);
    console.log("data",response.data);
    console.log("data",response.data.nevek);
    console.log("statusz",response.status);
    console.log("text",response.statusText);
    callBack(response.data.nevek);
  })

  .catch(function (error) {
    // handle error
    hibaCallBack(error);
  })
  .finally(function () {
    // always executed
  });
  }

}
export default DataService;
