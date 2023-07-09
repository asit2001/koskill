
import { useEffect } from "react";
import { setSort } from "../../redux/reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./Styles/Filters.module.css";
import { getCrmThunks } from "../../redux/thunks";

function Filters() {
    const dispatch = useAppDispatch();
    const {sort,fetchData} = useAppSelector(state=>state.crm)
    useEffect(()=>{
      if (fetchData.length===0) {
        dispatch(getCrmThunks())
      }
    },[dispatch, fetchData]);
  return (
    <div className={styles.filters}>
      <h4 className={styles.result}>{fetchData.length} customer</h4>
      <div className={styles.right__filter}>
        <p
          onClick={() => dispatch(setSort("rel"))}
          className={
            sort === "rel" ? styles.filter__text__active : styles.filter__text
          }
        >
          Relevance
        </p>
        <p
          onClick={() => dispatch(setSort("name"))}
          className={
            sort === "name" ? styles.filter__text__active : styles.filter__text
          }
        >
          Name
        </p>
        <p
          onClick={() => dispatch(setSort("last_create"))}
          className={
            sort === "last_create" ? styles.filter__text__active : styles.filter__text
          }
        >
          Last Created
        </p>
      </div>
    </div>
  );
}

export default Filters;
