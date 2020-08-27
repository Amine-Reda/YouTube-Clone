import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s100-c-k-c0xffffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
      <hr />
      <VideoRow
        image="https://i.ytimg.com/vi/U_azgdEbNAw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCOP1ORnpDVT3MbmpHYFPF5Ew4V1w"
        channel="Clever Programmer"
        verified
        title="🔴 Become a Web Developer in 10minutes | 2019/2020"
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/gzdQDxzW2Tw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAu_J66n0_P1jy1eQlsgocO_zz9pQ"
        channel="Clever Programmer"
        verified
        title="Build a Whatsapp Clone with MERN Stack (MongoDB, Express, React, Node JS)"
        subs="58K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
      <VideoRow
        image="https://i.ytimg.com/an_webp/a_y2YUs_R3U/mqdefault_6s.webp?du=3000&sqp=CNb1nfoF&rs=AOn4CLBe_DSVz2pcptLMra0GbKyr24iJSA"
        channel="Nick White"
        verified
        title="The Sketchiest Programming Course Ever"
        subs="1.8M"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/U_azgdEbNAw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCOP1ORnpDVT3MbmpHYFPF5Ew4V1w"
        channel="Clever Programmer"
        verified
        title="🔴 Become a Web Developer in 10minutes | 2019/2020"
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/gzdQDxzW2Tw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAu_J66n0_P1jy1eQlsgocO_zz9pQ"
        channel="Clever Programmer"
        verified
        title="Build a Whatsapp Clone with MERN Stack (MongoDB, Express, React, Node JS)"
        subs="58K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
      <VideoRow
        image="https://i.ytimg.com/an_webp/a_y2YUs_R3U/mqdefault_6s.webp?du=3000&sqp=CNb1nfoF&rs=AOn4CLBe_DSVz2pcptLMra0GbKyr24iJSA"
        channel="Nick White"
        verified
        title="The Sketchiest Programming Course Ever"
        subs="1.8M"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also,exepct programming tips and tricks that will take your coding skills to the..."
      />
    </div>
  );
}

export default SearchPage;
