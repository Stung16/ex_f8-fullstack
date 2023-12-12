import BannerProductDetail from '@/components/BannerProductDetail'
import React from 'react'
import { DATA_API, DATA_IMG } from '@/Utils/config'


const getData = async (id) => {
  const data = await fetch(`${DATA_API}/pages/${id}`);
  const response = await data.json();
  return response;

}

const ProductDetail =async ({params}) => {
  const data = await getData(params.slug)
  return (
    <>
        <BannerProductDetail data={data} />
    </>
  )
}

export default ProductDetail