var size = 0;
var placement = 'point';

var style_EibCcl_Numeracion_Catastro_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var valueCODVIA = feature.get("ENA_CV_00");
    var valueSGVIA = feature.get("EibCcl_Callejero_eibTipVia");
    var valueNOMVIA = feature.get("EibCcl_Callejero_eibNomVia");
    var nombreNUCLEO = String(valueCODVIA + " - " + valueSGVIA + " / " + valueNOMVIA)
    var valueNUM = feature.get("ENA_N1_00");
    var valueLETRA = feature.get("ENA_L1_00");
    var valueTIPO = feature.get("EN1_TIPO");
    var valueESTCONS = feature.get("ESTADOS_CONS_Estado_Conservacion");
    if (valueNUM == null) { 
       valueNUM = ""; 
    }
    if (valueLETRA == null) { 
       valueLETRA = ""; 
    }
    var labelFont = "13px sans-serif";
    var labelFill = "#000000";
    var circleFill = "#4fc3f7";
    var bufferColor = "#aaaaaa";
    if (valueTIPO == "00_N1") {
    	circleFill = "#0d47a1";
    }
    if (valueESTCONS == "Bueno") {
    	bufferColor = "#2ca02c";
    	labelFill = "#ffffff"
    }
    if (valueESTCONS == "Regular") {
    bufferColor = "#ff7f00";
    labelFill = "#ffffff"
    }
    if (valueESTCONS == "Malo") {
    	bufferColor = "#e31a1c";
    	labelFill = "#ffffff"
    }
    if (valueESTCONS == "Ruina") {
    	bufferColor = "#984ea3";
    	labelFill = "#ffffff"
    }
    var bufferWidth = 7;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String(valueNUM + valueLETRA);
    }
    var radioCirculo = 12;
    
   
    
/*        var style = [ 
        new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            displacement: [offsetX, offsetY],
            stroke: new ol.style.Stroke({
            color: circleFill,
            width: 3.5
        })
        })
    }),
    new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;
*/



