////////////////////////////////////////////////////////////// 
/////////////////////////// Boys /////////////////////////////
////////////////////////////////////////////////////////////// 

////////////// Boy stuff ////////////////	
allBoyNames = [];
boyNamesByID = [];
boys.forEach(function(d,i) {
    allBoyNames[i] = d.name;
	boyNamesByID[d.name] = i;
});
var colorBoys = d3.scale.ordinal()
		.range(["#B5C660", "#B3C662", "#B1C764", "#AFC766", "#ADC767", "#ABC769", "#A8C76A", "#A6C76A", "#A2C66B", 
		"#9FC46B", "#9BC36A", "#97C069", "#93BE68", "#8DBA65", "#88B763", "#82B260", "#7BAE5D", "#74A959", "#6CA355", 
		"#649D51", "#5A974C", "#519047", "#468843", "#3C813E", "#317A3A", "#277437", "#1E6E36", "#176A35", "#116737", 
		"#0D663A", "#0B6740", "#0C6A48", "#107053", "#177761", "#1F8170", "#298B81", "#339592", "#3EA0A3", "#48AAB4", 
		"#50B2C4", "#57B9D2", "#5CBEDF", "#5EC0E8", "#5DBFEF", "#59BCF3", "#54B6F4", "#4DAFF4", "#45A7F1", "#3C9DED", 
		"#3393E8", "#2A89E1", "#237ED9", "#1C74D0", "#176AC6", "#1361BC", "#1058B1", "#0E4FA6", "#0D479A", "#0D3F8E", 
		"#0E3782", "#0F3075", "#102869", "#11215C"])
		.domain(allBoyNames);

////////////////////////////////////////////////////////////// 
/////////////////////////// Girls /////////////////////////////
////////////////////////////////////////////////////////////// 		
allGirlNames = [];
girlNamesByID = [];
girls.forEach(function(d,i) {
    allGirlNames[i] = d.name;
	girlNamesByID[d.name] = i;
});
var colorGirls = d3.scale.ordinal()
		.range(["#FFC600", "#FEC607", "#FEC70E", "#FDC715", "#FCC61B", "#FCC521", "#FBC426", "#FBC22B", "#FBBF2E", 
		"#FBBB30", "#FBB632", "#FCB032", "#FCAA31", "#FDA22F", "#FD9B2D", "#FE932B", "#FE8B2A", "#FF8428", "#FF7D27", 
		"#FF7727", "#FF7228", "#FE6D2A", "#FD692C", "#FC662E", "#FB6330", "#FA6032", "#F85D34", "#F65A34", "#F55733", 
		"#F35331", "#F0502E", "#EE4C2B", "#EC4726", "#E94322", "#E63F1F", "#E43B1D", "#E1371C", "#DE331D", "#DB3020", 
		"#D82D26", "#D52B2E", "#D22937", "#CF2842", "#CC274E", "#C9275A", "#C62866", "#C32971", "#C02B7C", "#BE2D85", 
		"#BB308D", "#B93493", "#B63799", "#B33B9D", "#B03FA0", "#AD42A3", "#A945A4", "#A548A4", "#A14AA4", "#9C4BA3", 
		"#974BA1", "#924B9E", "#8C4A9B", "#864998", "#7F4794", "#794590", "#73438C", "#6C4188"])
		.domain(allGirlNames);	
		
////////////////////////////////////////////////////////////// 
///////////////////// Insight Buttons //////////////////////// 
////////////////////////////////////////////////////////////// 

d3.select("#Maria").on("click", function() { changeName("Maria", "girls") }); 
d3.select("#Linda").on("click", function() { changeName("Linda", "girls") }); 

d3.select("#years_1880_1965_girls").on("click", function() { changeYears(1880, 1965, "girls") });
d3.select("#years_49_girls").on("click", function() { changeYears(1966, 2014, "girls") });
d3.select("#years_67_boys").on("click", function() { changeYears(1880, 1947, "boys") });

d3.select("#Esther").on("click", function() { changeName("Esther", "girls") }); 
d3.select("#Max").on("click", function() { changeName("Max", "boys") }); 
d3.select("#Anna").on("click", function() { changeName("Anna", "girls") }); 

d3.select("#Johannes").on("click", function() { changeName("Johannes", "boys") }); 
d3.select("#Elisabeth").on("click", function() { changeName("Elisabeth", "girls") }); 

d3.select("#Maria2").on("click", function() { changeName("Maria", "girls") }); 
d3.select("#Linda2").on("click", function() { changeName("Linda", "girls") });
d3.select("#Johannes2").on("click", function() { changeName("Johannes", "boys") }); 

d3.select("#years_past20_girls").on("click", function() { changeYears(1994, 2014, "girls") });
