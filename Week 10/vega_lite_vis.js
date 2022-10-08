var vg_1 = "terrorist_attacks.vg.json";
vegaEmbed("#terrorist_attacks_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "filtered_map.vg.json";
vegaEmbed("#filtered_map", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
