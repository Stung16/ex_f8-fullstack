F8.component("header-component", {
    template: `<h1>Home Work DAY32</h1>`,
  });
  
  F8.component("counter-app", {
    data: function () {
      return {
        title: "Counter App",
        counter: 0,
      };
    },
    template: `
               <h2>{{title}}</h2>
               <h2>You count<span class ="valueCount"> {{counter}} </span>times</h2>
               <button v-on:click="count--">-</button>
               <button v-on:click="count++">+</button>
       `,
  });