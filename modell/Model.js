import { KEPEKLISTA } from "./adat.js";

class Model {
  #kepLista = [];
  #id;
  constructor() {
    this.#kepLista = KEPEKLISTA;
    this.#id = 0;
  }
  getList(){
    return this.#kepLista
  }
  getAktKep(){
    return this.#kepLista[this.#id];
  }
  getIDKep(id){
    this.#id = id;
    return this.#kepLista[id];
  }
  jobb() {
    this.#id++;
    if (this.#id > this.#kepLista.length-1) {
      this.#id = 0;
    }
  }
  bal() {
    this.#id--;
    if (this.#id < 0) {
      this.#id = this.#kepLista.length-1;
    }
  }

}
export default Model;
