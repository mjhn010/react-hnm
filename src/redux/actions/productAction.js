function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    console.log(data);
  };
}
function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS",payload:{data}})
  };
}

export const productAction = { getProducts, getProductDetail };
