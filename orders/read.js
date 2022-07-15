name = document.getElementById('name');
id = document.getElementById('ordid');
date = document.getElementById('orddate');
price = document.getElementById('price');

let params = new URLSearchParams(location.search);
orderid = params.get('i');


document.getElementById('name').innerHTML = params.get('n');
id.innerHTML = orderid;
//price.innerHTML = parseFloat(params.get('p')).toFixed(2);

ordday = orderid.slice(2,4) + "." + orderid.slice(6,8) + ".20" + orderid.slice(4,6) + " " + orderid.slice(0, 2) + ":" + orderid.slice(8,10) + ":" + orderid.slice(10,12)

date.innerHTML = ordday;
