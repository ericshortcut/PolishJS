PolishJS
========

Expression analyser that takes a infix notation and process to polish notation. 

How to use?
==
---
1)Download [PolishJS](https://raw.githubusercontent.com/ericAndrade/PolishJS/master/Polish.js)

---
2)Add  a tag 

```<script type="text/javascript" src="Polish.js"></script>``` 

---

3)Use the methods

```
    var polishArray = inFixToPolishReverse( "(2+19)/7" );
    console.log( polishArray ); 
    >> ["2", "19", "+", "7", "/"]
```


```
    var result = inFixToPolishReverse( polishArray );
    console.log( result ); 
    >> 3
```

Edited on [Dillinger](http://dillinger.io/)