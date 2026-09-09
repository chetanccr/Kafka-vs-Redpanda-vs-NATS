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
        data: {"result": {"minY": 343.0, "minX": 0.0, "maxY": 510.0, "series": [{"data": [[0.0, 343.0], [0.1, 345.0], [0.2, 345.0], [0.3, 345.0], [0.4, 345.0], [0.5, 345.0], [0.6, 345.0], [0.7, 345.0], [0.8, 345.0], [0.9, 345.0], [1.0, 345.0], [1.1, 345.0], [1.2, 349.0], [1.3, 349.0], [1.4, 349.0], [1.5, 349.0], [1.6, 349.0], [1.7, 349.0], [1.8, 349.0], [1.9, 349.0], [2.0, 349.0], [2.1, 349.0], [2.2, 349.0], [2.3, 349.0], [2.4, 351.0], [2.5, 351.0], [2.6, 351.0], [2.7, 351.0], [2.8, 351.0], [2.9, 351.0], [3.0, 351.0], [3.1, 351.0], [3.2, 351.0], [3.3, 351.0], [3.4, 351.0], [3.5, 351.0], [3.6, 351.0], [3.7, 351.0], [3.8, 352.0], [3.9, 354.0], [4.0, 354.0], [4.1, 354.0], [4.2, 354.0], [4.3, 354.0], [4.4, 354.0], [4.5, 354.0], [4.6, 354.0], [4.7, 354.0], [4.8, 354.0], [4.9, 354.0], [5.0, 354.0], [5.1, 354.0], [5.2, 354.0], [5.3, 354.0], [5.4, 354.0], [5.5, 354.0], [5.6, 355.0], [5.7, 355.0], [5.8, 355.0], [5.9, 355.0], [6.0, 355.0], [6.1, 355.0], [6.2, 355.0], [6.3, 355.0], [6.4, 355.0], [6.5, 355.0], [6.6, 355.0], [6.7, 355.0], [6.8, 356.0], [6.9, 356.0], [7.0, 356.0], [7.1, 356.0], [7.2, 356.0], [7.3, 356.0], [7.4, 357.0], [7.5, 357.0], [7.6, 357.0], [7.7, 357.0], [7.8, 357.0], [7.9, 357.0], [8.0, 357.0], [8.1, 357.0], [8.2, 357.0], [8.3, 357.0], [8.4, 357.0], [8.5, 357.0], [8.6, 358.0], [8.7, 373.0], [8.8, 373.0], [8.9, 373.0], [9.0, 373.0], [9.1, 373.0], [9.2, 373.0], [9.3, 373.0], [9.4, 373.0], [9.5, 374.0], [9.6, 374.0], [9.7, 374.0], [9.8, 374.0], [9.9, 374.0], [10.0, 374.0], [10.1, 374.0], [10.2, 374.0], [10.3, 374.0], [10.4, 374.0], [10.5, 374.0], [10.6, 374.0], [10.7, 374.0], [10.8, 374.0], [10.9, 374.0], [11.0, 375.0], [11.1, 375.0], [11.2, 375.0], [11.3, 375.0], [11.4, 375.0], [11.5, 375.0], [11.6, 375.0], [11.7, 375.0], [11.8, 375.0], [11.9, 375.0], [12.0, 375.0], [12.1, 375.0], [12.2, 375.0], [12.3, 375.0], [12.4, 375.0], [12.5, 375.0], [12.6, 375.0], [12.7, 375.0], [12.8, 375.0], [12.9, 375.0], [13.0, 375.0], [13.1, 375.0], [13.2, 375.0], [13.3, 376.0], [13.4, 376.0], [13.5, 376.0], [13.6, 376.0], [13.7, 376.0], [13.8, 376.0], [13.9, 376.0], [14.0, 376.0], [14.1, 376.0], [14.2, 376.0], [14.3, 376.0], [14.4, 376.0], [14.5, 376.0], [14.6, 376.0], [14.7, 376.0], [14.8, 376.0], [14.9, 376.0], [15.0, 376.0], [15.1, 376.0], [15.2, 376.0], [15.3, 376.0], [15.4, 376.0], [15.5, 376.0], [15.6, 376.0], [15.7, 377.0], [15.8, 377.0], [15.9, 377.0], [16.0, 377.0], [16.1, 377.0], [16.2, 377.0], [16.3, 377.0], [16.4, 377.0], [16.5, 378.0], [16.6, 378.0], [16.7, 378.0], [16.8, 378.0], [16.9, 378.0], [17.0, 378.0], [17.1, 378.0], [17.2, 378.0], [17.3, 378.0], [17.4, 378.0], [17.5, 378.0], [17.6, 402.0], [17.7, 402.0], [17.8, 402.0], [17.9, 425.0], [18.0, 425.0], [18.1, 425.0], [18.2, 425.0], [18.3, 425.0], [18.4, 425.0], [18.5, 425.0], [18.6, 425.0], [18.7, 425.0], [18.8, 425.0], [18.9, 425.0], [19.0, 425.0], [19.1, 425.0], [19.2, 425.0], [19.3, 425.0], [19.4, 425.0], [19.5, 425.0], [19.6, 425.0], [19.7, 426.0], [19.8, 426.0], [19.9, 426.0], [20.0, 426.0], [20.1, 426.0], [20.2, 426.0], [20.3, 426.0], [20.4, 426.0], [20.5, 426.0], [20.6, 426.0], [20.7, 426.0], [20.8, 426.0], [20.9, 426.0], [21.0, 426.0], [21.1, 426.0], [21.2, 426.0], [21.3, 426.0], [21.4, 426.0], [21.5, 426.0], [21.6, 426.0], [21.7, 426.0], [21.8, 426.0], [21.9, 426.0], [22.0, 426.0], [22.1, 426.0], [22.2, 426.0], [22.3, 426.0], [22.4, 426.0], [22.5, 426.0], [22.6, 426.0], [22.7, 426.0], [22.8, 426.0], [22.9, 426.0], [23.0, 426.0], [23.1, 426.0], [23.2, 426.0], [23.3, 426.0], [23.4, 426.0], [23.5, 426.0], [23.6, 426.0], [23.7, 426.0], [23.8, 426.0], [23.9, 426.0], [24.0, 426.0], [24.1, 426.0], [24.2, 426.0], [24.3, 426.0], [24.4, 426.0], [24.5, 426.0], [24.6, 427.0], [24.7, 427.0], [24.8, 427.0], [24.9, 427.0], [25.0, 427.0], [25.1, 427.0], [25.2, 427.0], [25.3, 427.0], [25.4, 427.0], [25.5, 427.0], [25.6, 427.0], [25.7, 427.0], [25.8, 427.0], [25.9, 427.0], [26.0, 427.0], [26.1, 427.0], [26.2, 427.0], [26.3, 428.0], [26.4, 428.0], [26.5, 428.0], [26.6, 428.0], [26.7, 428.0], [26.8, 428.0], [26.9, 428.0], [27.0, 428.0], [27.1, 429.0], [27.2, 429.0], [27.3, 429.0], [27.4, 429.0], [27.5, 429.0], [27.6, 429.0], [27.7, 432.0], [27.8, 432.0], [27.9, 432.0], [28.0, 432.0], [28.1, 433.0], [28.2, 433.0], [28.3, 433.0], [28.4, 433.0], [28.5, 433.0], [28.6, 433.0], [28.7, 433.0], [28.8, 433.0], [28.9, 433.0], [29.0, 433.0], [29.1, 433.0], [29.2, 433.0], [29.3, 433.0], [29.4, 433.0], [29.5, 433.0], [29.6, 433.0], [29.7, 433.0], [29.8, 433.0], [29.9, 433.0], [30.0, 433.0], [30.1, 433.0], [30.2, 433.0], [30.3, 433.0], [30.4, 433.0], [30.5, 433.0], [30.6, 433.0], [30.7, 433.0], [30.8, 433.0], [30.9, 442.0], [31.0, 442.0], [31.1, 442.0], [31.2, 442.0], [31.3, 442.0], [31.4, 442.0], [31.5, 442.0], [31.6, 442.0], [31.7, 442.0], [31.8, 442.0], [31.9, 442.0], [32.0, 442.0], [32.1, 442.0], [32.2, 442.0], [32.3, 442.0], [32.4, 442.0], [32.5, 442.0], [32.6, 443.0], [32.7, 443.0], [32.8, 443.0], [32.9, 443.0], [33.0, 443.0], [33.1, 443.0], [33.2, 443.0], [33.3, 443.0], [33.4, 443.0], [33.5, 443.0], [33.6, 443.0], [33.7, 443.0], [33.8, 443.0], [33.9, 443.0], [34.0, 443.0], [34.1, 443.0], [34.2, 443.0], [34.3, 443.0], [34.4, 443.0], [34.5, 443.0], [34.6, 443.0], [34.7, 443.0], [34.8, 443.0], [34.9, 443.0], [35.0, 443.0], [35.1, 443.0], [35.2, 443.0], [35.3, 443.0], [35.4, 444.0], [35.5, 444.0], [35.6, 444.0], [35.7, 444.0], [35.8, 444.0], [35.9, 444.0], [36.0, 444.0], [36.1, 444.0], [36.2, 444.0], [36.3, 444.0], [36.4, 444.0], [36.5, 444.0], [36.6, 444.0], [36.7, 444.0], [36.8, 444.0], [36.9, 444.0], [37.0, 444.0], [37.1, 444.0], [37.2, 444.0], [37.3, 445.0], [37.4, 445.0], [37.5, 445.0], [37.6, 445.0], [37.7, 445.0], [37.8, 445.0], [37.9, 460.0], [38.0, 460.0], [38.1, 460.0], [38.2, 460.0], [38.3, 460.0], [38.4, 461.0], [38.5, 461.0], [38.6, 461.0], [38.7, 463.0], [38.8, 463.0], [38.9, 463.0], [39.0, 463.0], [39.1, 463.0], [39.2, 463.0], [39.3, 463.0], [39.4, 463.0], [39.5, 463.0], [39.6, 463.0], [39.7, 463.0], [39.8, 463.0], [39.9, 463.0], [40.0, 463.0], [40.1, 463.0], [40.2, 463.0], [40.3, 463.0], [40.4, 463.0], [40.5, 463.0], [40.6, 463.0], [40.7, 463.0], [40.8, 463.0], [40.9, 464.0], [41.0, 464.0], [41.1, 464.0], [41.2, 464.0], [41.3, 464.0], [41.4, 464.0], [41.5, 464.0], [41.6, 464.0], [41.7, 464.0], [41.8, 464.0], [41.9, 464.0], [42.0, 465.0], [42.1, 465.0], [42.2, 465.0], [42.3, 465.0], [42.4, 465.0], [42.5, 465.0], [42.6, 465.0], [42.7, 465.0], [42.8, 465.0], [42.9, 465.0], [43.0, 465.0], [43.1, 465.0], [43.2, 465.0], [43.3, 465.0], [43.4, 465.0], [43.5, 465.0], [43.6, 465.0], [43.7, 465.0], [43.8, 465.0], [43.9, 465.0], [44.0, 467.0], [44.1, 467.0], [44.2, 467.0], [44.3, 467.0], [44.4, 467.0], [44.5, 467.0], [44.6, 467.0], [44.7, 467.0], [44.8, 467.0], [44.9, 467.0], [45.0, 467.0], [45.1, 468.0], [45.2, 468.0], [45.3, 468.0], [45.4, 468.0], [45.5, 468.0], [45.6, 468.0], [45.7, 468.0], [45.8, 468.0], [45.9, 468.0], [46.0, 468.0], [46.1, 468.0], [46.2, 468.0], [46.3, 469.0], [46.4, 469.0], [46.5, 469.0], [46.6, 469.0], [46.7, 469.0], [46.8, 469.0], [46.9, 469.0], [47.0, 469.0], [47.1, 469.0], [47.2, 469.0], [47.3, 469.0], [47.4, 469.0], [47.5, 469.0], [47.6, 469.0], [47.7, 469.0], [47.8, 469.0], [47.9, 469.0], [48.0, 469.0], [48.1, 470.0], [48.2, 470.0], [48.3, 470.0], [48.4, 470.0], [48.5, 470.0], [48.6, 470.0], [48.7, 470.0], [48.8, 470.0], [48.9, 470.0], [49.0, 470.0], [49.1, 470.0], [49.2, 470.0], [49.3, 471.0], [49.4, 471.0], [49.5, 472.0], [49.6, 472.0], [49.7, 472.0], [49.8, 472.0], [49.9, 472.0], [50.0, 472.0], [50.1, 472.0], [50.2, 472.0], [50.3, 472.0], [50.4, 472.0], [50.5, 472.0], [50.6, 473.0], [50.7, 473.0], [50.8, 473.0], [50.9, 473.0], [51.0, 473.0], [51.1, 473.0], [51.2, 473.0], [51.3, 473.0], [51.4, 473.0], [51.5, 473.0], [51.6, 473.0], [51.7, 474.0], [51.8, 474.0], [51.9, 474.0], [52.0, 474.0], [52.1, 474.0], [52.2, 474.0], [52.3, 474.0], [52.4, 474.0], [52.5, 474.0], [52.6, 474.0], [52.7, 474.0], [52.8, 474.0], [52.9, 474.0], [53.0, 474.0], [53.1, 475.0], [53.2, 475.0], [53.3, 475.0], [53.4, 475.0], [53.5, 475.0], [53.6, 475.0], [53.7, 475.0], [53.8, 475.0], [53.9, 475.0], [54.0, 475.0], [54.1, 475.0], [54.2, 475.0], [54.3, 475.0], [54.4, 475.0], [54.5, 475.0], [54.6, 475.0], [54.7, 475.0], [54.8, 475.0], [54.9, 475.0], [55.0, 475.0], [55.1, 475.0], [55.2, 475.0], [55.3, 475.0], [55.4, 475.0], [55.5, 475.0], [55.6, 475.0], [55.7, 475.0], [55.8, 475.0], [55.9, 475.0], [56.0, 475.0], [56.1, 475.0], [56.2, 476.0], [56.3, 476.0], [56.4, 476.0], [56.5, 476.0], [56.6, 477.0], [56.7, 477.0], [56.8, 477.0], [56.9, 477.0], [57.0, 477.0], [57.1, 477.0], [57.2, 477.0], [57.3, 477.0], [57.4, 477.0], [57.5, 478.0], [57.6, 478.0], [57.7, 478.0], [57.8, 478.0], [57.9, 478.0], [58.0, 478.0], [58.1, 478.0], [58.2, 478.0], [58.3, 478.0], [58.4, 478.0], [58.5, 478.0], [58.6, 478.0], [58.7, 478.0], [58.8, 478.0], [58.9, 478.0], [59.0, 478.0], [59.1, 478.0], [59.2, 478.0], [59.3, 478.0], [59.4, 478.0], [59.5, 478.0], [59.6, 478.0], [59.7, 478.0], [59.8, 478.0], [59.9, 478.0], [60.0, 478.0], [60.1, 478.0], [60.2, 478.0], [60.3, 478.0], [60.4, 478.0], [60.5, 478.0], [60.6, 478.0], [60.7, 478.0], [60.8, 478.0], [60.9, 478.0], [61.0, 478.0], [61.1, 478.0], [61.2, 478.0], [61.3, 478.0], [61.4, 478.0], [61.5, 478.0], [61.6, 478.0], [61.7, 478.0], [61.8, 478.0], [61.9, 478.0], [62.0, 478.0], [62.1, 478.0], [62.2, 478.0], [62.3, 478.0], [62.4, 478.0], [62.5, 478.0], [62.6, 478.0], [62.7, 478.0], [62.8, 478.0], [62.9, 478.0], [63.0, 478.0], [63.1, 478.0], [63.2, 478.0], [63.3, 478.0], [63.4, 478.0], [63.5, 478.0], [63.6, 478.0], [63.7, 478.0], [63.8, 478.0], [63.9, 478.0], [64.0, 478.0], [64.1, 478.0], [64.2, 478.0], [64.3, 478.0], [64.4, 478.0], [64.5, 478.0], [64.6, 479.0], [64.7, 479.0], [64.8, 479.0], [64.9, 479.0], [65.0, 479.0], [65.1, 479.0], [65.2, 479.0], [65.3, 479.0], [65.4, 479.0], [65.5, 479.0], [65.6, 479.0], [65.7, 479.0], [65.8, 479.0], [65.9, 479.0], [66.0, 479.0], [66.1, 479.0], [66.2, 480.0], [66.3, 480.0], [66.4, 480.0], [66.5, 480.0], [66.6, 480.0], [66.7, 481.0], [66.8, 481.0], [66.9, 481.0], [67.0, 481.0], [67.1, 481.0], [67.2, 481.0], [67.3, 481.0], [67.4, 481.0], [67.5, 481.0], [67.6, 481.0], [67.7, 481.0], [67.8, 481.0], [67.9, 481.0], [68.0, 481.0], [68.1, 481.0], [68.2, 481.0], [68.3, 481.0], [68.4, 481.0], [68.5, 481.0], [68.6, 481.0], [68.7, 481.0], [68.8, 481.0], [68.9, 481.0], [69.0, 481.0], [69.1, 481.0], [69.2, 482.0], [69.3, 482.0], [69.4, 482.0], [69.5, 482.0], [69.6, 482.0], [69.7, 482.0], [69.8, 482.0], [69.9, 482.0], [70.0, 482.0], [70.1, 482.0], [70.2, 484.0], [70.3, 484.0], [70.4, 484.0], [70.5, 484.0], [70.6, 484.0], [70.7, 484.0], [70.8, 484.0], [70.9, 485.0], [71.0, 485.0], [71.1, 485.0], [71.2, 485.0], [71.3, 485.0], [71.4, 485.0], [71.5, 485.0], [71.6, 485.0], [71.7, 485.0], [71.8, 485.0], [71.9, 485.0], [72.0, 485.0], [72.1, 485.0], [72.2, 485.0], [72.3, 485.0], [72.4, 485.0], [72.5, 485.0], [72.6, 485.0], [72.7, 485.0], [72.8, 485.0], [72.9, 486.0], [73.0, 486.0], [73.1, 486.0], [73.2, 486.0], [73.3, 486.0], [73.4, 486.0], [73.5, 486.0], [73.6, 486.0], [73.7, 486.0], [73.8, 486.0], [73.9, 486.0], [74.0, 486.0], [74.1, 486.0], [74.2, 486.0], [74.3, 486.0], [74.4, 486.0], [74.5, 486.0], [74.6, 486.0], [74.7, 486.0], [74.8, 486.0], [74.9, 486.0], [75.0, 486.0], [75.1, 486.0], [75.2, 486.0], [75.3, 486.0], [75.4, 486.0], [75.5, 486.0], [75.6, 486.0], [75.7, 486.0], [75.8, 486.0], [75.9, 486.0], [76.0, 486.0], [76.1, 486.0], [76.2, 486.0], [76.3, 486.0], [76.4, 486.0], [76.5, 487.0], [76.6, 487.0], [76.7, 487.0], [76.8, 487.0], [76.9, 487.0], [77.0, 487.0], [77.1, 487.0], [77.2, 487.0], [77.3, 487.0], [77.4, 487.0], [77.5, 487.0], [77.6, 487.0], [77.7, 487.0], [77.8, 487.0], [77.9, 487.0], [78.0, 487.0], [78.1, 487.0], [78.2, 487.0], [78.3, 487.0], [78.4, 487.0], [78.5, 487.0], [78.6, 487.0], [78.7, 487.0], [78.8, 487.0], [78.9, 487.0], [79.0, 487.0], [79.1, 487.0], [79.2, 487.0], [79.3, 488.0], [79.4, 489.0], [79.5, 489.0], [79.6, 489.0], [79.7, 489.0], [79.8, 489.0], [79.9, 489.0], [80.0, 489.0], [80.1, 490.0], [80.2, 490.0], [80.3, 490.0], [80.4, 490.0], [80.5, 490.0], [80.6, 490.0], [80.7, 490.0], [80.8, 490.0], [80.9, 490.0], [81.0, 490.0], [81.1, 490.0], [81.2, 490.0], [81.3, 490.0], [81.4, 490.0], [81.5, 490.0], [81.6, 490.0], [81.7, 490.0], [81.8, 490.0], [81.9, 490.0], [82.0, 490.0], [82.1, 490.0], [82.2, 490.0], [82.3, 490.0], [82.4, 490.0], [82.5, 490.0], [82.6, 490.0], [82.7, 490.0], [82.8, 490.0], [82.9, 490.0], [83.0, 490.0], [83.1, 490.0], [83.2, 490.0], [83.3, 490.0], [83.4, 490.0], [83.5, 490.0], [83.6, 490.0], [83.7, 491.0], [83.8, 491.0], [83.9, 491.0], [84.0, 491.0], [84.1, 491.0], [84.2, 491.0], [84.3, 491.0], [84.4, 491.0], [84.5, 491.0], [84.6, 493.0], [84.7, 493.0], [84.8, 493.0], [84.9, 493.0], [85.0, 493.0], [85.1, 493.0], [85.2, 493.0], [85.3, 493.0], [85.4, 493.0], [85.5, 493.0], [85.6, 493.0], [85.7, 493.0], [85.8, 493.0], [85.9, 493.0], [86.0, 493.0], [86.1, 493.0], [86.2, 493.0], [86.3, 493.0], [86.4, 493.0], [86.5, 493.0], [86.6, 493.0], [86.7, 493.0], [86.8, 493.0], [86.9, 493.0], [87.0, 493.0], [87.1, 493.0], [87.2, 493.0], [87.3, 493.0], [87.4, 493.0], [87.5, 493.0], [87.6, 493.0], [87.7, 493.0], [87.8, 493.0], [87.9, 493.0], [88.0, 493.0], [88.1, 493.0], [88.2, 497.0], [88.3, 497.0], [88.4, 497.0], [88.5, 497.0], [88.6, 498.0], [88.7, 498.0], [88.8, 498.0], [88.9, 498.0], [89.0, 498.0], [89.1, 498.0], [89.2, 498.0], [89.3, 498.0], [89.4, 499.0], [89.5, 499.0], [89.6, 499.0], [89.7, 499.0], [89.8, 499.0], [89.9, 499.0], [90.0, 499.0], [90.1, 499.0], [90.2, 499.0], [90.3, 499.0], [90.4, 499.0], [90.5, 499.0], [90.6, 499.0], [90.7, 499.0], [90.8, 499.0], [90.9, 499.0], [91.0, 499.0], [91.1, 499.0], [91.2, 499.0], [91.3, 499.0], [91.4, 499.0], [91.5, 499.0], [91.6, 499.0], [91.7, 499.0], [91.8, 499.0], [91.9, 499.0], [92.0, 499.0], [92.1, 499.0], [92.2, 499.0], [92.3, 499.0], [92.4, 499.0], [92.5, 499.0], [92.6, 499.0], [92.7, 499.0], [92.8, 499.0], [92.9, 499.0], [93.0, 499.0], [93.1, 504.0], [93.2, 504.0], [93.3, 504.0], [93.4, 504.0], [93.5, 504.0], [93.6, 504.0], [93.7, 504.0], [93.8, 504.0], [93.9, 504.0], [94.0, 504.0], [94.1, 504.0], [94.2, 504.0], [94.3, 505.0], [94.4, 505.0], [94.5, 505.0], [94.6, 505.0], [94.7, 505.0], [94.8, 505.0], [94.9, 505.0], [95.0, 505.0], [95.1, 505.0], [95.2, 507.0], [95.3, 507.0], [95.4, 507.0], [95.5, 507.0], [95.6, 507.0], [95.7, 507.0], [95.8, 507.0], [95.9, 507.0], [96.0, 507.0], [96.1, 508.0], [96.2, 508.0], [96.3, 508.0], [96.4, 508.0], [96.5, 508.0], [96.6, 508.0], [96.7, 508.0], [96.8, 508.0], [96.9, 508.0], [97.0, 509.0], [97.1, 509.0], [97.2, 509.0], [97.3, 509.0], [97.4, 509.0], [97.5, 509.0], [97.6, 509.0], [97.7, 509.0], [97.8, 509.0], [97.9, 509.0], [98.0, 509.0], [98.1, 509.0], [98.2, 509.0], [98.3, 509.0], [98.4, 510.0], [98.5, 510.0], [98.6, 510.0], [98.7, 510.0], [98.8, 510.0], [98.9, 510.0], [99.0, 510.0], [99.1, 510.0], [99.2, 510.0], [99.3, 510.0], [99.4, 510.0], [99.5, 510.0], [99.6, 510.0], [99.7, 510.0], [99.8, 510.0], [99.9, 510.0], [100.0, 510.0]], "isOverall": false, "label": "NATS-Test-B-5-Subjects", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 700.0, "minX": 300.0, "maxY": 7540.0, "series": [{"data": [[300.0, 1760.0], [400.0, 7540.0], [500.0, 700.0]], "isOverall": false, "label": "NATS-Test-B-5-Subjects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 700.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9300.0, "series": [{"data": [[0.0, 9300.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 700.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.78894566E12, "maxY": 50.0, "series": [{"data": [[1.78894566E12, 50.0]], "isOverall": false, "label": "Thread-1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78894566E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 452.235199999999, "minX": 50.0, "maxY": 452.235199999999, "series": [{"data": [[50.0, 452.235199999999]], "isOverall": false, "label": "NATS-Test-B-5-Subjects", "isController": false}, {"data": [[50.0, 452.235199999999]], "isOverall": false, "label": "NATS-Test-B-5-Subjects-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 170666.66666666666, "minX": 1.78894566E12, "maxY": 170666.66666666666, "series": [{"data": [[1.78894566E12, 170666.66666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78894566E12, 170666.66666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78894566E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 452.235199999999, "minX": 1.78894566E12, "maxY": 452.235199999999, "series": [{"data": [[1.78894566E12, 452.235199999999]], "isOverall": false, "label": "NATS-Test-B-5-Subjects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78894566E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 452.235199999999, "minX": 1.78894566E12, "maxY": 452.235199999999, "series": [{"data": [[1.78894566E12, 452.235199999999]], "isOverall": false, "label": "NATS-Test-B-5-Subjects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78894566E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.78894566E12, "maxY": 4.9E-324, "series": [{"data": [[1.78894566E12, 0.0]], "isOverall": false, "label": "NATS-Test-B-5-Subjects", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78894566E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 343.0, "minX": 1.78894566E12, "maxY": 510.0, "series": [{"data": [[1.78894566E12, 510.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78894566E12, 343.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78894566E12, 499.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78894566E12, 510.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78894566E12, 472.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78894566E12, 505.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78894566E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 472.0, "minX": 10000.0, "maxY": 472.0, "series": [{"data": [[10000.0, 472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 472.0, "minX": 10000.0, "maxY": 472.0, "series": [{"data": [[10000.0, 472.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.78894566E12, "maxY": 166.66666666666666, "series": [{"data": [[1.78894566E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78894566E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.78894566E12, "maxY": 166.66666666666666, "series": [{"data": [[1.78894566E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78894566E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.78894566E12, "maxY": 166.66666666666666, "series": [{"data": [[1.78894566E12, 166.66666666666666]], "isOverall": false, "label": "NATS-Test-B-5-Subjects-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78894566E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.78894566E12, "maxY": 166.66666666666666, "series": [{"data": [[1.78894566E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78894566E12, "title": "Total Transactions Per Second"}},
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

