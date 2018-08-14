//    Copyright 2016 Danny Rorabaugh
//    For the Graph Property Database

// TODO: migrate contents of this file to HDF5 files in code folder.

//Array of reference data.
var cite = [ ["Author","Title","year","url","doi"],
        ["G. A. Dirac","Some theorems on abstract graphs",1952,null,"10.1112/plms/s3-2.1.69"],
        ["K. Wagner","&Uuml;ber eine Eigenschaft der ebenen Komplexe",1937,null,"10.1007/BF01594196"],
    ],

// Dictionary of example graphs, with graph6 code as keys.
// "graph6": ["vertices", "exampleOf", "HoG-id"]
// "exampleOf" is a -1/0/1 array with entry i corresponding to property i:
//      1 indicates having the property, 
//      -1 indicates not having the property, 
//      0 indicates status tbd.
// "HoG-id" is 0 if the graph is not in the House of Graphs. 
    exampDict = {
        "@":        [1,    [ 1,-1, 1, 1, 1, 1,-1,-1, 1,-1, 1, 1],    1310],
        "A_":        [2,    [ 1,-1, 1, 1, 1, 1,-1,-1, 1,-1, 1, 1],    19655],
        "A?":        [2,    [-1, 1,-1, 1,-1, 1,-1,-1, 1,-1, 1, 1],    19653],
        "Bw":        [3,    [ 1,-1,-1,-1,-1,-1, 1, 1, 1, 1, 1, 1],    1374],
        "CJ":        [4,    [-1, 1,-1,-1, 1,-1, 1,-1, 1,-1, 1, 1],    620],
        "Cr":        [4,    [ 1,-1,-1,-1,-1, 1, 1, 1, 1, 1, 1, 1],    674],
        "CF":        [4,    [ 1,-1, 1, 1, 1, 1,-1,-1,-1,-1, 1, 1],    500],
        "D~{":        [5,    [ 1,-1,-1,-1,-1,-1, 1, 1, 1, 1,-1,-1],    462],
        "D?[":        [5,    [-1, 1,-1, 1,-1, 1,-1,-1,-1,-1, 1, 1],    832],
        "D@{":        [5,    [ 1,-1,-1,-1,-1,-1, 1,-1,-1,-1, 1, 1],    985],
        "E`dg":        [6,    [ 1,-1,-1,-1,-1, 1, 1, 1,-1,-1, 1, 1],    1045],
        "Es\o":        [6,    [ 1,-1,-1,-1,-1, 1, 1, 1,-1, 1,-1,-1],    84],
        "EJ\w":        [6,    [-1, 1,-1,-1,-1,-1, 1,-1, 1,-1,-1,-1],    214],
        "I??GOOF@o":        [10,    [-1, 1,-1,-1, 1, 1, 1,-1,-1,-1,-1,-1],    0],
    },

// Array of graph properties.
// ["Name","Definition","Array of keyword abrv"]
    props = [
        [ "Connected",    "There exists a path between any two given vertices.",    ["CO"] ],
        [ "Disconnected",    "Not connected.",    ["CO"] ],
        [ "Tree",    "Acyclic and connected.",    ["CO","CY"] ],
        [ "Forest; Acyclic",    "No cycles; girth g = &#8734;.",    ["CY","FS"] ],
        [ "n = m + 1",    "The number of vertices (n) is one more than the number of edges (m).",    ["SI","OR"] ],
        [ "Bipartite; &#967; &#8804; 2",    "No odd-length cycles; chromatic number (&#967;) at most 2.",    ["CY","CH"] ],
        [ "Finite Girth",    "Girth g < &#8734;; not acyclic.",    ["CY"] ],
        [ "Hamiltonian",    "Has a Hamilton cycle, i.e. a spanning cycle.",    ["CY"] ],
        [ "Claw-free",    "Has no induced K_{1,3} subgraph.",    ["FS"] ],
        [ "Dirac; 2&delta; &#8805; n &#8805; 3",    "The minimum degree (&delta;) is at least half the number of vertices (n &#8805; 3).",    ["OR","DE"] ],
        [ "Planar",    "Can be drawn on a plane with no crossing edges.",    ["DR"] ],
        [ "No K_5 or K_{3,3} Minor",    "Has neither K_5 nor K_{3,3} as a minor.",    ["FS"] ],
    ],

// Dictionary of property keywords, with two-letter abbreviations as keys.
    keyDict = {
        CH:"Chromatic",
        CO:"Connectivity",
        CY:"Cycles",
        DE:"Degree",
        DR:"Drawing",
        FS:"Forbidden Substructure",
        OR:"Order",
        SI:"Size",
    },

// Array of implications betweeen the graph properties. 
//[ 
//    1->implies 0->unknown -1->does not imply -2->mutually exclusive, 
//    n->reason[n], 
//    [i_1, ...]->citation numbers 
//]
    implies = [
        [[1,1,[]], [-2,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[-2,2,[]], [1,1,[]], [-2,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-2,2,[]], [-1,2,[]], [-2,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[1,2,[]], [-2,2,[]], [1,1,[]], [1,2,[]], [1,3,[]], [1,2,[]], [-2,2,[]], [-2,2,[]], [-1,2,[]], [-2,2,[]], [1,2,[]], [1,2,[]] ],
        [[-1,2,[]], [-1,2,[]], [-1,2,[]], [1,1,[]], [-1,2,[]], [1,2,[]], [-2,2,[]], [-2,2,[]], [-1,2,[]], [-2,2,[]], [1,2,[]], [1,2,[]] ],
        [[-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [1,1,[]], [-1,2,[]], [-1,2,[]], [-2,2,[]], [-1,2,[]], [-2,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [1,1,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[-1,2,[]], [-1,2,[]], [-2,2,[]], [-2,2,[]], [-1,2,[]], [-1,2,[]], [1,1,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[1,2,[]], [-2,2,[]], [-2,2,[]], [-2,2,[]], [-2,2,[]], [-1,2,[]], [1,2,[]], [1,1,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [1,1,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]] ],
        [[1,2,[]], [-2,2,[]], [-2,2,[]], [-2,2,[]], [-2,2,[]], [-1,2,[]], [1,2,[]], [1,4,[1]], [-1,2,[]], [1,1,[]], [-1,2,[]], [-1,2,[]] ],
        [[-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [1,1,[]], [1,4,[2]] ],
        [[-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [-1,2,[]], [1,4,[2]], [1,1,[]] ],
    ],

// Array of implication reasons, whose indices are used in the implies array.
// TODO: replace this with 1-letter code.
    reason = [,
        "Self",
        "Trivial",
        "Folklore",
        "Citation",
    ];
/*
    reasonDict = {
        "S": "Self",
        "T": "Trivial",
        "F": "Folklore",
        "C": "Citation",
    };
*/


