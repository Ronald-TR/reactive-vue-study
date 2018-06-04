var app = new Vue({
    el: '#app_table',
    data: {
      services: [
          {name: "CODE integra AGIL", ref: "/rota/padrao"},
          {name: "CODE Tools", ref: "/rota/padrao"},
      ], 
    },
    methods: {
        insertService : function(){
            console.log(this.name.value);
        }
    }
  });