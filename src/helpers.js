const addToTable = (value, table, classes = "") => {
  $(table).append(`
              <li class="list-group-item ${classes}">${value}</li>`);
};
