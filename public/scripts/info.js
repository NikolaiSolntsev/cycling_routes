const editBtn = document.querySelector('.js-edit-btn');

editBtn.addEventListener('click', (event) => {
  const editForm = document.querySelector('.edit-form');
  if (editForm.style.display === '') {
    editForm.style.display = 'block';
  }
});

const saveBtn = document.querySelector('.edit-form');

saveBtn.addEventListener('submit', async (event) => {
  event.preventDefault();
  const saveForm = event.target;
  const { trip_name, trip_length, description, id } = saveForm;

  const response = await fetch(`/info/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      trip_name: trip_name.value,
      trip_length: trip_length.value,
      description: description.value,
      id,
    }),
  });

  // const data = await response.json();
  // event.target.closest('.edit-form').remove();
  // document
  //   .querySelector('.js-save-btn')
  //   .insertAdjacentHTML('.js-save-btn', data.html);

  // if (saveBtn.style.display === 'block') {
  //   saveBtn.style.display = '';
  // }
  window.location.reload();
});
