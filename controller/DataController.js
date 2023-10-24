import DataService from "../modell/DataService.js";
import UrlapModel from "../modell/UrlapModel.js";
import DataView from "../view/DataView.js";
import HibaView from "../view/HibaView.js";
import TablaView from "../view/TablaView.js";
import UrlapView from "../view/urlap/UrlapView.js";
class DataController {
  constructor() {
    console.log("🦼(╯°□°）╯︵ ┻━┻༼ つ ◕_◕ ༽つ🤦‍♂️🤦‍♂️🤦‍♂️🤵👰🧜‍♀️🧜‍♂️🛌🛀✍");

    this.dataService = new DataService();
    const urlapmodel = new UrlapModel();
    
    const tablaView = new TablaView($(".lista"), urlapmodel.adat);
    const urlapView = new UrlapView($(".urlap"), urlapmodel.adatLeiras);
    $(window).on("valid", (event) => {
        console.log(event.detail.urlapAdat)
    });

    this.dataService.getData("../adat.json", this.megjelenit, this.hibaMegjelenit);
  }

  megjelenit(lista) {
    console.log("controllerben", lista);
    new DataView(lista, $(".lista"));
  }

  hibaMegjelenit(error) {
    console.log(error);
    new HibaView(lista, $(".lista"));
  }
}
export default DataController;
