import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import style from "./style/style.module.css"
import { createCrmThunks, updateCrmThunks } from "../../redux/thunks";

function AddUpdateForm() {
  const { selectedId, value } = useAppSelector((state) => state.crm);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    country: "",
    state: "",
    pin: "",
  });
  useEffect(()=>{
    if (selectedId) {
      let selectedData = value.filter(({_id})=>_id===selectedId)[0];
      setState({
        address:selectedData.address,
        city:selectedData.city,
        country:selectedData.country,
        email:selectedData.email,
        name:selectedData.name,
        phone:selectedData.phone.toString(),
        pin:selectedData.pin.toString(),
        state:selectedData.state,
      })
    }else{
      setState({
        name: "",
        email: "",
        address: "",
        phone: "",
        city: "",
        country: "",
        state: "",
        pin: "",
      })
    }
  },[selectedId, value])
  function saveOrUpdate(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    if (selectedId) {
      dispatch(updateCrmThunks({
        id: selectedId, ...state, phone: Number(state.phone), pin: Number(state.pin),
      }))
    }else{
      dispatch(createCrmThunks({
        ...state, phone: Number(state.phone), pin: Number(state.pin)
      }))
    }
  }
  return (
    <form className={style.form}>
      <h2>{selectedId ? "Update Customer" : "Add Customer"}</h2>
      <label htmlFor="name">Customer's Name</label>
      <input
        id="name"
        type="text"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />

      <label htmlFor="email">Customer's email</label>
      <input
        id="email"
        type="email"
        value={state.email}
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />

      <label htmlFor="address">Customer's address</label>
      <input
        id="address"
        type="text"
        value={state.address}
        onChange={(e) => setState({ ...state, address: e.target.value })}
      />

      <label htmlFor="phone">Customer's phone</label>
      <input
        id="phone"
        type="number"
        value={state.phone}
        onChange={(e) => setState({ ...state, phone: e.target.value })}
      />

      <label htmlFor="city">Customer's city</label>
      <input
        id="city"
        type="text"
        value={state.city}
        onChange={(e) => setState({ ...state, city: e.target.value })}
      />

      <label htmlFor="country">Customer's country</label>
      <input
        id="country"
        type="text"
        value={state.country}
        onChange={(e) => setState({ ...state, country: e.target.value })}
      />

      <label htmlFor="state">Customer's state</label>
      <input
        id="state"
        type="text"
        value={state.state}
        onChange={(e) => setState({ ...state, state: e.target.value })}
      />

      <label htmlFor="pin">Customer's pin</label>
      <input
        id="pin"
        type="number"
        value={state.pin}
        onChange={(e) => setState({ ...state, pin: e.target.value })}
      />
      
      <button onClick={saveOrUpdate} className={style.btn}>{selectedId?"Update":"Save"}</button>
    </form>
  );
}

export default AddUpdateForm;
