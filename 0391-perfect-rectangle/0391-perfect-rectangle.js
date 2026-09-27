/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {

    let area = 0;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    let corners = new Set();

    for (let [x1, y1, x2, y2] of rectangles) {

        // Calculate area
        area += (x2 - x1) * (y2 - y1);

        // Find overall boundaries
        minX = Math.min(minX, x1);
        minY = Math.min(minY, y1);
        maxX = Math.max(maxX, x2);
        maxY = Math.max(maxY, y2);

        // Four corners
        let points = [
            `${x1},${y1}`,
            `${x1},${y2}`,
            `${x2},${y1}`,
            `${x2},${y2}`
        ];

        // Toggle each corner
        for (let point of points) {

            if (corners.has(point)) {
                corners.delete(point);
            } else {
                corners.add(point);
            }
        }
    }

    // Area must match
    let expectedArea = (maxX - minX) * (maxY - minY);

    if (area !== expectedArea) {
        return false;
    }

    // Exactly 4 corners should remain
    if (corners.size !== 4) {
        return false;
    }

    // Check that remaining corners are exactly
    // the four corners of the big rectangle
    let expectedCorners = new Set([
        `${minX},${minY}`,
        `${minX},${maxY}`,
        `${maxX},${minY}`,
        `${maxX},${maxY}`
    ]);

    for (let point of expectedCorners) {
        if (!corners.has(point)) {
            return false;
        }
    }

    return true;
};