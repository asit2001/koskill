import { useState } from "react";
import style from "./style/card.module.css";
import { useAppDispatch } from "../../redux/store";
import { deleteCrmThunks } from "../../redux/thunks";
import { setSelectedId } from "../../redux/reducer";

function Card({ data }: { data: CRMScType }) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <div className={style.card}>
      <p className={style.item}>name : {data.name}</p>
      <p className={style.item}>email : {data.email}</p>
      <p className={style.item}>address : {data.address}</p>
      {showMore && (
          <>
          <p className={style.item}>city : {data.city}</p>
          <p className={style.item}>country : {data.country}</p>
          <p className={style.item}>phone : {data.phone}</p>
          <p className={style.item}>state : {data.state}</p>
          <p className={style.item}>pin : {data.pin}</p>
          <p className={style.item}>created at : {data.created_at.toString()}</p>
        </>
      )}
      {showMore ? (
        <p
          className={style.linkBtn}
          onClick={() => {
            setShowMore(false);
          }}
        >
          hide more
        </p>
      ) : (
        <p
          className={style.linkBtn}
          onClick={() => {
            setShowMore(true);
          }}
        >
          show more
        </p>
      )}
      <div className={style.btnGroup}>
        <button onClick={()=>dispatch(setSelectedId(data._id))} className={style.btn}>update</button>
        <button onClick={()=>{dispatch(deleteCrmThunks(data._id))}} className={style.btn}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
