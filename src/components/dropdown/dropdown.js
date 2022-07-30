$(".plus").click(function() {
    var $price = $(".singleInfo__price");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
  });