frankyfourfinger-1d-n-sorted-classification
===========================================

FrankyFourFinger is a fast and simple 1D-classifier that creates a clustered result.

```javascript
// Dataset
var data = [0, 1, 2, 3, 4, 5, 6, 390, 393, 396, 399, 402, 405, 414, 422, 999];
```

```javascript
// Create classifier: Keep all clusters
var franky = new FrankyFourFinger(data, 8, 0, function (x1, x2) {
    return Math.abs(x1 - x2);
});
var clusters = franky.getClusters();
// Clusters: [[0,1,2,3,4,5,6],[390,393,396,399,402,405],[414,422],[999]]
```



```javascript
// Create classifier: Only keep clusters that has minimum 2 elements
var franky = new FrankyFourFinger(data, 8, 2, function (x1, x2) {
    return Math.abs(x1 - x2);
});
var clusters = franky.getClusters();
// Clusters: [[0,1,2,3,4,5,6],[390,393,396,399,402,405],[414,422]]
```
