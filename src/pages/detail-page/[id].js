import { Breadcrumb, Details, Footer, Header, Recomended } from "../../parts";
import { useEffect, useState } from "react";
import axios from "../../configs/axios";
import { useRouter } from "next/router";

function DetailPage(props) {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getData();
    getCollection();
  });

  const getData = () => {
    axios
      .get(`/detail-page/${id}`)
      .then((response) => {
        setItem(response.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCollection = () => {
    axios
      .get("/landing-page")
      .then((response) => {
        setCollections(response.data.collection[0].itemId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <Breadcrumb />
      <Details data={item} />
      <Recomended data={collections} />
      <Footer />
    </>
  );
}

export default DetailPage;
