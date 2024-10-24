import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../context/CartContext'


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
  let store = useContext(cartContext)
  console.log(store)
  let searchvalue = store.searchText
  console.log(searchvalue)
  let navigate = useNavigate()
  const [arr, setarr] = useState([]);
  console.log(arr)
  const getAllData = async () => {
   try {
    let res = await fetch('https://dummyjson.com/products?skip=0&limit=0');
    let data = await res.json();
    // console.log(data) //[]
    setarr(data.products)
   } catch (error) {
      console.log("error in api or internet is not working")
   }
  }
  useEffect(() => {
    getAllData()
  }, [])

  const handleAdd = (ans , i)=>{
    // console.log(ans,i)
    // props.getItem(ans)
  }

  let filterProduct = arr.filter((ele)=>ele.title.toLowerCase().includes(searchvalue) || ele.category.toLowerCase().includes(searchvalue)  )
  console.log(filterProduct)
  //pagination part
    const [currentPage, setcurrentPage] = useState(1);
    let itemPerPage = 9;
    let lastIndex = currentPage * itemPerPage;
    let firstIndex = lastIndex - itemPerPage
    let slicedArr = filterProduct.slice(firstIndex,lastIndex);
    let noOfButton = Math.ceil(arr.length/itemPerPage)
  console.log(noOfButton) // [1,2,3,4,5,6....22]
  // let btnArr = [];
  // for(let i=1 ; i<=noOfButton; i++){
  //   btnArr.push(i)
  // }
  // console.log(btnArr)

  // let btnArr = [...Array(noOfButton+1).keys()].slice(1);
  // console.log(btnArr)

  // let btnArr = Array(noOfButton).fill(0);
  // console.log(btnArr)


  const handleIncrementPage = ()=>{
   if(currentPage < noOfButton){
    setcurrentPage(currentPage+1)
   }
  }
  const handleButtonDecrement = ()=>{
   if(currentPage > 1){
    setcurrentPage(currentPage-1)
   }
  }


  const handleChangePage = (event, newPage) => {
    setcurrentPage(newPage)
   console.log(newPage)
  };

  // const handlePageChange = (e)=>{
  //   console.log(e.target.getAttribute("aria-label").slice(-1))
  //   let page = e.target.getAttribute("aria-label").slice(-1)
  //   setcurrentPage(page)
  //   // console.log(e.target)
  // }


  return (
   <div>
     <div className='grid grid-cols-12 gap-3 p-3'>
     {
              slicedArr.map((ele,i) => {
                return <div key={ele.id} className="lg:col-span-3 m-auto md:col-span-4 sm:col-span-6 col-span-12 max-w-sm bg-white   rounded-lg shadow shadow-lg bg-gradient-to-r from-stone-500 to-stone-700 ">
  <a href="#">
    <img className="p-2 rounded-t-lg" src={ele.thumbnail} alt="product image" />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ele.title}</h5>
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{ele.rating}</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">${ele.price}</span>
     
  
    </div>
 <div className='flex gap-2 my-2'>
 <Link to="/view" state={ele} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link> <br />
 <button onClick={()=>store.addItem(ele)}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
 </div>
  </div>
</div>
// return  <Card className='col-span-4'>
// <CardMedia
//   component="img"
//   alt="green iguana"
//   height="140"
//   image={ele.thumbnail}
// />
// <CardContent>
//   <Typography gutterBottom variant="h5" component="div">
//     Lizard
//   </Typography>
//   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//     Lizards are a widespread group of squamate reptiles, with over 6,000
//     species, ranging across all continents except Antarctica
//   </Typography>
// </CardContent>
// <CardActions>
//   <Button size="small">Share</Button>
//   <Button size="small">Learn More</Button>
// </CardActions>
// </Card>

                
               

              })
            }


    </div>
    

<div className='text-center m-auto w-[max-content]'>
  <nav aria-label="Page navigation example ">
    <ul className="flex items-center -space-x-px h-8 text-sm">
      <li onClick={handleButtonDecrement}>
        <Link to="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Previous</span>
          <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
          </svg>
        </Link>
      </li>
     
   {Array(noOfButton).fill(0).map((ele,i)=>{
      return    <li key={i} onClick={()=>setcurrentPage(i+1)}>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</a>
    </li>
   })}
     
      <li onClick={handleIncrementPage}>
        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Next</span>
          <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  
</div>

{/* <Stack spacing={5}>
     
      <Pagination  page={currentPage} onChange={handlePageChange}   onPageChange={handleChangePage} count={noOfButton} color="primary" />
   
    </Stack> */}


   </div>
  )
}

export default Home
