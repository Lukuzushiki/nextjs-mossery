import { BrowseRoom, Footer, Header, Hero, Video } from "../parts";
import axios from "../configs/axios";
import { createRef, useEffect, useState } from "react";

export default function Home() {
  const refBrowse = createRef();
  const [toogleModal, setToogleModal] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    document.title = "LuxSpace - Home Page";
    window.scrollTo(0, 0);

    getData();
  }, []);

  const getData = () => {
    axios
      .get("/landing-page")
      .then((response) => {
        setCollections(response.data.collection);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setToogleModal(e);
  };
  return (
    <>
      <Header isLanding />
      <Hero
        refBrowse={refBrowse}
        toogleModal={(e) => onChange(e)}
        toogleStatus={toogleModal}
      />
      <BrowseRoom refBrowse={refBrowse} collection={collections} />
      <Footer />
      {/* Show Video Modal */}
      {toogleModal && (
        <Video toogleModal={(e) => onChange(e)} toogleStatus={toogleModal} />
      )}
    </>
  );
}
