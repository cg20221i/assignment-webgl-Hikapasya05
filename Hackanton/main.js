function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
 
    var vertices = [
        // F       // merah     // Surface orientation
        -2, -1, 0,     1, 0, 0,    0, 0, 2,   // Index:  0    
        -2.5, -1, 0,   1, 0, 0,    0, 0, 2,   // Index:  1
        -2.5,  1, 0,   1, 0, 0,    0, 0, 2,   // Index:  2
        -2,  1, 0,     1, 0, 0,    0, 0, 2,   // Index:  3
        -2.5, 0.6, 0,     1, 0, 0,    0, 0, 2,   // Index:  4    
        -2.5, 1, 0,   1, 0, 0,    0, 0, 2,   // Index:  5
        -1,  1, 0,   1, 0, 0,    0, 0, 2,   // Index:  6
        -1,  0.6, 0,   1, 0, 0,    0, 0, 2,   // Index:  7
        -2.5, 0.2, 0,     1, 0, 0,    0, 0, 2,   // Index:  8    
        -2.5, -0.2, 0,   1, 0, 0,    0, 0, 2,   // Index:  9
        -1,  -0.2, 0,   1, 0, 0,    0, 0, 2,   // Index:  10
        -1,  0.2, 0,   1, 0, 0,    0, 0, 2,   // Index:  11
        // F       // hijau     // Surface orientation
        -2, -1, -0.5,     0, 1, 0,    0, 0, -1,   // Index:  12    
        -2.5, -1, -0.5,   0, 1, 0,    0, 0, -1,   // Index:  13
        -2.5,  1, -0.5,   0, 1, 0,    0, 0, -1,   // Index:  14
        -2,  1, -0.5,     0, 1, 0,    0, 0, -1,   // Index:  15
        -2.5, 0.6, -0.5,  0, 1, 0,    0, 0, -1,   // Index:  16    
        -2.5, 1, -0.5,    0, 1, 0,    0, 0, -1,   // Index:  17
        -1,  1, -0.5,     0, 1, 0,    0, 0, -1,   // Index:  18
        -1,  0.6, -0.5,   0, 1, 0,    0, 0, -1,   // Index:  19
        -2.5, 0.2, -0.5,  0, 1, 0, 0, 0, -1,   // Index:  20    
        -2.5, -0.2, -0.5, 0, 1, 0,  0, 0, -1,   // Index:  21
        -1,  -0.2, -0.5,  0,1, 0,    0, 0, -1,   // Index:  22
        -1,  0.2, -0.5,   0, 1, 0,    0, 0, -1,   // Index:  23
        // F       // biru     // Surface orientation
        -2.5, 1, -0,      0, 0, 1,    0, 0, -1,   // Index:  24    
        -2.5, 1, -0.5,    0, 0, 1,    0, 0, -1,   // Index:  25
        -1,  1, -0.5,     0, 0, 1,    0, 0, -1,   // Index:  26
        -1,  1, 0,        0, 0, 1,    0, 0, -1,   // Index:  27
        // F       // putih atas    // Surface orientation
        -1, 1, -0.5,    1, 1, 1,    0, 0, -1,   // Index:  28
        -1, 1, 0,     1, 1, 1,    0, 0, -1,   // Index:  29
        -1, 0.6, -0.5,        1, 1, 1,    0, 0, -1,   // Index:  30
        -1, 0.6, 0,        1, 1, 1,    0, 0, -1,   // Index:  31
        // F       // putih bawah   // Surface orientation
        -1, 0.2, -0.5,    1, 1, 1,    0, 0, -1,   // Index:  32
        -1, 0.2, 0,     1, 1, 1,    0, 0, -1,   // Index:  33
        -1, -0.2, -0.5,        1, 1, 1,    0, 0, -1,   // Index:  34
        -1, -0.2, 0,        1, 1, 1,    0, 0, -1,   // Index:  35
        // F       // putih atas dalam   // Surface orientation
        -2, 0.6, -0.5,    1, 1, 1,    0, 0, -1,   // Index:  36
        -2, 0.6, 0,     1, 1, 1,    0, 0, -1,   // Index:  37
        -2, 0.2, -0.5,        1, 1, 1,    0, 0, -1,   // Index:  38
        -2, 0.2, 0,        1, 1, 1,    0, 0, -1,   // Index:  39
        // F       // putih atas dalam   // Surface orientation
        -2, -0.2, -0.5,    1, 1, 1,    0, 0, -1,   // Index:  40
        -2, -0.2, 0,     1, 1, 1,    0, 0, -1,   // Index:  41
        -2, -1, -0.5,        1, 1, 1,    0, 0, -1,   // Index:  42
        -2, -1, 0,        1, 1, 1,    0, 0, -1,   // Index:  43
        // F       // oren bawah   // Surface orientation
        -2.5, -1, -0.5,    1, 0.5, 0,    0, 0, -1,   // Index:  44
        -2.5, -1, 0,     1, 0.5, 0,    0, 0, -1,   // Index:  45
        -2, -1, -0.5,        1, 0.5, 0,    0, 0, -1,   // Index:  46
        -2, -1, 0,        1, 0.5, 0,    0, 0, -1,   // Index:  47
        // F       // oren tengah     // Surface orientation
        -2, -0.2, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  48    
        -2, -0.2, -0.5,    1, 0.5, 0,    0, 0, -1,   // Index:  49
        -1,  -0.2, -0.5,     1, 0.5, 0,    0, 0, -1,   // Index: 50
        -1,  -0.2, 0,        1, 0.5, 0,    0, 0, -1,   // Index: 51
        // F       // oren atas     // Surface orientation
        -2, 0.6, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  52   
        -2, 0.6, -0.5,    1, 0.5, 0,    0, 0, -1,   // Index:  53
        -1,  0.6, -0.5,     1, 0.5, 0,    0, 0, -1,   // Index: 54
        -1,  0.6, 0,        1, 0.5, 0,    0, 0, -1,   // Index: 55
        // F       // ungu   // Surface orientation
        -2.5, 1, -0.5,    1, 0, 1,    0, 0, -1,   // Index:  56
        -2.5, 1, 0,       1, 0, 1,    0, 0, -1,   // Index:  57
        -2.5, -1, -0.5,   1, 0, 1,    0, 0, -1,   // Index:  58
        -2.5, -1, 0,      1, 0, 1,    0, 0, -1,   // Index:  59
        // A       // Hijau kiri   // Surface orientation
        1, -1, 0,     0, 1, 0,    0, 0, 2,   // Index:  60    
        1.5, -1, 0,   0, 1, 0,    0, 0, 2,   // Index:  61
        2,  1, 0,   0, 1, 0,    0, 0, 2,   // Index:  62
        1.5, 1, 0,     0, 1, 0,    0, 0, 2,   // Index:  63
        // A       // Hijau kanan   // Surface orientation
        2.5, -1, 0,     0, 1, 0,    0, 0, 2,   // Index:  64   
        2, -1, 0,   0, 1, 0,    0, 0, 2,   // Index:  65
        2,  1, 0,   0, 1, 0,    0, 0, 2,   // Index:  66
        1.5, 1, 0,     0, 1, 0,    0, 0, 2,   // Index:  67
        // A       // pink kiri   // Surface orientation
        1, -1, -0.5,     2, 1, 2,    0, 0, 2,   // Index:  68    
        1.5, -1, -0.5,   2, 1, 2,    0, 0, 2,   // Index:  69
        2,  1, -0.5,   2, 1, 2,    0, 0, 2,   // Index:  70
        1.5, 1, -0.5,     2, 1, 2,    0, 0, 2,   // Index:  71
        // A       // pink kanan   // Surface orientation
        2.5, -1, -0.5,     2, 1, 2,    0, 0, 2,   // Index:  72    
        2, -1, -0.5,   2, 1, 2,    0, 0, 2,   // Index:  73
        2,  1, -0.5,   2, 1, 2,    0, 0, 2,   // Index:  74
        1.5, 1, -0.5,     2, 1, 2,    0, 0, 2,   // Index:  75
        // A       // biru kiri   // Surface orientation
        1, -1, 0,     0, 0, 1,    0, 0, 2,   // Index:  76   
        1, -1, -0.5,   0, 0, 1,    0, 0, 2,   // Index:  77
        1.5,  1, -0.5,   0, 0, 1,   0, 0, 2,   // Index:  78
        1.5, 1, 0,     0, 0, 1,    0, 0, 2,   // Index:  79
        // A       // biru kanan   // Surface orientation
        2.5, -1, 0,     0, 0, 1,    0, 0, 2,   // Index:  80   
        2.5, -1, -0.5,   0, 0, 1,    0, 0, 2,   // Index:  81
        2,  1, -0.5,   0, 0, 1,   0, 0, 2,   // Index:  82
        2, 1, 0,     0, 0, 1,    0, 0, 2,   // Index:  83
        // A       // oren  // Surface orientation
        1.5, 1, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  84 
        1.5, 1, -0.5,      1, 0.5, 0,    0, 0, -1,   // Index:  85 
        2, 1, -0.5,      1, 0.5, 0,    0, 0, -1,   // Index:  86 
        2, 1, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  87
        // A       // oren bawah kanan // Surface orientation
        2, -1, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  88 
        2, -1, -0.5,      1, 0.5, 0,    0, 0, -1,   // Index:  89 
        2.5, -1, -0.5,      1, 0.5, 0,    0, 0, -1,   // Index:  90 
        2.5, -1, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  91
        // A       // oren bawah kiri // Surface orientation
        1, -1, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  92
        1, -1, -0.5,      1, 0.5, 0,    0, 0, -1,   // Index:  93 
        1.5, -1, -0.5,      1, 0.5, 0,    0, 0, -1,   // Index:  94 
        1.5, -1, -0,      1, 0.5, 0,    0, 0, -1,   // Index:  95

        // A       // ungu tengah kiri // Surface orientation
        1.5, -1, 0,      1, 0, 1,     0, 0, -1,   // Index:  96
        1.5, -1, -0.5,     1, 0, 1,     0, 0, -1,   // Index:  97 
        1.77, 0.1, 0.,      1, 0, 1,     0, 0, -1,   // Index:  98 
        1.77, 0.1, -0.5,      1, 0, 1,     0, 0, -1,   // Index:  99
        
        // A       // ungu tengah kanan // Surface orientation
        2, -1, 0,      1, 0, 1,     0, 0, -1,   // Index:  100
        2, -1, -0.5,     1, 0, 1,     0, 0, -1,   // Index:  101 
        1.74, 0.1, 0.,      1, 0, 1,     0, 0, -1,   // Index:  102 
        1.74, 0.1, -0.5,      1, 0, 1,     0, 0, -1,   // Index:  103

         // 1       // biru   // Surface orientation
         -0, 1, -1,     0, 0, 1,    0, 0, 2,   // Index:  104    
         -0.5, 1, -1,   0, 0, 1,   0, 0, 2,   // Index:  105
         -0.5,  3, -1,   0, 0, 1,   0, 0, 2,   // Index:  106
         -0,  3, -1,     0, 0, 1,   0, 0, 2,   // Index:  107

         // 1       // ungu   // Surface orientation
         -0, 1, -1.5,     1, 0, 1,    0, 0, 2,   // Index:  108    
         -0.5, 1, -1.5,   1, 0, 1,   0, 0, 2,   // Index:  109
         -0.5,  3, -1.5,   1, 0, 1,   0, 0, 2,   // Index:  110
         -0,  3, -1.5,     1, 0, 1,   0, 0, 2,   // Index:  111
         // 1       // putih  // Surface orientation
         -0, 1, -1.5,     1, 1, 1,    0, 0, 2,   // Index:  112   
         -0, 1, -1,     1, 1, 1,    0, 0, 2,   // Index:  113
         -0, 3, -1,     1, 1, 1,    0, 0, 2,   // Index:  114
         -0, 3, -1.5,     1, 1, 1,    0, 0, 2,   // Index:  115

         // 1       // merah  // Surface orientation
         -0.5, 1, -1.5,     1, 0, 0,     0, 0, 2,   // Index:  116   
         -0.5, 1, -1,     1, 0, 0,     0, 0, 2,   // Index:  117
         -0.5, 3, -1,     1, 0, 0,    0, 0, 2,   // Index:  118
         -0.5, 3, -1.5,     1, 0, 0,   0, 0, 2,   // Index:  119
         // 1       // oren  // Surface orientation
         0, 3, -1,      1, 0.5, 0,    0, 0, -1,   // Index:  120 
         0, 3, -1.5,      1, 0.5, 0,    0, 0, -1,   // Index:  121 
         -0.5, 3, -1.5,      1, 0.5, 0,    0, 0, -1,   // Index:  122 
         -0.5, 3, -1,      1, 0.5, 0,    0, 0, -1,   // Index:  123
         // 1       // hijau  // Surface orientation
         0, 1, -1,      0, 1, 0,   0, 0, -1,   // Index:  124 
         0, 1, -1.5,      0, 1, 0,   0, 0, -1,   // Index:  125 
         -0.5, 1, -1.5,      0, 1, 0,   0, 0, -1,   // Index:  126 
         -0.5, 1, -1,      0, 1, 0,    0, 0, -1,   // Index:  127

         // 5       // putih  // Surface orientation
         -0, -1, 1,     1, 1, 1,    0, 0, 2,   // Index:  128    
         -0.5, -1, 1,   1, 1, 1,  0, 0, 2,   // Index:  129
         -0.5, -2.5, 1,   1, 1, 1,   0, 0, 2,   // Index:  130
         -0,  -2.5, 1,     1, 1, 1,   0, 0, 2,   // Index:  131

         -0.5, -1.45, 1,   1, 1, 1,  0, 0, 2,   // Index:  132
          1, -1.45, 1,   1, 1, 1,  0, 0, 2,   // Index:  133
          1, -1, 1,   1, 1, 1,  0, 0, 2,   // Index:  134

        -0.5, -2.05, 1,   1, 1, 1,   0, 0, 2,   // Index:  135
         1, -2.05, 1,   1, 1, 1,   0, 0, 2,   // Index:  136
         1, -2.5, 1,   1, 1, 1,   0, 0, 2,   // Index:  137

         0.5, -2.05, 1,   1, 1, 1,   0, 0, 2,   // Index:  138
         0.5, -3.55, 1,   1, 1, 1,   0, 0, 2,   // Index:  139
         1, -3.55, 1,   1, 1, 1,   0, 0, 2,   // Index:  140

         1, -3.05, 1,   1, 1, 1,   0, 0, 2,   // Index:  141
         -0.5, -3.05, 1,   1, 1, 1,   0, 0, 2,   // Index:  142
         -0.5, -3.55, 1,   1, 1, 1,   0, 0, 2,   // Index:  143

         // 5       // putih  // Surface orientation
         -0, -1, -0.5,     1, 1, 1,    0, 0, 2,   // Index:  144
         -0.5, -1, -0.5,   1, 1, 1,  0, 0, 2,   // Index:  145
         -0.5, -2.5, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  146
         -0,  -2.5, -0.5,     1, 1, 1,   0, 0, 2,   // Index:  147

         -0.5, -1.45,-0.5,   1, 1, 1,  0, 0, 2,   // Index:  148
          1, -1.45, -0.5,   1, 1, 1,  0, 0, 2,   // Index:  149
          1, -1, -0.5,       1, 1, 1,  0, 0, 2,   // Index:  150

        -0.5, -2.05, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  151
         1, -2.05, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  152
         1, -2.5, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  153

         0.5, -2.05, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  154
         0.5, -3.55, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  155
         1, -3.55, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  156

         1, -3.05,-0.5,   1, 1, 1,   0, 0, 2,   // Index:  157
         -0.5, -3.05, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  158
         -0.5, -3.55, -0.5,   1, 1, 1,   0, 0, 2,   // Index:  159

          // Face A       // Red      // Surface orientation
        -0.8, 0, -1,       1, 0.5, 0,    0, 0, -1,   // Index:  0    
        0, 0, -1,       1, 0.5, 0,    0, 0, -1,   // Index:  1
        0,  1, -1,       1, 0.5, 0,    0, 0, -1,   // Index:  2
       -0.8,  1, -1,       1, 0.5, 0,    0, 0, -1,   // Index:  3
       // Face B       // Yellow
       -0.8, 0,  0,      1, 0.5, 0,    0, 0, 1,    // Index:  4
        0, 0,  0,       1, 0.5, 0,    0, 0, 1,    // Index:  5
        0,  1,  0,       1, 0.5, 0,    0, 0, 1,    // Index:  6
       -0.8,  1,  0,       1, 0.5, 0,    0, 0, 1,    // Index:  7
       // Face C       // Green
       -0.8, 0, -1,       1, 0.5, 0,    -1, 0, 0,   // Index:  8
       -0.8,  1, -1,       1, 0.5, 0,   -1, 0, 0,   // Index:  9
       -0.8,  1,  0,      1, 0.5, 0,    -1, 0, 0,   // Index: 10
       -0.8, 0,  0,       1, 0.5, 0,   -1, 0, 0,   // Index: 11
       // Face D       // Blue
        0, 0, -1,       1, 0.5, 0,   1, 0, 0,    // Index: 12
        0,  1, -1,       1, 0.5, 0,   1, 0, 0,    // Index: 13
        0,  1,  0,     1, 0.5, 0,   1, 0, 0,    // Index: 14
        0, 0,  0,      1, 0.5, 0,   1, 0, 0,    // Index: 15
       // Face E       // Orange
       -0.8, 0, -1,       1, 0.5, 0,  0, -1, 0,   // Index: 16
       -0.8, 0,  0,       1, 0.5, 0,  0, -1, 0,   // Index: 17
        0, 0,  0,      1, 0.5, 0,  0, -1, 0,   // Index: 18
        0, 0, -1,      1, 0.5, 0,  0, -1, 0,   // Index: 19
       // Face F       // White
       -0.8,  1, -1,     1, 0.5, 0,    0, 1, 0,    // Index: 20
       -0.8,  1,  0,     1, 0.5, 0,   0, 1, 0,    // Index: 21
        0,  1,  0,     1, 0.5, 0,    0, 1, 0,    // Index: 22
        0,  1, -1,     1, 0.5, 0,   0, 1, 0     // Index: 23
    ];

    var indices = [
        //f merah
        0, 1, 2,     0, 2, 3,
        4, 5, 6,     4, 6, 7,
        8, 9, 10,    8, 10, 11,
        //f hijau
        12,13,14,    12,14,15,
        16,17,18,    16,18,19,
        20,21,22,    20,22,23,
        //f biru
        24,25,26,    24,26,27,
        //f putih atas
        28,29,30,   29,30,31,
        //f putih bawah
        32,33,34,   33,34,35,
        //f putih atas dalam
        36,37,38,   37,38,39,
        //f putih bawah dalam
        40,41,42,   41,42,43,
        //f oren bawah
        44,45,46, 45,46,47,
        //f oren tengah
        48,49,50, 48,50,51,
        //f oren atas
        52,53,54, 52,54,55,
        //f ungu
        56,57,58,   57,58,59,
        
        //A hijau kiri
        60,61,62, 63,62,60,
        //A hijau kanan
        64,65,66, 67,66,65,
        //A pink kiri
        68,69,70, 71,70,68,
        //A pink kanan
        72,73,74, 75,74,73,
        //A biru kiri
        76,77,78, 79,78,76,
        //A biru kanan
        80,81,82, 83,82,80,
        //A oren
        84,87,85, 86,85,87,
        //A oren kanan
        88,91,89, 90,89,91,
        //A oren kiri
        92,95,93, 94,93,95,
        //A tengan kiri
        96,97,98, 97,98,99,
        //A tengan kanan
        100,101,102, 101,102,103,

        //1 biru
        104, 105, 106,     104, 106, 107,
        //1 ungu
        108,109,110,    108,110,111,
        //1 putih
        112,113,114, 112,114,115,
        //1 merah
        116,117,118, 116,118,119,
        //1 oren 
        120,121,122, 120,122,123,
        //1 hijau
        124,125,126, 124,126,127,

        //5 putih
        128,129,130, 128,130,131,
        129,132,133, 129,133,134,
        130,135,136, 130,136,137,
        136,138,139, 140,139,136,
        140,141,142, 142,143,140,

        144,145,146, 144,146,147,
        145,148,149, 145,149,150,
        146,151,152, 146,152,153,
        152,154,155, 156,155,152,
        156,157,158, 158,159,156,

        //cube
        160,161,162, 160,162,163,
        164,165,166, 164,166,167,
        168,169,170, 168,170,171,
        172,173,174, 172,174,175,
        176,177,178, 176,178,179,
        180,181,182, 180,182,183,


        
    ];

       
    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
 
    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
 
    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");

    // For the camera
    var camera = [0.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [0.0, 0.0, 0.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);

    var cameraFOV = 75;
    var cameraAspect = 1.0;
    var cameraNearClip = 0.5;
    var cameraFarClip = 50.0;
    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        cameraFOV*(Math.PI/180),  // 60 degrees
        cameraAspect,
        cameraNearClip, 
        cameraFarClip
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.315);             // 60% intensity
    // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [-0.8, 0.5, 1.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
    // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
    // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown (event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp (event) {
        dragging = false;
    }
    function onMouseMove (event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
        // KEYBOARD
    function onKeyDown (event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            
            case 73: // Object UP
                direction = "up";
                break;
            case 75: // Object Down
                direction = "down";
                break;
           case 74:
       
               camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
               break;
           case 76:
               camera[0] -= 0.05;
               gl.uniform3fv(uViewerPosition, camera);
               glMatrix.mat4.lookAt(
                   view,
                   camera,
                   [camera[0], 0.0, -10.0],
                   [0.0, 1.0, 0.0]
               );
               gl.uniformMatrix4fv(uView, false, view);
               break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp (event) {
        direction = "";
    }
    function onKeyPress (event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);
    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.001;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
        
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length , gl.UNSIGNED_SHORT, 0);
       
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}