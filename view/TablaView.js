import TablaSorView from "./TablaSorView.js";
class TablaView{
    #lista
    constructor(szuloElem,lista){
        this.szuloElem = szuloElem;
        this.#lista = lista;
        this.tablaMegjelenit();
    }

    tablaMegjelenit(){
        let txt = '<table class="table table-bordered">';
        for (const key in this.#lista) {
            txt += new TablaSorView(this.#lista[key], this.szuloElem);
        }
        txt += '</table>';
        this.szuloElem.html(txt);

    }

}
export default TablaView