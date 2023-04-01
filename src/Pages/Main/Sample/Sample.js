import React, { useEffect, useState } from 'react'
import Card, { CardBody } from '../../../Components/Card/Card';
import './Sample.scss';
import Button from '../../../Components/Form/Button';
import CalenderInline from '../../../Components/CalenderInline/CalenderInline';

const Sample = ({title}) => {
    // const a = [1,2,3,4,5,6,7,8];
    // const [products, setProducts] = useState([])
    // const [pageNo, setPageNo] = useState(0)
    // const [isLoading, setIsLoading] = useState(false)
    // const headers = { 'content-type': 'application/json', 'accept': 'application/json' }
    // const limit = 15;
    // useEffect(() => {
    //     setIsLoading(true)
    //     fetchProducts();
    // },[])


    // const fetchProducts =() => {
    //     fetch(`http://api-dev.kneady.in/kneady-product-catalog-search/v1/product-catalog/search//mcat-poultry/category/cat-chicken?isPreview=false&limit=${limit}&offset=${pageNo}&includeProductCatalogMenu=false&viewport=desktop&breaker=1670063212985`, {headers}).then(
    //         response => response.json()
    //     ).then(data => {
    //         let p = JSON.parse(JSON.stringify(products))
    //         p = p.concat(data.productCatalog.skus)
    //         setProducts(p);
    //         setIsLoading(false)
           
    //     })
    // }

    // window.onscroll = function(ev) {
    //     if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    //         if (!isLoading) {
    //             setIsLoading(true);
    //             let no = pageNo
    //             setPageNo(no + 1)
    //             fetchProducts();
    //         }
    //     }
    // };

  return (
    // <section id='dashboard' className='py-4'>
    //     <div className='flex max-sm:block justify-between mb-4 '>
    //       <div className='flex justify-between'>
    //         <h4 className='main-title'>{title}</h4>
    //       </div>
    //     </div>
    //     <div className='flex flex-wrap items-stretch'>
    //         {
    //             (products && products.length > 0) &&
    //             products.map ((sk) => {
    //                 return(
    //                     <div key={sk.skuId} className=' max-sm:w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 p-2 rounded-md overflow-hidden cursor-pointer '>
    //                         <Card classes='card-border overflow-hidden h-full rounded-md w-full'>
    //                             <CardBody classes='!p-0 relative'>
    //                                 <div className={`status-tag-line ${sk.inventoryStatus === 'Out Of Stock' ? 'out-of-stock' : 'active'}`}> {sk.inventoryStatus}</div>
    //                                 <div className='relative'>
    //                                     <img alt='product' className='h-[200px] w-full zoom' src={`http://assets-dev.kneady.in${sk.skuMainImageUrl}`} />
    //                                     <div className='w-[60px] ml-[20px] absolute z-20 flex items-center justify-center bottom-0 bg-white rounded-full custom-box-shadow h-[60px]'>
    //                                         <img src='https://www.kneady.in/assets/kneady_logo.png'  className='w-full'/>
    //                                     </div>
    //                                 </div>
    //                                 <div className='w-full p-5 !pt-10'>
    //                                     <div className='text-[15px] font-semibold h-[40px] flex items-center'> {sk.productName} </div>
    //                                     <div className='flex justify-between mt-2'>
    //                                         <div className='flex quantity-container items-center ripple'>
    //                                             <button className='text-[13px] font-normal'>Quantity</button>
    //                                             <div className='pl-[10px] '>
    //                                                 <select className=' outline-none !bg-transparent'>
    //                                                     <option value={''}>1</option>
    //                                                     <option value={3}>2</option>
    //                                                     <option value={2}>3</option>
    //                                                 </select>
    //                                             </div>
    //                                         </div>
    //                                         <div>
    //                                             <div className='font-semibold'>₹{sk.price.listingPrice}</div>
    //                                             <div className='line-through text-[13px]'>₹{sk.wholesalePrice.wholesalePrice}</div>
    //                                         </div>
    //                                     </div>
    //                                     <div className='mt-3'>
    //                                         <Button classes={'min-w-[120px]'} btnType={'primary'}>Buy now</Button>
    //                                     </div>
    //                                 </div>
    //                             </CardBody>
    //                         </Card>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // </section>
    <>
        <Card>
            <CalenderInline/>
        </Card>
        
    </>
  )
}

export default Sample