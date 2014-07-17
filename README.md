frankyfourfinger-1d-n-sorted-classification
===========================================

FrankyFourFinger is a fast and simple 1D-classifier that creates a clustered result.

Easy to use: 


```javascript

// Minimum distance to connect to points into one cluster
var distance = 8;

// Minimum cluster size
var min_cluster_size = 0;

// Distance function to calculate distance
var distance_function = function (x1, x2) {
    return Math.abs(x1 - x2);
};

var franky = new FrankyFourFinger(dataset, distance, min_cluster_size, distance_function);
```

```javascript
// Dataset
var data = [0, 1, 2, 3, 4, 5, 6, 390, 393, 396, 399, 402, 405, 414, 422, 999];
```

```javascript
// Keep all clusters
var franky = new FrankyFourFinger(data, 8, 0, function (x1, x2) {
    return Math.abs(x1 - x2);
});
var clusters = franky.getClusters();
// [[0,1,2,3,4,5,6],[390,393,396,399,402,405],[414,422],[999]]
```


```javascript
// Only keep clusters that has minimum 2 elements
var franky = new FrankyFourFinger(data, 8, 2, function (x1, x2) {
    return Math.abs(x1 - x2);
});
var clusters = franky.getClusters();
// [[0,1,2,3,4,5,6],[390,393,396,399,402,405],[414,422]]
```
