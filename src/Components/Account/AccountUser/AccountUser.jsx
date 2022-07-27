import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader/UserHeader";
import Feed from "../../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserStats from "./UserStats/UserStats";
import { UserContext } from "../../../userContext";
import NotFound from "../../NotFound/NotFound";
import Head from "../../Helper/Head/Head";

const AccountUser = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default AccountUser;
