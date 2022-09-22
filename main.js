function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    var vertices = [
        -0.18, -0.4, 
        -0.1, -0.4,

        -0.1, -0.4, 
        -0.1, 0.1,

        -0.1, 0.1, 
        -0.26, 0,

      -0.26, 0, 
      -0.26, -0.1,

      -0.26, -0.1, 
      -0.18, -0.05,

      -0.18, -0.05,
      -0.18, -0.4,

      0.1, 0.1, 
      0.36, 0.1, 

      0.1, 0.1, 
      0.1, -0.2, 
    
      0.36, 0.1,
      0.36, 0, 

      0.36, 0, 
      0.18, 0, 

      0.18, 0, 
      0.18, -0.1, 

      0.18, -0.1, 
      0.36, -0.1, 

      0.36, -0.1, 
      0.36, -0.4, 

      0.1, -0.4, 
      0.36, -0.4, 

      0.1, -0.3, 
      0.1, -0.4, 

      0.1, -0.3, 
      0.28, -0.3, 

      0.28, -0.3, 
      0.28, -0.2, 

      0.28, -0.2, 
      0.1, -0.2, 

      -0.3, 0.2,   
      -0.3, 0.9,  
      -0.2, 0.9, 

      -0.3, 0.2,   
      -0.2, 0.9,  
      -0.2, 0.2, 

      -0.2, 0.9,   
      -0.2, 0.75, 
      0.05, 0.9, 

      0.05, 0.75,   
      -0.2, 0.75,  
      0.05, 0.9,

      -0.2, 0.6,
      -0.2, 0.5,
      -0.05, 0.6,

      -0.05, 0.5,
      -0.2, 0.5,
      -0.05, 0.6,

      0.2, 0.9, 
      0.1, 0.2,
      0.25, 0.9,

      0.15, 0.2, 
      0.1, 0.2,
      0.25, 0.9,

      0.2, 0.9, 
      0.3, 0.2,
      0.25, 0.9,
      
      0.35, 0.2, 
      0.3, 0.2,
      0.25, 0.9,

      0.15, 0.45,
      0.15, 0.37,
      0.3,  0.45,
      
      0.3, 0.37,
      0.15, 0.37,
      0.3,  0.45,
      
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
    attribute vec2 a_Position;
    void main() {
        gl_Position = vec4(a_Position, 0.0, 1.0);
        gl_PointSize = 10.0;
    }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    var fragmentShaderCode = `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
  
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    //linked list untk memberikan informasi posisi koordinat yang akan digambar kpd program shader
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
  
    gl.clearColor(1.0, 1.0, 1.0, 0.9);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.drawArrays(gl.LINES, 0, 36);
    gl.drawArrays(gl.TRIANGLES, 36, 36);
    
    
  }