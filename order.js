fetch('./coffee_list.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })