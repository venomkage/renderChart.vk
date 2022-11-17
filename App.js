import React, {useState, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  const newLocal = `
<!DOCTYPE HTML>
<html>
<head>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script type="text/javascript">
window.onload = function () {

  
  var options = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,30]
  }],
  xaxis: {
    categories: [1991,2001,1993,1994,1995,1996,1997, 1998,2004]
  }
}

var chart = new ApexCharts(document.querySelector("#newChart"), options);

chart.render();
}

</script>
</head>
<body>
<div id="newChart"></div>
</body>
</html>
      `;

  return (
    <WebView source={{html: newLocal}} style={{backgroundColor: 'black'}} />
    // trying to render charts
  );
}
