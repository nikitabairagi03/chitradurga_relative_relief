ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([558469.238547, 1488441.426200, 758367.376693, 1662447.465673]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DATA_1 = new ol.format.GeoJSON();
var features_DATA_1 = format_DATA_1.readFeatures(json_DATA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_DATA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATA_1.addFeatures(features_DATA_1);
var lyr_DATA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATA_1, 
                style: style_DATA_1,
                popuplayertitle: 'DATA',
                interactive: true,
                title: '<img src="styles/legend/DATA_1.png" /> DATA'
            });
var lyr_RELATIVERELIEF_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RELATIVE RELIEF<br />\
    <img src="styles/legend/RELATIVERELIEF_2_0.png" /> <= 59.68<br />\
    <img src="styles/legend/RELATIVERELIEF_2_1.png" /> 59.68 - 79.07<br />\
    <img src="styles/legend/RELATIVERELIEF_2_2.png" /> 79.07 - 104.24<br />\
    <img src="styles/legend/RELATIVERELIEF_2_3.png" /> 104.24 - 145.38<br />\
    <img src="styles/legend/RELATIVERELIEF_2_4.png" /> > 145.38<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RELATIVERELIEF_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8459824.250339, 1524675.407041, 8575683.103576, 1693918.644016]
        })
    });
var format_CHITRADURGA_3 = new ol.format.GeoJSON();
var features_CHITRADURGA_3 = format_CHITRADURGA_3.readFeatures(json_CHITRADURGA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_CHITRADURGA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHITRADURGA_3.addFeatures(features_CHITRADURGA_3);
var lyr_CHITRADURGA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHITRADURGA_3, 
                style: style_CHITRADURGA_3,
                popuplayertitle: 'CHITRADURGA',
                interactive: false,
                title: '<img src="styles/legend/CHITRADURGA_3.png" /> CHITRADURGA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DATA_1.setVisible(true);lyr_RELATIVERELIEF_2.setVisible(true);lyr_CHITRADURGA_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DATA_1,lyr_RELATIVERELIEF_2,lyr_CHITRADURGA_3];
lyr_DATA_1.set('fieldAliases', {'Id': 'Id', 'OBJECTID': 'OBJECTID', 'AR': 'AR', 'RR': 'RR', 'DI': 'DI', 'STREAM_F': 'STREAM_F', 'DD': 'DD', 'TRI': 'TRI', 'TWI': 'TWI', });
lyr_CHITRADURGA_3.set('fieldAliases', {'District': 'District', 'STATE': 'STATE', 'REMARKS': 'REMARKS', 'State_LGD': 'State_LGD', 'DISTRICT_L': 'DISTRICT_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DATA_1.set('fieldImages', {'Id': 'TextEdit', 'OBJECTID': 'TextEdit', 'AR': 'TextEdit', 'RR': 'TextEdit', 'DI': 'TextEdit', 'STREAM_F': 'TextEdit', 'DD': 'TextEdit', 'TRI': 'TextEdit', 'TWI': 'TextEdit', });
lyr_CHITRADURGA_3.set('fieldImages', {'District': 'TextEdit', 'STATE': 'TextEdit', 'REMARKS': 'TextEdit', 'State_LGD': 'TextEdit', 'DISTRICT_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DATA_1.set('fieldLabels', {'Id': 'hidden field', 'OBJECTID': 'hidden field', 'AR': 'hidden field', 'RR': 'inline label - visible with data', 'DI': 'hidden field', 'STREAM_F': 'hidden field', 'DD': 'hidden field', 'TRI': 'hidden field', 'TWI': 'hidden field', });
lyr_CHITRADURGA_3.set('fieldLabels', {'District': 'no label', 'STATE': 'no label', 'REMARKS': 'no label', 'State_LGD': 'no label', 'DISTRICT_L': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CHITRADURGA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});