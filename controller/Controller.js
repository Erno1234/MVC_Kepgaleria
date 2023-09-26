import Model from "../modell/Model.js";
import NagyKepView from "../view/NagyKepView.js";
class Controller {
  constructor() {
    const MODEL=new Model();
    const NAGYKEP = new NagyKepView($(".nagykep"),MODEL.getAktKep());
    $(window).on("bal",()=>{
        MODEL.bal();
        let aktKep = MODEL.getAktKep();
        NAGYKEP.nagyKepBeallit(aktKep);
    })
    $(window).on("jobb",()=>{
        MODEL.jobb();
        let aktKep = MODEL.getAktKep();
        NAGYKEP.nagyKepBeallit(aktKep);
    })

}
}
export default Controller;
