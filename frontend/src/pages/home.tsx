import { useState } from "react";
import AddUpdateForm from "../components/addUpdateForm";
import Card from "../components/card";
import Filters from "../components/filter";
import Navbar from "../components/navbar";
import { setShowForm } from "../redux/reducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

function Home() {
  const { value, showForm } = useAppSelector((state) => state.crm);
  const [pageId, setPageId] = useState(1);
  const dispatch = useAppDispatch();
  const maxItemInPage = 10;
  const pagedValue = value.slice((pageId - 1) * maxItemInPage, pageId * maxItemInPage);
  return (
    <>
      <Navbar />
      <main className="body">
        <Filters />
        <button className="btn" onClick={() => dispatch(setShowForm(true))}>
          Add new
        </button>
        {showForm && <AddUpdateForm />}
        {pagedValue.map((data) => (
          <Card key={data._id} data={data} />
        ))}
        <div className="pagination">
          {Array.from({
            length: Math.ceil(value.length / maxItemInPage),
          }).map((_, i) => (
            <p
              onClick={() => {
                setPageId(i + 1);
              }}
              key={i}
              className="pageIdx"
            >
              {i + 1}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
