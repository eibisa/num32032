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



switch(nombreNUCLEO) {
    case '123 - RU / PORTADOSOL': circleFill = 'rgba(179,48,240,0.700)'; break;
    case '24 - LG / XARAVEDRA': circleFill = 'rgba(239,81,94,0.700)'; break;
    case '26 - LG / PENSOS': circleFill = 'rgba(168,237,31,0.700)'; break;
    case '49 - LG / FEIROBAL': circleFill = 'rgba(37,40,211,0.700)'; break;
    case '50 - LG / GUIMARAS': circleFill = 'rgba(61,204,166,0.700)'; break;
    case '5001 - LG / GRADIN': circleFill = 'rgba(127,200,54,0.700)'; break;
    case '5021 - CM / DE PENAS': circleFill = 'rgba(93,234,222,0.700)'; break;
    case '51 - LG / LAMA (A)': circleFill = 'rgba(191,216,51,0.700)'; break;
    case '53 - LG / QUINTA (A)': circleFill = 'rgba(38,226,145,0.700)'; break;
    case '55 - LG / SOUTELO': circleFill = 'rgba(121,232,145,0.700)'; break;
    case '57 - LG / CACHAMUIÑA': circleFill = 'rgba(219,29,143,0.700)'; break;
    case '58 - LG / CALSOMIRO': circleFill = 'rgba(96,27,234,0.700)'; break;
    case '59 - LG / ESGOS': circleFill = 'rgba(110,175,229,0.700)'; break;
    case '60 - LG / LAMPAZAS': circleFill = 'rgba(198,72,217,0.700)'; break;
    case '62 - LG / MEIROAS (AS)': circleFill = 'rgba(133,119,202,0.700)'; break;
    case '64 - LG / TARREIRIGO': circleFill = 'rgba(106,215,87,0.700)'; break;
    case '65 - LG / TOUZA (A)': circleFill = 'rgba(232,68,197,0.700)'; break;
    case '67 - LG / GOMARIZ': circleFill = 'rgba(210,65,128,0.700)'; break;
    case '69 - LG / CASANOVA': circleFill = 'rgba(201,109,75,0.700)'; break;
    case '7 - LG / REGUEIRO': circleFill = 'rgba(115,229,159,0.700)'; break;
    case '71 - LG / PARDECONDE': circleFill = 'rgba(202,84,71,0.700)'; break;
    case '76 - LG / CERNADA (A)': circleFill = 'rgba(224,222,79,0.700)'; break;
    case '78 - LG / MELON DE ABAIXO': circleFill = 'rgba(25,152,202,0.700)'; break;
    case '79 - LG / MELON DE ARRIBA': circleFill = 'rgba(122,159,223,0.700)'; break;
    case '80 - LG / QUINTA DO MONTE': circleFill = 'rgba(236,200,58,0.700)'; break;
    case '83 - LG / LOBACES': circleFill = 'rgba(45,199,216,0.700)'; break;
    case '85 - LG / CABALGADA (A)': circleFill = 'rgba(212,23,70,0.700)'; break;
    case '86 - LG / CAMPIÑAS (AS)': circleFill = 'rgba(227,160,53,0.700)'; break;
    case '87 - LG / FOLGOSO': circleFill = 'rgba(231,129,228,0.700)'; break;
    case '88 - LG / GRANXA (A)': circleFill = 'rgba(154,95,209,0.700)'; break;
    case '89 - LG / LAIOSO': circleFill = 'rgba(51,234,57,0.700)'; break;
    case '90 - LG / PINTO (O)': circleFill = 'rgba(83,106,207,0.700)'; break;
    case '91 - LG / REBORDIÑOS': circleFill = 'rgba(88,233,20,0.700)'; break;
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
