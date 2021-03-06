import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./containers/AppContainer";

// when we were on github pages, we used a hack to support proper urls which abused
// the 404 mechanism to do a redirect. It looks like some people saved those redirect
// urls (how?) and I should probably still support them. Which is what this function is:
if(window.location.search && (window.location.search.indexOf("?p=/b/") > -1)) {
    const index = window.location.search.indexOf("/b/");
    const path = window.location.search.substring(index, window.location.search.length);
    window.location.href = path;
}

ReactDOM.render(<AppContainer />, document.querySelector("#app"));
