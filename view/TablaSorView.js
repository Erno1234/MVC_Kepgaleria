class TablaSorView{
    #lista=[]
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.tablaElem = szuloElem;
        this.#sorLetrehoz();
    }

    #sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#lista) {
             txt += `<td>${this.#lista[key]}</td>`
        }
        txt += `<td><span class="kesz">✅👌</span><span class="megse">❌</span><span class="kuka">🗑</span>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
    

    }

}
export default TablaSorView