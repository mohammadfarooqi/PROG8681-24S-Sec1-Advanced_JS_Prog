const calculateDiscount = (customer, subtotal) => {
  switch (customer) {
    case 'reg':
      if (subtotal >= 100 && subtotal < 250) {
        return 0.1;
      } else if (subtotal >= 250 && subtotal < 500) {
        return 0.25;
      } else if (subtotal >= 500) {
        return 0.3;
      } else {
        return 0;
      }
    case 'loyal':
      return 0.3;
    case 'honored':
      return subtotal < 500 ? 0.4 : 0.5;
  }
};
$(document).ready(() => {
  $('#calculate').click(() => {
    const customerType = $('#type').val();
    let subtotal = $('#subtotal').val() || 0; // default
    subtotal = parseFloat(subtotal);
    const discountPercent = calculateDiscount(customerType, subtotal);
    const discountAmount = subtotal * discountPercent;
    const invoiceTotal = subtotal - discountAmount;
    $('#subtotal').val(subtotal.toFixed(2));
    $('#percent').val((discountPercent * 100).toFixed(2));
    $('#discount').val(discountAmount.toFixed(2));
    $('#total').val(invoiceTotal.toFixed(2));
    // set focus on type drop-down when done
    $('#type').focus();
  });
  // set focus on type drop-down on initial load
  $('#type').focus();
});
