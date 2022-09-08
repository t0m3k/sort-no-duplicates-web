const formInput = () => {
  const input = $("#numberInput");

  const value = parseInt(input.val());

  // if invalid value received clear input, focus on it again and exit function
  if (isNaN(value)) {
    input.val("");
    input.focus();
    return;
  }

  let style = value === 1337 ? "table-success" : "";
  style = Result.includes(value) ? "table-danger" : style;
  addToTable(value, "#numberList", style);

  // clear result list table
  $("#resultList").html("");

  Result.addValue(value);

  // clear input
  input.val("");

  // focus input
  input.focus();
};
