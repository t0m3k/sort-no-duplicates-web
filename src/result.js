class Result {
  static #values = [];

  static addValue(value) {
    console.log(
      `Inside addValue, value: ${value}, old values: ${this.#values}`
    );
    this.#values = mergeSort([...this.#values, value]);

    this.#values.forEach((element) => {
      addToTable(element, "#resultList");
    });
  }

  static includes(item) {
    return this.#values.includes(item);
  }
}
