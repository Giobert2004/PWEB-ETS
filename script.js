<html>
<body>
   <h2>Using the <i> fetch() browser method </i> to fetch data from API</h2>
   <div id = "output"> </div> 
   <button onclick = "fetchData()"> Fetch API to get data </button>
   <script>
      let output = document.getElementById('output');
      function fetchData() {
         fetch('http://apilayer.net/api/live?access_key=bacaddf902c174341b62ea56cce18c6c&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR')
         .then(response => response.json())
         .then(data => {
            output.innerHTML += "id = " + data.id + "<br/>";
            output.innerHTML += "brand = " + data.brand + "<br/>";
            output.innerHTML += "category = " + data.category + "<br/>";
            output.innerHTML += "price = " + data.price + "<br/>";
            output.innerHTML += "rating = " + data.rating + "<br/>";
            output.innerHTML += "stock = " + data.stock + "<br/>";
         })
      }
   </script>
</body>
</html>
