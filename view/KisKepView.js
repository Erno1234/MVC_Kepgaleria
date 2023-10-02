class KisKepView {
  #kepLista = [];
  constructor(szuloElem, kepLista) {
    this.#kepLista = kepLista;
    this.szuloElem = szuloElem;
    this.#htmlLetrehozasas();
    this.szuloElem.on("click", "img", (event) => {
      const imgId= event.target.id;
      this.#esemenyLetrehozas("közép", imgId);
    });
  }
  #esemenyLetrehozas(esemenynev, imgId) {
    const esemenyem = new CustomEvent(esemenynev,{detail: {id: imgId}});
    window.dispatchEvent(esemenyem);
  }
  #htmlLetrehozasas() {
    let txt = "";
    for (let index = 0; index < this.#kepLista.length; index++) {
      txt += `<div><img src="${this.#kepLista[index]}" alt="${this.#kepLista[index]}" id="${index}"></div>`;
    }
    this.szuloElem.html(txt);
  }
}
export default KisKepView;