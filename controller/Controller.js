import Model from "../modell/Model.js";
import NagyKepView from "../view/NagyKepView.js";
import KisKepView from "../view/KisKepView.js";
class Controller {
  constructor() {
    const MODEL=new Model();
    const NAGYKEP = new NagyKepView($(".nagykep"),MODEL.getAktKep());
    const KISKEP = new KisKepView($(".kiskep"),MODEL.getList());

    $(window).on("közép",(event)=>{
        const imgId = event.detail.id;
        let aktKep = MODEL.getIDKep(imgId);
        NAGYKEP.nagyKepBeallit(aktKep);
    })
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
