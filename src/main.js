const addItem = () => {
  const input = $("#numberInput");

  $("#numberList").append(`
              <li class="list-group-item">${input.val()}</li>`);

  values.push(input.val());

  input.val("");

  input.focus();
};
