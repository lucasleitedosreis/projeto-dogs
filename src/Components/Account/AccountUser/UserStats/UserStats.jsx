import React, { lazy, Suspense, useEffect } from "react";
import { STATS_GET } from "../../../../api";
import Head from "../../../Helper/Head/Head";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../../Helper/Error/Error";
import Loading from "../../../Helper/Loading/Loading";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs/UserStatsGraphs"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
