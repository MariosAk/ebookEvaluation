# ebookEvaluation

This project aims to assess the interconnected URIs derived from [BibLinkCreator](https://www.researchgate.net/profile/Nick-Bassiliades/publication/322740325_Towards_Linking_DBpedia%27s_Bibliographic_References_to_Bibliographic_Repositories/links/5a782cdfaca2722e4df14e6a/Towards-Linking-DBpedias-Bibliographic-References-to-Bibliographic-Repositories.pdf) as to their correctness using a webpage that shows the snapshots of 2 interconnected links. Users have to choose whether the 2 links are identical, different, or if either one of them
is broken.  
The derived URIs are stored in a json file in this form:
```
"http://archive.org/details/musicofpilgrimsd00pratuoft" : {
    "http://www.w3.org/2000/01/rdf-schema#seeAlso" : [
      {
        "value" : "https://catalog.hathitrust.org/Record/001454759",
        "type" : "uri",
        "graphs" : [
          "http://biblinkcreator/graph/dbpediacitations_to_hathitrust_lccn_links"
        ]
      },
      {
        "value" : "https://openlibrary.org/books/OL7197710M/The_music_of_the_pilgrims",
        "type" : "uri",
        "graphs" : [
          "http://biblinkcreator/graph/dbpediacitations_to_openlibrary_lccn_links"
        ]
      }
    ]
  },
```
### Main Page
![](https://github.com/MariosAk/ebookEvaluation/blob/main/images/mainpage.PNG)