switch(String(valueCODVIA)) {

case '60': circleFill = 'rgba(255,96,17,1.0)'; break;
case '85': circleFill = 'rgba(221,237,127,1.0)'; break;
case '94': circleFill = 'rgba(136,111,225,1.0)'; break;
case '95': circleFill = 'rgba(203,199,80,1.0)'; break;
case '98': circleFill = 'rgba(109,230,48,1.0)'; break;
case '101': circleFill = 'rgba(135,211,55,1.0)'; break;
case '103': circleFill = 'rgba(236,178,79,1.0)'; break;
case '105': circleFill = 'rgba(215,62,41,1.0)'; break;
case '107': circleFill = 'rgba(224,25,171,1.0)'; break;
case '108': circleFill = 'rgba(71,153,200,1.0)'; break;
case '109': circleFill = 'rgba(182,114,207,1.0)'; break;
case '111': circleFill = 'rgba(77,123,239,1.0)'; break;
case '112': circleFill = 'rgba(205,171,35,1.0)'; break;
case '114': circleFill = 'rgba(102,213,79,1.0)'; break;
case '115': circleFill = 'rgba(18,200,18,1.0)'; break;
case '120': circleFill = 'rgba(102,202,227,1.0)'; break;
case '121': circleFill = 'rgba(18,116,228,1.0)'; break;
case '5002': circleFill = 'rgba(240,125,80,1.0)'; break;
case '5003': circleFill = 'rgba(231,121,24,1.0)'; break;
case '5004': circleFill = 'rgba(78,70,214,1.0)'; break;
case '5005': circleFill = 'rgba(237,122,225,1.0)'; break;
case '5006': circleFill = 'rgba(14,223,87,1.0)'; break;
case '5007': circleFill = 'rgba(33,220,161,1.0)'; break;
case '5008': circleFill = 'rgba(208,118,123,1.0)'; break;
case '5009': circleFill = 'rgba(129,141,233,1.0)'; break;
case '5010': circleFill = 'rgba(125,72,203,1.0)'; break;
case '5011': circleFill = 'rgba(216,81,135,1.0)'; break;
case '5016': circleFill = 'rgba(107,234,173,1.0)'; break;
case '5017': circleFill = 'rgba(134,18,222,1.0)'; break;
case '5018': circleFill = 'rgba(233,92,172,1.0)'; break;
case '5019': circleFill = 'rgba(156,215,28,1.0)'; break;
case '5020': circleFill = 'rgba(67,237,95,1.0)'; break;
case '5021': circleFill = 'rgba(212,44,227,1.0)'; break;
case '5022': circleFill = 'rgba(87,200,204,1.0)'; break;


    case '123': circleFill = 'rgba(179,48,240,1.000)'; break;
    case '24': circleFill = 'rgba(239,81,94,1.000)'; break;
    case '26': circleFill = 'rgba(168,237,31,1.000)'; break;
    case '49': circleFill = 'rgba(37,40,211,1.000)'; break;
    case '50': circleFill = 'rgba(61,204,166,1.000)'; break;
    case '5001': circleFill = 'rgba(127,200,54,1.000)'; break;
    case '5021': circleFill = 'rgba(93,234,222,1.000)'; break;
    case '51': circleFill = 'rgba(191,216,51,1.000)'; break;
    case '53': circleFill = 'rgba(38,226,145,1.000)'; break;
    case '55': circleFill = 'rgba(121,232,145,1.000)'; break;
    case '57': circleFill = 'rgba(219,29,143,1.000)'; break;
    case '58': circleFill = 'rgba(96,27,234,1.000)'; break;
    case '59': circleFill = 'rgba(110,175,229,1.000)'; break;
    case '60': circleFill = 'rgba(198,72,217,1.000)'; break;
    case '62': circleFill = 'rgba(133,119,202,1.000)'; break;
    case '64': circleFill = 'rgba(106,215,87,1.000)'; break;
    case '65': circleFill = 'rgba(232,68,197,1.000)'; break;
    case '67': circleFill = 'rgba(210,65,128,1.000)'; break;
    case '69': circleFill = 'rgba(201,109,75,1.000)'; break;
    case '7': circleFill = 'rgba(115,229,159,1.000)'; break;
    case '71': circleFill = 'rgba(202,84,71,1.000)'; break;
    case '76': circleFill = 'rgba(224,222,79,1.000)'; break;
    case '78': circleFill = 'rgba(25,152,202,1.000)'; break;
    case '79': circleFill = 'rgba(122,159,223,1.000)'; break;
    case '80': circleFill = 'rgba(236,200,58,1.000)'; break;
    case '83': circleFill = 'rgba(45,199,216,1.000)'; break;
    case '85': circleFill = 'rgba(212,23,70,1.000)'; break;
    case '86': circleFill = 'rgba(227,160,53,1.000)'; break;
    case '87': circleFill = 'rgba(231,129,228,1.000)'; break;
    case '88': circleFill = 'rgba(154,95,209,1.000)'; break;
    case '89': circleFill = 'rgba(51,234,57,1.000)'; break;
    case '90': circleFill = 'rgba(83,106,207,1.000)'; break;
    case '91': circleFill = 'rgba(88,233,20,1.000)'; break;
    default: radioCirculo = 0; break;
}



var style = [ 
            // 1. EL CÍRCULO
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radioCirculo,
                    displacement: [offsetX, offsetY], // Tu desplazamiento original del círculo
                    stroke: new ol.style.Stroke({
                        color: circleFill,
                        width: 3.5
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(0, 0, 0, 0)' // Centro totalmente transparente para ver el texto
                    })
                })
            }),
            
            // 2. EL TEXTO PERFECTAMENTE CENTRADO
            new ol.style.Style({
                text: new ol.style.Text({
                    text: labelText,
                    font: labelFont,
                    fill: new ol.style.Fill({
                        color: labelFill
                    }),
                    stroke: new ol.style.Stroke({
                        color: bufferColor,
                        width: bufferWidth
                    }),
                    
                    // =========================================================
                    // LAS 4 PROPIEDADES CLAVE PARA EL CENTRADO ABSOLUTO
                    // =========================================================
                    textAlign: 'center',     // Fuerza el centro horizontal del texto
                    textBaseline: 'middle',  // Fuerza el centro vertical del texto
                    offsetX: offsetX,        // Sigue al círculo en el eje X
                    offsetY: -offsetY,       // Sigue al círculo en el eje Y (OpenLayers invierte el signo Y en el texto respecto a displacement)
                    // =========================================================
                    
                    placement: placement
                })
            })
        ];
    

    return style;
};
