import React from "react";
import MainHeader from "./Components/MainHeader/MainHeader";
import RecentSearch from "./Components/RecentSearch/RecentSearch";
import EventBanner from "./Components/EventBanner/EventBanner";
import SpecialPrice from "./Components/SpecialPrice/SpecialPrice";
import { useAxios } from "../../Components/Hooks/useAxios";

const Main = (props) => {
  const { response } = useAxios({
    method: "get",
    url: "/data/specialPriceData.json",
  });

  return (
    <>
      <MainHeader />
      <RecentSearch />
      <EventBanner />
      {response && <SpecialPrice title="국내 특가 항공권" cardData={response.domestic.slice(0, 8)} />}
      {response && <SpecialPrice title="해외 특가 항공권" cardData={response.foreign.slice(0, 8)} />}
      {/* <Footer /> footer가 들어올 자리 */}
    </>
  );
};

export default Main;
