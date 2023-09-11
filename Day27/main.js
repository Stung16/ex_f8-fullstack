var btns = document.querySelectorAll("button");
var status = document.createElement("p");
var cartData = document.getElementById("cart_data");
var table = cartData.querySelector('table')
var index = 0


// add carts
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var inputValue = btn.parentElement.querySelector("input").value;
    cartData.style.display = "block";
    var nameProduct =
      btn.parentElement.parentElement.querySelector(
        "td:nth-child(2)"
      ).innerText;
    var priceProduct =
      btn.parentElement.parentElement.querySelector(
        "td:nth-child(3)"
      ).innerText;
    var tBody = document.createElement('tbody')
    var deleteProduct = tBody.querySelectorAll('.delete-item')
    index++
    tBody.innerHTML = `<tbody>
    <tr>
        <td>${index}</td>
        <td>${nameProduct}</td>
        <td>${priceProduct}</td>
        <td><input type="number" class="quantity" data-id="1" value="${inputValue}"></td>
        <td>${priceProduct * inputValue}</td>
        <td><button type="button" class="delete-item">Xoá</button></td>
    </tr>
    </tbody>
    `
    table.append(tBody)
    deleteProduct.forEach(function (item) {
      item.addEventListener("click",function () {
      //   item.parentElement.parentElement = ``

      console.log(item);
      })
    })

  });
});



















{
  /* <tbody>
<tr>
    <td>1</td>
    <td>Sản phẩm 1</td>
    <td>1000</td>
    <td><input type="number" class="quantity" data-id="1" value="1"></td>
    <td>1000</td>
    <td><button type="button" class="delete-item">Xoá</button></td>
</tr>
</tbody> */
}
{
  /* <tbody>
<tr>
    <td colspan="3">Tổng</td>
    <td></td>
    <td colspan="2"></td>
</tr>
</tbody> */
}
