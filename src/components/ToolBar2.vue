<template>
<div>
<!-- <div class="all">
<span class="material-icons item">
shopping_cart
</span>
<span class="material-icons item">
live_help
</span></div> -->
<div class="popup all">
  <span class="material-icons item">
shopping_cart
</span>
<input type="checkbox" id="toggle">
<label class="material-icons item" for="toggle">live_help</label>

<dialog >
<header>
  FAQ
</header>
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
  </p>
    
  
  <label class="label2" for="toggle">close overlay</label>
</dialog>
</div>
</div>
</template>

<script>
export default {
    props: {
        FAQ: {
      type: String,
      default: "Invert Colors"
    },
    Buy: {
      type: String,
      default: "Highlight Links"
    }}
}
</script>

<style scoped>
  /* fallback */
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: local("Material Icons"), local("MaterialIcons-Regular"),
      url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
        format("woff2");
  }
  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
.item {
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 35px;
    cursor: pointer;
    width: 56px;
    height: 56px;
    background-color: #2196F3;
    border-radius: 50%;
    color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.all {
    width: 125px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 4vh;;
    right: 3vw;
    z-index: 3000;
}


.popup{
  z-index: 2999;
  font-family: monospace;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
}
#toggle{
  visibility: hidden;
  opacity: 0;
  z-index: -1;
}

#toggle:checked ~ dialog {
  display: block;
}

.label2{
  background: #2196F3;
  color: white;
  padding: .5em 1em;
  border-radius: 6px;
}



@keyframes appear {
  0%{
    opacity: 0;
    transform: translateY(-10px);
  }
}

dialog{
  color: white;
  background-color: black;
  position: fixed;
  top: 5%;
  animation: appear 350ms ease-in 1;
  max-width: 90%;
  overflow: auto;
  max-height: 90%;
}

p {
  padding: 2%;
}
header {
  font-size: 50px;
  font-style: bold;
}
</style>