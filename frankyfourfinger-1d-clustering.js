/**
 * Easy 1D-clustering, the dataset has to be sorted.
 * @param dataset
 * @param epsilon: Minimum distance to connect to points into one cluster
 * @param min_cluster_size: Minimum amount of accepted cluster size. All
 * clusters that are smaller then min_cluster_size will be ignored.
 * @param distanceFunction: Distance function to calculate the distance between two points.
 * @constructor
 */
function FrankyFourFinger(dataset, epsilon, min_cluster_size, distanceFunction) {
    this.dataset = dataset;
    this.epsilon = epsilon;
    this.min_cluster_size = min_cluster_size;
    this.distanceFunction = distanceFunction;
};

/**
 * Calculate clusters
 * @returns {Array}
 */
FrankyFourFinger.prototype.getClusters = function () {

    var clusters = [];
    var current_cluster = [];

    if (this.dataset.length == 0) {
        return [];
    }

    current_cluster.push(this.dataset[0]);
    for (var i = 0; i < this.dataset.length; i++) {
        var current = this.dataset[i];
        var next = this.dataset[i + 1];

        if (!next) {
            break;
        }

        if (this.distanceFunction(current, next) <= this.epsilon) {
            current_cluster.push(next);
        } else {
            if (current_cluster.length < this.min_cluster_size) {
                // Ignore cluster
            } else {
                clusters.push(current_cluster);
            }
            current_cluster = [];
            current_cluster.push(next);
        }
    }

    // Push last cluster
    if (current_cluster.length < this.min_cluster_size) {
        // Ignore cluster
    } else {
        clusters.push(current_cluster);
    }

    return clusters;
};
