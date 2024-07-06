import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams();

  return (
    <>
    <h1>ProductDetail : {params.productId}</h1>
    <p><Link to='..' relative="path">Back</Link></p>
    </>
  )
}

export default ProductDetail