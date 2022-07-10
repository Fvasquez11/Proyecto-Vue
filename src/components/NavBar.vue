<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="navContainer">
       <div class="title">
        <div id="avatar">
          <b-avatar src="https://document-export.canva.com/IKTCI/DAFF_WIKTCI/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220709T114902Z&X-Amz-Expires=72359&X-Amz-Signature=4eed24023c6a652cc2fb1d4ee50751ac8878e437ca0de889f6d07041471dbcd8&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2010%20Jul%202022%2007%3A55%3A01%20GMT" size= "5rem"></b-avatar>
        </div>
        <h1>ProGraph</h1>
        </div>
      <nav>
        <div id="buttons">
          <b-button variant="warning"><RouterLink to="/">Home</RouterLink></b-button>
          <b-button variant="danger"><RouterLink to="/about">About</RouterLink></b-button>
          </div>
      </nav>
    </div>
    <div><RouterView /></div>
  </main>
</template>

<style>
.navContainer {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background-image: url(https://image.shutterstock.com/image-vector/blue-polygonal-banner-background-dashed-260nw-1654085914.jpg);
}
h1{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:rgb(24, 62, 63)
}
#buttons{
  display: flex;
  gap:30px;
}
.title{
  display: flex;
  justify-content:center;
  gap:10px;
}
.routerlink {
  color: white;
}
.routerlink:hover {
  color: black;
}

</style>
