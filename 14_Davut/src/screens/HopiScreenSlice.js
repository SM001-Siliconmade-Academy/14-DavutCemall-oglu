import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

const initialState={
    hopiImages:[],
    banners:[],
    clickwinsItems:[],
    myOffers:[],
    lovemarks:[],
    userFromDb:[],
    imageNumber:"1",
    anketImage:[]
};

export const getAnketImage=createAsyncThunk(
  "anketImage/getAnketImage",
  async()=>{
    const imagesRef = collection(db, "anketImage");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );



export const getImageNumber=createAsyncThunk(
  "imageNumber/getImageNumber",
  async()=>{
    const imagesRef = collection(db, "imageNumber");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );



export const getUserFromDb=createAsyncThunk(
  "userFromDb/getUserFromDb",
  async()=>{
    const imagesRef = collection(db, "userFromDb");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );

export const getLoveMarksAsync=createAsyncThunk(
  "lovemarks/getLoveMarksAsync",
  async()=>{
    const imagesRef = collection(db, "lovemarks");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );

export const getMyOffersAsync=createAsyncThunk(
  "myOffers/getMyOffersAsync",
  async()=>{
    const imagesRef = collection(db, "myOffers");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );


export const getClickWinItemsAsync=createAsyncThunk(
  "clickwinsItems/getClickWinsItemsAsync",
  async()=>{
    const imagesRef = collection(db, "clickwinsItems");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );

export const getBannersAsync=createAsyncThunk(
  "banners/getBannersAsync",
  async()=>{
    const imagesRef = collection(db, "banners");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            visitUrl: doc.data().visitUrl,
          });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}, );

export const getHopiImagesAsync=createAsyncThunk(
    "hopiscreen/getHopiScreenAsync",
    async()=>{
        const imagesRef = collection(db, "hopiImages");
        const q = query(imagesRef, orderBy("id"));
        getDocs(q)
        .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, doc.data().image);
          data.push({ id: doc.id, image: doc.data().image });
        });
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, );


  const hopiscreenSlice=createSlice({
    name:"hopiscreen",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getHopiImagesAsync.fulfilled, (state, action)=>{
            state.hopiImages=state.hopiImages.concat(action.payload);
        });
    },
  });

  export const selectHopiImages=(state)=>state.hopiscreen.hopiImages;
  export const selectBanners=(state)=>state.hopiscreen.banners;
  export const selectClickWinsItems=(state)=>state.hopiscreen.clickwinsItems;
  export const selectMyOffers=(state)=>state.hopiscreen.myOffers;
  export const selectLoveMarks=(state)=>state.hopiscreen.lovemarks;
  export const selectUserFromDb=(state)=>state.hopiscreen.userFromDb;
  export const selectImageNumber=(state)=>state.hopiscreen.imageNumber;
  export const selectAnketImage=(state)=>state.hopiscreen.anketImage;


  export default hopiscreenSlice.reducer;
