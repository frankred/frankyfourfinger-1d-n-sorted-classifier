FrankyFourFinger a 1d-classification for sorted arrays
===========================================

FrankyFourFinger(complexity: n) is a fast and simple 1D-classifier that creates a clustered result.
You can define the minimum distance of two points where a new cluster is created, and the minimum cluster size. If a cluster has less then ```min_distance``` elements, the cluster will not occur on the result set.


```javascript
// Dataset
var data = [0, 1, 2, 3, 4, 5, 6, 390, 393, 396, 399, 402, 405, 414, 422, 999];

// Minimum distance to connect to points into one cluster
var min_distance = 8;

// Minimum cluster size: 0 = Keep all clusters
var min_cluster_size = 0;

// Distance function to calculate distance
var distance_function = function (x1, x2) {
    return Math.abs(x1 - x2);
};

var franky = new FrankyFourFinger(data, min_distance, min_cluster_size, distance_function);
var clusters = franky.getClusters();
/* [
     [0,1,2,3,4,5,6],
     [390,393,396,399,402,405],
     [414,422],
     [999]
] */

/* With min_cluster_size of '3'
  [
     [0,1,2,3,4,5,6],
     [390,393,396,399,402,405]
] */

```
