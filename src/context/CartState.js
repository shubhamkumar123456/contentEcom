import React, { useState } from 'react'
import cartContext from './CartContext'
import { toast } from 'react-toastify';

const CartState = (props) => {
    const [searchText, setSearchText] = useState('');
    // console.log(searchText)
    const [cartArr, setcartArr] = useState([]);
    console.log(cartArr)

    const addItem = (ans)=>{
        ans.quantity = 1;
        console.log(ans)
        let findItem = cartArr.find((ele)=>ele.id === ans.id)
        if(findItem){
           return toast.warning('already added in the cart',{position:'top-center'})
            // return alert('already added in the cart')
        }
        else{

            setcartArr([...cartArr,ans])
            toast.success('item added successfully',{position:'top-center'})
        }

    }
    const removeItem = (ans)=>{
        console.log(ans)
    }
    const updateIncrement = (ans, i)=>{
        console.log(ans)
        ans.price = ans.price + (ans.price/ ans.quantity)
        ans.quantity = ans.quantity+1
        let copyArr = [...cartArr];
        copyArr[i] = ans
        setcartArr(copyArr)

    }
    const updateDecrement = (ans)=>{
        console.log(ans)
    }
  return (
    <cartContext.Provider value={{searchText,setSearchText, cartArr,addItem,removeItem,updateDecrement,updateIncrement}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartState
