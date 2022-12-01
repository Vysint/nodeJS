function deleteProduct(btn) {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
}
