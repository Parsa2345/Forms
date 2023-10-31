<template>
    <div class="card text-center m-3">
        <h5 class="card-header">Simple POST Request</h5>
        <div class="card-body">New product id: {{products?.id}}</div>
    </div> 
</template>

<script setup >


import { ref } from 'vue';

const products = ref(null); 
const errorMessage = ref(null);
 
const requestOptions = {
    method: 'POST',
    // method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName:'admin'})

  };
    fetch("https://testapi.jasonwatmore.com/products",requestOptions)
          .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            console.log(isJson);
            console.log(data);
            console.log(response);
            console.log(response.value);
            // console.log(data);


            // check for error response
            if ( response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }

            products.value = data;
          })
          .catch(error => {
            errorMessage.value = error;
            console.error("There was an error!", error);
          })

// fetch('https://testapi.jasonwatmore.com/products', requestOptions)
//     .then(response =>response.json())
//     .then(data =>{products.value = data;console.log(products);} );
    


  
</script>
<script >


// import { ref } from 'vue';

const product = ref(null);
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  method:{
 
    postData(){

      
// Simple POST request with a JSON body using fetch
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Vue 3 POST Request Example' })
};
fetch('https://testapi.jasonwatmore.com/products', requestOptions)
    .then(response => response.json())
    .then(data => product.value = data);
    console.log(product).value;


    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
