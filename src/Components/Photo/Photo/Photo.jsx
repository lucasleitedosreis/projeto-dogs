import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET_ID } from "../../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";
import PhotoContent from "../PhotoContent/PhotoContent";
import Head from "../../Helper/Head/Head";

function Photo() {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET_ID(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
}

export default Photo;
