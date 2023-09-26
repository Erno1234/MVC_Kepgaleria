class NagyKepView{
    #kep
    constructor(szuloElem, kep){
        this.#kep=kep;
        this.szuloElem = szuloElem;
        this.#htmlLetrehozasas()
        this.balGombElem =$("#balGomb")
        this.jobbGombElem =$("#jobbGomb")
        this.nagyIMGElem = $("#nagyKep");
        this.balGombElem.on("click",()=>{
            this.#esemenyLetrehozas("bal");
        })
        this.jobbGombElem.on("click",()=>{
            this.#esemenyLetrehozas("jobb");
        })
    }
    nagyKepBeallit(kep){
        this.nagyIMGElem.attr({"src":kep, "alt":kep});
    }
    #esemenyLetrehozas(esemenynev){
        const esemenyem= new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }
    #htmlLetrehozasas(){
            let txt = "<button id ='balGomb'>Bal</button>";
            txt += `<div class="fokeptarolo"> <img id="nagyKep" src="${this.#kep}" alt="${this.#kep}"> </div>`;
            txt += "<button id ='jobbGomb'>Jobb</button>";
            this.szuloElem.html(txt);
    }
}
export default NagyKepView