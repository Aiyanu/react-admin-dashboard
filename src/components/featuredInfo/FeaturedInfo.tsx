import "./featuredInfo.css"
import {ArrowDownward,ArrowUpward } from "@mui/icons-material/";
//use a box shadow generator
export default function FeaturedInfo() {
  return <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">revenue</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
      </div>
      <span className="featuredSub">compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,015</span>
        <span className="featuredMoneyRate">+6.4 <ArrowUpward className="featuredIcon positive"/></span>
      </div>
      <span className="featuredSub">compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$5,015</span>
        <span className="featuredMoneyRate">+21.4 <ArrowUpward className="featuredIcon positive"/></span>
      </div>
      <span className="featuredSub">compared to last month</span>
    </div>
  </div>;
}
