const addToTable = (value, table, classes = "") => {
  if (value === 2) value = "2i";
  $(table).append(`
              <li class="list-group-item ${classes}">${value}</li>`);
};
