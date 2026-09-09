/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 2111.0, "series": [{"data": [[0.0, 11.0], [0.1, 15.0], [0.2, 16.0], [0.3, 17.0], [0.4, 18.0], [0.5, 18.0], [0.6, 19.0], [0.7, 19.0], [0.8, 19.0], [0.9, 20.0], [1.0, 20.0], [1.1, 20.0], [1.2, 21.0], [1.3, 21.0], [1.4, 21.0], [1.5, 21.0], [1.6, 22.0], [1.7, 22.0], [1.8, 22.0], [1.9, 22.0], [2.0, 22.0], [2.1, 23.0], [2.2, 23.0], [2.3, 23.0], [2.4, 23.0], [2.5, 23.0], [2.6, 23.0], [2.7, 24.0], [2.8, 24.0], [2.9, 24.0], [3.0, 24.0], [3.1, 24.0], [3.2, 24.0], [3.3, 25.0], [3.4, 25.0], [3.5, 25.0], [3.6, 25.0], [3.7, 25.0], [3.8, 25.0], [3.9, 25.0], [4.0, 26.0], [4.1, 26.0], [4.2, 26.0], [4.3, 26.0], [4.4, 26.0], [4.5, 26.0], [4.6, 26.0], [4.7, 26.0], [4.8, 26.0], [4.9, 27.0], [5.0, 27.0], [5.1, 27.0], [5.2, 27.0], [5.3, 27.0], [5.4, 27.0], [5.5, 27.0], [5.6, 27.0], [5.7, 27.0], [5.8, 27.0], [5.9, 28.0], [6.0, 28.0], [6.1, 28.0], [6.2, 28.0], [6.3, 28.0], [6.4, 28.0], [6.5, 28.0], [6.6, 28.0], [6.7, 28.0], [6.8, 28.0], [6.9, 28.0], [7.0, 29.0], [7.1, 29.0], [7.2, 29.0], [7.3, 29.0], [7.4, 29.0], [7.5, 29.0], [7.6, 29.0], [7.7, 29.0], [7.8, 29.0], [7.9, 29.0], [8.0, 29.0], [8.1, 29.0], [8.2, 30.0], [8.3, 30.0], [8.4, 30.0], [8.5, 30.0], [8.6, 30.0], [8.7, 30.0], [8.8, 30.0], [8.9, 30.0], [9.0, 30.0], [9.1, 30.0], [9.2, 30.0], [9.3, 30.0], [9.4, 30.0], [9.5, 31.0], [9.6, 31.0], [9.7, 31.0], [9.8, 31.0], [9.9, 31.0], [10.0, 31.0], [10.1, 31.0], [10.2, 31.0], [10.3, 31.0], [10.4, 31.0], [10.5, 31.0], [10.6, 31.0], [10.7, 31.0], [10.8, 31.0], [10.9, 32.0], [11.0, 32.0], [11.1, 32.0], [11.2, 32.0], [11.3, 32.0], [11.4, 32.0], [11.5, 32.0], [11.6, 32.0], [11.7, 32.0], [11.8, 32.0], [11.9, 32.0], [12.0, 32.0], [12.1, 32.0], [12.2, 33.0], [12.3, 33.0], [12.4, 33.0], [12.5, 33.0], [12.6, 33.0], [12.7, 33.0], [12.8, 33.0], [12.9, 33.0], [13.0, 33.0], [13.1, 33.0], [13.2, 33.0], [13.3, 33.0], [13.4, 33.0], [13.5, 33.0], [13.6, 34.0], [13.7, 34.0], [13.8, 34.0], [13.9, 34.0], [14.0, 34.0], [14.1, 34.0], [14.2, 34.0], [14.3, 34.0], [14.4, 34.0], [14.5, 34.0], [14.6, 34.0], [14.7, 34.0], [14.8, 34.0], [14.9, 34.0], [15.0, 34.0], [15.1, 34.0], [15.2, 34.0], [15.3, 34.0], [15.4, 35.0], [15.5, 35.0], [15.6, 35.0], [15.7, 35.0], [15.8, 35.0], [15.9, 35.0], [16.0, 35.0], [16.1, 35.0], [16.2, 35.0], [16.3, 35.0], [16.4, 35.0], [16.5, 35.0], [16.6, 35.0], [16.7, 35.0], [16.8, 35.0], [16.9, 35.0], [17.0, 35.0], [17.1, 36.0], [17.2, 36.0], [17.3, 36.0], [17.4, 36.0], [17.5, 36.0], [17.6, 36.0], [17.7, 36.0], [17.8, 36.0], [17.9, 36.0], [18.0, 36.0], [18.1, 36.0], [18.2, 36.0], [18.3, 36.0], [18.4, 36.0], [18.5, 36.0], [18.6, 36.0], [18.7, 36.0], [18.8, 36.0], [18.9, 37.0], [19.0, 37.0], [19.1, 37.0], [19.2, 37.0], [19.3, 37.0], [19.4, 37.0], [19.5, 37.0], [19.6, 37.0], [19.7, 37.0], [19.8, 37.0], [19.9, 37.0], [20.0, 37.0], [20.1, 37.0], [20.2, 37.0], [20.3, 37.0], [20.4, 37.0], [20.5, 37.0], [20.6, 37.0], [20.7, 38.0], [20.8, 38.0], [20.9, 38.0], [21.0, 38.0], [21.1, 38.0], [21.2, 38.0], [21.3, 38.0], [21.4, 38.0], [21.5, 38.0], [21.6, 38.0], [21.7, 38.0], [21.8, 38.0], [21.9, 38.0], [22.0, 38.0], [22.1, 38.0], [22.2, 38.0], [22.3, 38.0], [22.4, 38.0], [22.5, 39.0], [22.6, 39.0], [22.7, 39.0], [22.8, 39.0], [22.9, 39.0], [23.0, 39.0], [23.1, 39.0], [23.2, 39.0], [23.3, 39.0], [23.4, 39.0], [23.5, 39.0], [23.6, 39.0], [23.7, 39.0], [23.8, 39.0], [23.9, 39.0], [24.0, 39.0], [24.1, 39.0], [24.2, 39.0], [24.3, 40.0], [24.4, 40.0], [24.5, 40.0], [24.6, 40.0], [24.7, 40.0], [24.8, 40.0], [24.9, 40.0], [25.0, 40.0], [25.1, 40.0], [25.2, 40.0], [25.3, 40.0], [25.4, 40.0], [25.5, 40.0], [25.6, 40.0], [25.7, 40.0], [25.8, 40.0], [25.9, 40.0], [26.0, 40.0], [26.1, 41.0], [26.2, 41.0], [26.3, 41.0], [26.4, 41.0], [26.5, 41.0], [26.6, 41.0], [26.7, 41.0], [26.8, 41.0], [26.9, 41.0], [27.0, 41.0], [27.1, 41.0], [27.2, 41.0], [27.3, 41.0], [27.4, 41.0], [27.5, 41.0], [27.6, 41.0], [27.7, 41.0], [27.8, 41.0], [27.9, 41.0], [28.0, 41.0], [28.1, 42.0], [28.2, 42.0], [28.3, 42.0], [28.4, 42.0], [28.5, 42.0], [28.6, 42.0], [28.7, 42.0], [28.8, 42.0], [28.9, 42.0], [29.0, 42.0], [29.1, 42.0], [29.2, 42.0], [29.3, 42.0], [29.4, 42.0], [29.5, 42.0], [29.6, 42.0], [29.7, 43.0], [29.8, 43.0], [29.9, 43.0], [30.0, 43.0], [30.1, 43.0], [30.2, 43.0], [30.3, 43.0], [30.4, 43.0], [30.5, 43.0], [30.6, 43.0], [30.7, 43.0], [30.8, 43.0], [30.9, 43.0], [31.0, 43.0], [31.1, 43.0], [31.2, 43.0], [31.3, 43.0], [31.4, 43.0], [31.5, 44.0], [31.6, 44.0], [31.7, 44.0], [31.8, 44.0], [31.9, 44.0], [32.0, 44.0], [32.1, 44.0], [32.2, 44.0], [32.3, 44.0], [32.4, 44.0], [32.5, 44.0], [32.6, 44.0], [32.7, 44.0], [32.8, 44.0], [32.9, 44.0], [33.0, 44.0], [33.1, 44.0], [33.2, 44.0], [33.3, 44.0], [33.4, 44.0], [33.5, 45.0], [33.6, 45.0], [33.7, 45.0], [33.8, 45.0], [33.9, 45.0], [34.0, 45.0], [34.1, 45.0], [34.2, 45.0], [34.3, 45.0], [34.4, 45.0], [34.5, 45.0], [34.6, 45.0], [34.7, 45.0], [34.8, 45.0], [34.9, 45.0], [35.0, 45.0], [35.1, 46.0], [35.2, 46.0], [35.3, 46.0], [35.4, 46.0], [35.5, 46.0], [35.6, 46.0], [35.7, 46.0], [35.8, 46.0], [35.9, 46.0], [36.0, 46.0], [36.1, 46.0], [36.2, 46.0], [36.3, 46.0], [36.4, 46.0], [36.5, 46.0], [36.6, 46.0], [36.7, 47.0], [36.8, 47.0], [36.9, 47.0], [37.0, 47.0], [37.1, 47.0], [37.2, 47.0], [37.3, 47.0], [37.4, 47.0], [37.5, 47.0], [37.6, 47.0], [37.7, 47.0], [37.8, 47.0], [37.9, 47.0], [38.0, 47.0], [38.1, 47.0], [38.2, 47.0], [38.3, 48.0], [38.4, 48.0], [38.5, 48.0], [38.6, 48.0], [38.7, 48.0], [38.8, 48.0], [38.9, 48.0], [39.0, 48.0], [39.1, 48.0], [39.2, 48.0], [39.3, 48.0], [39.4, 48.0], [39.5, 48.0], [39.6, 48.0], [39.7, 48.0], [39.8, 49.0], [39.9, 49.0], [40.0, 49.0], [40.1, 49.0], [40.2, 49.0], [40.3, 49.0], [40.4, 49.0], [40.5, 49.0], [40.6, 49.0], [40.7, 49.0], [40.8, 49.0], [40.9, 49.0], [41.0, 49.0], [41.1, 49.0], [41.2, 49.0], [41.3, 50.0], [41.4, 50.0], [41.5, 50.0], [41.6, 50.0], [41.7, 50.0], [41.8, 50.0], [41.9, 50.0], [42.0, 50.0], [42.1, 50.0], [42.2, 50.0], [42.3, 50.0], [42.4, 50.0], [42.5, 50.0], [42.6, 50.0], [42.7, 50.0], [42.8, 51.0], [42.9, 51.0], [43.0, 51.0], [43.1, 51.0], [43.2, 51.0], [43.3, 51.0], [43.4, 51.0], [43.5, 51.0], [43.6, 51.0], [43.7, 51.0], [43.8, 51.0], [43.9, 51.0], [44.0, 51.0], [44.1, 51.0], [44.2, 52.0], [44.3, 52.0], [44.4, 52.0], [44.5, 52.0], [44.6, 52.0], [44.7, 52.0], [44.8, 52.0], [44.9, 52.0], [45.0, 52.0], [45.1, 52.0], [45.2, 52.0], [45.3, 53.0], [45.4, 53.0], [45.5, 53.0], [45.6, 53.0], [45.7, 53.0], [45.8, 53.0], [45.9, 53.0], [46.0, 53.0], [46.1, 53.0], [46.2, 53.0], [46.3, 53.0], [46.4, 53.0], [46.5, 54.0], [46.6, 54.0], [46.7, 54.0], [46.8, 54.0], [46.9, 54.0], [47.0, 54.0], [47.1, 54.0], [47.2, 54.0], [47.3, 54.0], [47.4, 54.0], [47.5, 54.0], [47.6, 54.0], [47.7, 55.0], [47.8, 55.0], [47.9, 55.0], [48.0, 55.0], [48.1, 55.0], [48.2, 55.0], [48.3, 55.0], [48.4, 55.0], [48.5, 55.0], [48.6, 55.0], [48.7, 55.0], [48.8, 56.0], [48.9, 56.0], [49.0, 56.0], [49.1, 56.0], [49.2, 56.0], [49.3, 56.0], [49.4, 56.0], [49.5, 56.0], [49.6, 56.0], [49.7, 56.0], [49.8, 56.0], [49.9, 57.0], [50.0, 57.0], [50.1, 57.0], [50.2, 57.0], [50.3, 57.0], [50.4, 57.0], [50.5, 57.0], [50.6, 57.0], [50.7, 57.0], [50.8, 57.0], [50.9, 57.0], [51.0, 58.0], [51.1, 58.0], [51.2, 58.0], [51.3, 58.0], [51.4, 58.0], [51.5, 58.0], [51.6, 58.0], [51.7, 58.0], [51.8, 59.0], [51.9, 59.0], [52.0, 59.0], [52.1, 59.0], [52.2, 59.0], [52.3, 59.0], [52.4, 59.0], [52.5, 59.0], [52.6, 59.0], [52.7, 60.0], [52.8, 60.0], [52.9, 60.0], [53.0, 60.0], [53.1, 60.0], [53.2, 60.0], [53.3, 60.0], [53.4, 60.0], [53.5, 60.0], [53.6, 61.0], [53.7, 61.0], [53.8, 61.0], [53.9, 61.0], [54.0, 61.0], [54.1, 61.0], [54.2, 61.0], [54.3, 61.0], [54.4, 61.0], [54.5, 61.0], [54.6, 62.0], [54.7, 62.0], [54.8, 62.0], [54.9, 62.0], [55.0, 62.0], [55.1, 62.0], [55.2, 62.0], [55.3, 63.0], [55.4, 63.0], [55.5, 63.0], [55.6, 63.0], [55.7, 63.0], [55.8, 63.0], [55.9, 63.0], [56.0, 63.0], [56.1, 64.0], [56.2, 64.0], [56.3, 64.0], [56.4, 64.0], [56.5, 64.0], [56.6, 65.0], [56.7, 65.0], [56.8, 65.0], [56.9, 65.0], [57.0, 65.0], [57.1, 65.0], [57.2, 65.0], [57.3, 65.0], [57.4, 66.0], [57.5, 66.0], [57.6, 66.0], [57.7, 66.0], [57.8, 66.0], [57.9, 66.0], [58.0, 67.0], [58.1, 67.0], [58.2, 67.0], [58.3, 67.0], [58.4, 67.0], [58.5, 68.0], [58.6, 68.0], [58.7, 68.0], [58.8, 68.0], [58.9, 68.0], [59.0, 68.0], [59.1, 69.0], [59.2, 69.0], [59.3, 69.0], [59.4, 69.0], [59.5, 69.0], [59.6, 69.0], [59.7, 70.0], [59.8, 70.0], [59.9, 70.0], [60.0, 70.0], [60.1, 70.0], [60.2, 70.0], [60.3, 70.0], [60.4, 71.0], [60.5, 71.0], [60.6, 71.0], [60.7, 71.0], [60.8, 71.0], [60.9, 72.0], [61.0, 72.0], [61.1, 72.0], [61.2, 72.0], [61.3, 73.0], [61.4, 73.0], [61.5, 73.0], [61.6, 73.0], [61.7, 73.0], [61.8, 73.0], [61.9, 74.0], [62.0, 74.0], [62.1, 74.0], [62.2, 74.0], [62.3, 75.0], [62.4, 75.0], [62.5, 75.0], [62.6, 75.0], [62.7, 75.0], [62.8, 76.0], [62.9, 76.0], [63.0, 76.0], [63.1, 76.0], [63.2, 76.0], [63.3, 77.0], [63.4, 77.0], [63.5, 77.0], [63.6, 78.0], [63.7, 78.0], [63.8, 78.0], [63.9, 78.0], [64.0, 79.0], [64.1, 79.0], [64.2, 79.0], [64.3, 79.0], [64.4, 80.0], [64.5, 80.0], [64.6, 80.0], [64.7, 80.0], [64.8, 80.0], [64.9, 81.0], [65.0, 81.0], [65.1, 81.0], [65.2, 81.0], [65.3, 82.0], [65.4, 82.0], [65.5, 82.0], [65.6, 82.0], [65.7, 82.0], [65.8, 83.0], [65.9, 83.0], [66.0, 83.0], [66.1, 83.0], [66.2, 83.0], [66.3, 83.0], [66.4, 84.0], [66.5, 84.0], [66.6, 84.0], [66.7, 84.0], [66.8, 84.0], [66.9, 84.0], [67.0, 85.0], [67.1, 85.0], [67.2, 85.0], [67.3, 85.0], [67.4, 85.0], [67.5, 85.0], [67.6, 85.0], [67.7, 85.0], [67.8, 85.0], [67.9, 85.0], [68.0, 86.0], [68.1, 86.0], [68.2, 86.0], [68.3, 86.0], [68.4, 86.0], [68.5, 86.0], [68.6, 86.0], [68.7, 86.0], [68.8, 86.0], [68.9, 87.0], [69.0, 87.0], [69.1, 87.0], [69.2, 87.0], [69.3, 87.0], [69.4, 87.0], [69.5, 87.0], [69.6, 87.0], [69.7, 87.0], [69.8, 87.0], [69.9, 87.0], [70.0, 87.0], [70.1, 87.0], [70.2, 87.0], [70.3, 88.0], [70.4, 88.0], [70.5, 88.0], [70.6, 88.0], [70.7, 88.0], [70.8, 88.0], [70.9, 88.0], [71.0, 88.0], [71.1, 88.0], [71.2, 88.0], [71.3, 88.0], [71.4, 88.0], [71.5, 88.0], [71.6, 88.0], [71.7, 88.0], [71.8, 88.0], [71.9, 88.0], [72.0, 88.0], [72.1, 88.0], [72.2, 89.0], [72.3, 89.0], [72.4, 89.0], [72.5, 89.0], [72.6, 89.0], [72.7, 89.0], [72.8, 89.0], [72.9, 89.0], [73.0, 89.0], [73.1, 89.0], [73.2, 89.0], [73.3, 89.0], [73.4, 89.0], [73.5, 89.0], [73.6, 89.0], [73.7, 89.0], [73.8, 89.0], [73.9, 89.0], [74.0, 89.0], [74.1, 90.0], [74.2, 90.0], [74.3, 90.0], [74.4, 90.0], [74.5, 90.0], [74.6, 90.0], [74.7, 90.0], [74.8, 90.0], [74.9, 90.0], [75.0, 90.0], [75.1, 90.0], [75.2, 90.0], [75.3, 90.0], [75.4, 90.0], [75.5, 90.0], [75.6, 90.0], [75.7, 90.0], [75.8, 91.0], [75.9, 91.0], [76.0, 91.0], [76.1, 91.0], [76.2, 91.0], [76.3, 91.0], [76.4, 91.0], [76.5, 91.0], [76.6, 91.0], [76.7, 91.0], [76.8, 91.0], [76.9, 91.0], [77.0, 91.0], [77.1, 91.0], [77.2, 91.0], [77.3, 91.0], [77.4, 91.0], [77.5, 91.0], [77.6, 92.0], [77.7, 92.0], [77.8, 92.0], [77.9, 92.0], [78.0, 92.0], [78.1, 92.0], [78.2, 92.0], [78.3, 92.0], [78.4, 92.0], [78.5, 92.0], [78.6, 92.0], [78.7, 92.0], [78.8, 92.0], [78.9, 92.0], [79.0, 92.0], [79.1, 92.0], [79.2, 92.0], [79.3, 93.0], [79.4, 93.0], [79.5, 93.0], [79.6, 93.0], [79.7, 93.0], [79.8, 93.0], [79.9, 93.0], [80.0, 93.0], [80.1, 93.0], [80.2, 93.0], [80.3, 93.0], [80.4, 93.0], [80.5, 93.0], [80.6, 93.0], [80.7, 93.0], [80.8, 93.0], [80.9, 93.0], [81.0, 93.0], [81.1, 93.0], [81.2, 94.0], [81.3, 94.0], [81.4, 94.0], [81.5, 94.0], [81.6, 94.0], [81.7, 94.0], [81.8, 94.0], [81.9, 94.0], [82.0, 94.0], [82.1, 94.0], [82.2, 94.0], [82.3, 94.0], [82.4, 94.0], [82.5, 94.0], [82.6, 94.0], [82.7, 95.0], [82.8, 95.0], [82.9, 95.0], [83.0, 95.0], [83.1, 95.0], [83.2, 95.0], [83.3, 95.0], [83.4, 95.0], [83.5, 95.0], [83.6, 95.0], [83.7, 95.0], [83.8, 95.0], [83.9, 95.0], [84.0, 95.0], [84.1, 95.0], [84.2, 96.0], [84.3, 96.0], [84.4, 96.0], [84.5, 96.0], [84.6, 96.0], [84.7, 96.0], [84.8, 96.0], [84.9, 96.0], [85.0, 96.0], [85.1, 96.0], [85.2, 96.0], [85.3, 96.0], [85.4, 96.0], [85.5, 97.0], [85.6, 97.0], [85.7, 97.0], [85.8, 97.0], [85.9, 97.0], [86.0, 97.0], [86.1, 97.0], [86.2, 97.0], [86.3, 98.0], [86.4, 98.0], [86.5, 98.0], [86.6, 98.0], [86.7, 98.0], [86.8, 98.0], [86.9, 98.0], [87.0, 98.0], [87.1, 98.0], [87.2, 98.0], [87.3, 99.0], [87.4, 99.0], [87.5, 99.0], [87.6, 99.0], [87.7, 99.0], [87.8, 99.0], [87.9, 99.0], [88.0, 99.0], [88.1, 99.0], [88.2, 100.0], [88.3, 100.0], [88.4, 100.0], [88.5, 100.0], [88.6, 100.0], [88.7, 100.0], [88.8, 100.0], [88.9, 101.0], [89.0, 101.0], [89.1, 101.0], [89.2, 101.0], [89.3, 101.0], [89.4, 101.0], [89.5, 101.0], [89.6, 102.0], [89.7, 102.0], [89.8, 102.0], [89.9, 102.0], [90.0, 102.0], [90.1, 103.0], [90.2, 103.0], [90.3, 103.0], [90.4, 103.0], [90.5, 103.0], [90.6, 103.0], [90.7, 104.0], [90.8, 104.0], [90.9, 104.0], [91.0, 104.0], [91.1, 105.0], [91.2, 105.0], [91.3, 105.0], [91.4, 105.0], [91.5, 105.0], [91.6, 106.0], [91.7, 106.0], [91.8, 106.0], [91.9, 106.0], [92.0, 107.0], [92.1, 107.0], [92.2, 107.0], [92.3, 107.0], [92.4, 108.0], [92.5, 108.0], [92.6, 108.0], [92.7, 109.0], [92.8, 109.0], [92.9, 109.0], [93.0, 110.0], [93.1, 110.0], [93.2, 110.0], [93.3, 111.0], [93.4, 111.0], [93.5, 112.0], [93.6, 112.0], [93.7, 113.0], [93.8, 113.0], [93.9, 114.0], [94.0, 114.0], [94.1, 114.0], [94.2, 115.0], [94.3, 115.0], [94.4, 116.0], [94.5, 116.0], [94.6, 118.0], [94.7, 118.0], [94.8, 119.0], [94.9, 119.0], [95.0, 120.0], [95.1, 121.0], [95.2, 121.0], [95.3, 122.0], [95.4, 123.0], [95.5, 123.0], [95.6, 124.0], [95.7, 125.0], [95.8, 127.0], [95.9, 128.0], [96.0, 129.0], [96.1, 130.0], [96.2, 131.0], [96.3, 132.0], [96.4, 133.0], [96.5, 135.0], [96.6, 136.0], [96.7, 137.0], [96.8, 139.0], [96.9, 141.0], [97.0, 142.0], [97.1, 143.0], [97.2, 144.0], [97.3, 147.0], [97.4, 149.0], [97.5, 151.0], [97.6, 154.0], [97.7, 157.0], [97.8, 159.0], [97.9, 162.0], [98.0, 164.0], [98.1, 165.0], [98.2, 169.0], [98.3, 173.0], [98.4, 175.0], [98.5, 180.0], [98.6, 184.0], [98.7, 189.0], [98.8, 194.0], [98.9, 202.0], [99.0, 205.0], [99.1, 208.0], [99.2, 216.0], [99.3, 227.0], [99.4, 238.0], [99.5, 248.0], [99.6, 259.0], [99.7, 277.0], [99.8, 312.0], [99.9, 406.0], [100.0, 2111.0]], "isOverall": false, "label": "Redpanda_Producer_Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8817.0, "series": [{"data": [[2100.0, 1.0], [0.0, 8817.0], [200.0, 91.0], [1200.0, 1.0], [300.0, 12.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [100.0, 1069.0], [400.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0]], "isOverall": false, "label": "Redpanda_Producer_Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9990.0, "series": [{"data": [[0.0, 9990.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.942118508350486, "minX": 1.78887966E12, "maxY": 10.0, "series": [{"data": [[1.78887972E12, 9.942118508350486], [1.78887966E12, 10.0]], "isOverall": false, "label": "Producers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78887972E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 16.8, "minX": 1.0, "maxY": 74.43589743589743, "series": [{"data": [[8.0, 74.43589743589743], [4.0, 44.333333333333336], [2.0, 19.85714285714286], [1.0, 16.8], [9.0, 61.65306122448979], [10.0, 68.22579989842573], [5.0, 46.66666666666666], [6.0, 69.0], [3.0, 36.0], [7.0, 70.77777777777777]], "isOverall": false, "label": "Redpanda_Producer_Sampler", "isController": false}, {"data": [[9.949400000000002, 68.05540000000018]], "isOverall": false, "label": "Redpanda_Producer_Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.78887966E12, "maxY": 4.9E-324, "series": [{"data": [[1.78887972E12, 0.0], [1.78887966E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78887972E12, 0.0], [1.78887966E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78887972E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 61.82246625486156, "minX": 1.78887966E12, "maxY": 111.36883942766295, "series": [{"data": [[1.78887972E12, 61.82246625486156], [1.78887966E12, 111.36883942766295]], "isOverall": false, "label": "Redpanda_Producer_Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78887972E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78887966E12, "maxY": 4.9E-324, "series": [{"data": [[1.78887972E12, 0.0], [1.78887966E12, 0.0]], "isOverall": false, "label": "Redpanda_Producer_Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78887972E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78887966E12, "maxY": 4.9E-324, "series": [{"data": [[1.78887972E12, 0.0], [1.78887966E12, 0.0]], "isOverall": false, "label": "Redpanda_Producer_Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78887972E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.78887966E12, "maxY": 2111.0, "series": [{"data": [[1.78887972E12, 406.0], [1.78887966E12, 2111.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78887972E12, 11.0], [1.78887966E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78887972E12, 98.0], [1.78887966E12, 177.10000000000014]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78887972E12, 137.0], [1.78887966E12, 347.23000000000025]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78887972E12, 53.0], [1.78887966E12, 85.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78887972E12, 105.0], [1.78887966E12, 218.0999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78887972E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 16.5, "minX": 8.0, "maxY": 197.0, "series": [{"data": [[8.0, 16.5], [49.0, 151.0], [64.0, 128.0], [68.0, 197.0], [75.0, 191.0], [77.0, 113.0], [84.0, 110.0], [87.0, 118.0], [98.0, 99.5], [102.0, 96.0], [101.0, 96.0], [100.0, 99.0], [106.0, 87.5], [105.0, 95.0], [107.0, 91.0], [110.0, 93.0], [109.0, 92.0], [111.0, 70.0], [113.0, 89.0], [114.0, 91.0], [112.0, 88.0], [116.0, 91.0], [121.0, 76.0], [126.0, 90.0], [125.0, 91.0], [132.0, 70.0], [128.0, 69.0], [140.0, 71.0], [139.0, 69.0], [138.0, 88.0], [144.0, 65.0], [146.0, 64.5], [150.0, 76.0], [159.0, 54.0], [156.0, 55.5], [162.0, 60.0], [161.0, 53.0], [166.0, 47.0], [168.0, 86.0], [172.0, 50.0], [169.0, 54.0], [180.0, 50.0], [178.0, 46.0], [189.0, 45.0], [191.0, 46.0], [207.0, 42.0], [203.0, 43.0], [213.0, 43.0], [217.0, 44.0], [216.0, 44.0], [224.0, 43.0], [228.0, 42.0], [238.0, 41.0], [239.0, 39.0], [232.0, 42.0], [236.0, 40.0], [242.0, 39.5], [245.0, 85.0], [271.0, 49.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 271.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 8.0, "maxY": 4.9E-324, "series": [{"data": [[8.0, 0.0], [49.0, 0.0], [64.0, 0.0], [68.0, 0.0], [75.0, 0.0], [77.0, 0.0], [84.0, 0.0], [87.0, 0.0], [98.0, 0.0], [102.0, 0.0], [101.0, 0.0], [100.0, 0.0], [106.0, 0.0], [105.0, 0.0], [107.0, 0.0], [110.0, 0.0], [109.0, 0.0], [111.0, 0.0], [113.0, 0.0], [114.0, 0.0], [112.0, 0.0], [116.0, 0.0], [121.0, 0.0], [126.0, 0.0], [125.0, 0.0], [132.0, 0.0], [128.0, 0.0], [140.0, 0.0], [139.0, 0.0], [138.0, 0.0], [144.0, 0.0], [146.0, 0.0], [150.0, 0.0], [159.0, 0.0], [156.0, 0.0], [162.0, 0.0], [161.0, 0.0], [166.0, 0.0], [168.0, 0.0], [172.0, 0.0], [169.0, 0.0], [180.0, 0.0], [178.0, 0.0], [189.0, 0.0], [191.0, 0.0], [207.0, 0.0], [203.0, 0.0], [213.0, 0.0], [217.0, 0.0], [216.0, 0.0], [224.0, 0.0], [228.0, 0.0], [238.0, 0.0], [239.0, 0.0], [232.0, 0.0], [236.0, 0.0], [242.0, 0.0], [245.0, 0.0], [271.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 271.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 21.133333333333333, "minX": 1.78887966E12, "maxY": 145.53333333333333, "series": [{"data": [[1.78887972E12, 145.53333333333333], [1.78887966E12, 21.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78887972E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 20.966666666666665, "minX": 1.78887966E12, "maxY": 145.7, "series": [{"data": [[1.78887972E12, 145.7], [1.78887966E12, 20.966666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78887972E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 20.966666666666665, "minX": 1.78887966E12, "maxY": 145.7, "series": [{"data": [[1.78887972E12, 145.7], [1.78887966E12, 20.966666666666665]], "isOverall": false, "label": "Redpanda_Producer_Sampler-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78887972E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 20.966666666666665, "minX": 1.78887966E12, "maxY": 145.7, "series": [{"data": [[1.78887972E12, 145.7], [1.78887966E12, 20.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78887972E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

