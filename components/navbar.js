// function navbar(){

//     return `<img id="nav_img" src="./images/logo.png">
//     <img id="nav_location" src="./images/location.png">
//     <h4 id="location_place"></h4>
//     <h4 id="title1">Dunzo for Partners</h4>
//     <h4 id="title2">Business with Dunzo </h4>
//     <div id="nav_search">
//         <img id="icon_search" src="./images/search.png">
//         <p id="icon1">Search</p>
//     </div>
//     <div id="nav_cart">
//      <img id="icon_cart" src="./images/cart.png">
//      <p id="icon2">Cart</p>
//     </div>
//     <button id="nav_signin">Sign in</button>`
// }

// export default navbar


function navbar() {
  return `
  <div id="navb">
  <a href="index.html"><img id="nav_img" src="./images/logo.png"></a>
    <img id="nav_location" src="./images/location.png">
    <p id="loc"></p>
    <h4 id="title1"><a id= "navaa" href="../others/patener.html">Dunzo for Partners</a></h4>
    <h4 id="title2">Business with Dunzo </h4>
    <div id="nav_search">
        <img id="icon_search" src="./images/search.png">
        <p id="icon1">Search</p>
    </div>
    <div id="nav_cart">
     <img id="icon_cart" src="./images/cart.png">
     <p id="icon2">Cart</p>
    </div>
    
    <div><button id="nav_signin">Sign in</button></div>
    </div>
       </div>
       </div>
       `;
}

export default navbar;