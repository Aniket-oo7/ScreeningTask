function toggleDescription(element) {
    var totalCost = element.querySelector('.cost')
    document.getElementById('total').innerHTML = "Total: " + totalCost.innerHTML

    var radioInput = element.querySelector('#productRadio');

    if (radioInput) {
      radioInput.checked = !radioInput.checked;
    }

    const description = element.querySelector('.description');
    if (description.style.display === 'none') {
      description.style.display = 'block';
    }
 
  }