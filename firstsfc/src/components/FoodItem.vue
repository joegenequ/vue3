<template>
    <div class="mystyle">
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples',
        message: 'I like apples'
      }
    }
  };
  </script>
  
  <style>
    #app >mystyle {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>