const formInput = () => {
  const input = $("#numberInput");

  const value = parseInt(input.val());

  // if no value received clear input, focus and exit function
  if (!value) {
    input.val("");
    input.focus();
    return;
  }

  const danger = Result.includes(value) ? "table-danger" : "";
  addToTable(value, "#numberList", danger);

  // clear result list table
  $("#resultList").html("");

  Result.addValue(value);

  // clear input
  input.val("");

  // focus input
  input.focus();
};
