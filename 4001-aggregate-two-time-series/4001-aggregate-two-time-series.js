/**
 * @param {number[][]} series1
 * @param {number[][]} series2
 * @return {number[][]}
 */
var aggregateTimeSeries = function(series1, series2) {

    let i = 0;
    let j = 0;

    const ans = [];

    while(i < series1.length || j < series2.length){

        let t;

        if(j === series2.length || (i < series1.length && series1[i][0] < series2[j][0])){
            t = series1[i][0];
        }
        else if(i === series1.length || series2[j][0] < series1[i][0]){
            t = series2[j][0];
        }
        else{
            t = series1[i][0];
        }

        while(i + 1 < series1.length && series1[i + 1][0] <= t){
            i++;
        }

        while(j + 1 < series2.length && series2[j + 1][0] <= t){
            j++;
        }

        let v1 = 0;
        let v2 = 0;

        if(i < series1.length) v1 = series1[i][1];
        if(j < series2.length) v2 = series2[j][1];

        ans.push([t, v1 + v2]);

        if(i < series1.length && series1[i][0] === t) i++;
        if(j < series2.length && series2[j][0] === t) j++;
    }

    return ans;
};