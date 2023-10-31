export const ProductDetail = ({ params }) => {
  const { id } = params;

  return `
    <h1>chi tiết sản phẩm: ${id}</h1>
    <button onclick = "navigate('/san-pham')">Back</button>
    `;
};
