{

	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.lombardia>\t<http://purl.org/dc/elements/1.1/title>\t\"Catalogo OpenData della Regione Lombardia\"", "<http://data.opendataday.it/resource/dati.lombardia>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Catalog>" ],
	"packageListUrl" : "http://dati.lombardia.it/api/views/425r-pyq4/rows.json",
	"singlePackageBaseUrl" : "http://dati.lombardia.it/api/views/",
	"resultFileName" : "dati.lombardia.n3",
	"resourceUriSubstitutor" : [ {
		"find" : "/api/views",
		"replace" : "http://data.opendataday.it/resource/dati.lombardia"
	}, {
		"find" : "\\.json",
		"replace" : ""
	} ],
	"staticInfo" : [ "<http://data.opendataday.it/resource/dati.lombardia>\t<http://www.w3.org/ns/dcat#dataset>\t<{{URI}}>", "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Dataset>" ],
	"datasetMap" : {
		"name" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},
		"category" : {
			"uri" : "<http://www.w3.org/ns/dcat#theme>",
			"type" : "map",
			"hasOwnUri" : true,
			"valueAsUri" : true,
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"staticInfo" : [ "<{{URI}}>\t<http://purl.org/dc/elements/1.1/creator>\t<http://data.opendataday.it/resource/dati.lombardia>", "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>", "<{{URI}}>\t<http://purl.org/dc/elements/1.1/title>\t\"{{VALUE}}\"" ],
			"toUri" : true
		},
		"tags" : {
			"uri" : "<http://www.w3.org/ns/dcat#keyword>",
			"type" : "map",
			"hasOwnUri" : true,
			"valueAsUri" : true,
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"staticInfo" : [ "<{{URI}}>\t<http://purl.org/dc/elements/1.1/creator>\t<http://data.opendataday.it/resource/dati.lombardia>", "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>", "<{{URI}}>\t<http://purl.org/dc/elements/1.1/title>\t\"{{VALUE}}\"" ],
			"toUri" : true
		},
		"description" : {
			"uri" : "<http://purl.org/dc/terms/description>",
			"type" : "string"
		},

		"license" : {
			"type" : "map",
			"termsLink" : {
				"uri" : "<http://purl.org/dc/terms/license>",
				"type" : "uri"
			}
		},

		"metadata" : {
			"type" : "map",
			"custom_fields" : {
				"type" : "map",
				"Frequenza di aggiornamento" : {
					"type" : "map",
					"Data ultima modifica" : {
						"uri" : "<http://purl.org/dc/terms/modified>",
						"type" : "string"
					}
				},
				"Catalog" : {
					"type" : "map",
					"Dataset Page" : {
						"uri" : "<http://xmlns.com/foaf/0.1/homepage>",
						"type" : "uri",
						"resourceUriSubstitutor" : {
							"find" : "^/dati",
							"replace" : "http://dati.lombardia.it/dati"
						},
						"staticInfo" : [ "<{{URI}}/ds0>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Distribution>", "<{{URI}}>\t<http://www.w3.org/ns/dcat#distribution>\t<{{URI}}/ds0>", "<{{URI}}/ds0>\t<http://www.w3.org/ns/dcat#accessURL>\t<{{URI}}.json>", "<{{URI}}/ds0>\t<http://rdfs.org/ns/void#format>\t\"application/json\"" ]
					}
				}

			}
		},
		"attribution" : {
			"uri" : "<http://purl.org/dc/terms/publisher>",
			"type" : "string"
		}
	}
}