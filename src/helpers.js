const addToTable = (value, table, style = "") => {
  if (value === 2) value = "2i";
  if (value === 1337) style = "table-success";
  $(table).append(`
              <li class="list-group-item ${style}">${value}</li>`);
};
