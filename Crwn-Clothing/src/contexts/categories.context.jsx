import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=>{
        //when u run async function inside useEffect, create a new async function.
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        //then we call the function inside of the callback
        getCategoriesMap();
    },[])

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // },[])

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value} > {children} </CategoriesContext.Provider>
    )
}
