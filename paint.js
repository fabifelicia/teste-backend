let caracterMatrix = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.'],
];

function printMatrix(pixel, color) {

  let coloredMatrix = caracterMatrix
  let oldPixel = coloredMatrix[pixel[0]][pixel[1]]  
  coloredMatrix[pixel[0]][pixel[1]] = color

  coloredMatrix = paintCenter(coloredMatrix, oldPixel, color)
  coloredMatrix = paintBorders(coloredMatrix, oldPixel, color)
  coloredMatrix = paintFirstAndLastLine(coloredMatrix, oldPixel, color)
  coloredMatrix = paintFirstAndLastColumn(coloredMatrix, oldPixel, color)
  
  return coloredMatrix
}

function paintCenter(coloredMatrix, oldPixel, color) {
  for (let i = 1; i < coloredMatrix.length - 1; i++) {
    for (let j = 1; j < coloredMatrix[i].length - 1; j++) {      
        if (coloredMatrix[i][j] === oldPixel && (coloredMatrix[i][j-1] === color 
          || coloredMatrix[i][j + 1] === color
          || coloredMatrix[i-1][j] === color
          || coloredMatrix[i+1][j] === color          
          )) {
          coloredMatrix[i][j] = color      
      }
    }
  }
  return coloredMatrix
}

function paintBorders(coloredMatrix, oldPixel,color) {

  if (coloredMatrix[0][0] === oldPixel && (
    coloredMatrix[0][1] === color || coloredMatrix[1][0] === color
  )) {
    coloredMatrix[0][0] = color
  } else if (coloredMatrix[0][coloredMatrix[0].length - 1] === oldPixel && (
    coloredMatrix[0][coloredMatrix[0].length - 2] === color || coloredMatrix[1][coloredMatrix[0].length - 1] === color
  )) {
    coloredMatrix[0][coloredMatrix[0].length - 1] = color
  } else if (coloredMatrix[coloredMatrix.length - 1][0] === oldPixel && (
    coloredMatrix[coloredMatrix.length - 2][0] === color || coloredMatrix[coloredMatrix.length - 1][1] === color
  )) {
    coloredMatrix[coloredMatrix.length - 1][0] = color
  } else if (coloredMatrix[coloredMatrix.length - 1][coloredMatrix[0].length - 1] === oldPixel && (
    coloredMatrix[coloredMatrix.length - 2][coloredMatrix[0].length - 1] === color || coloredMatrix[coloredMatrix.length - 1][coloredMatrix[0].length - 2] === color
  )) {
    coloredMatrix[coloredMatrix.length - 1][coloredMatrix.length[0].length - 1] = color
  }

  return coloredMatrix
}

function paintFirstAndLastLine(coloredMatrix, oldPixel, color) {
  for (let i = 0; i < coloredMatrix[0].length; i++) {
    if (coloredMatrix[0][i] === oldPixel && (
      coloredMatrix[1][i] === color || coloredMatrix[0][i - 1] === color || coloredMatrix[0][i + 1] === color
    )) {
      coloredMatrix[0][i] = color
    } else if (coloredMatrix[coloredMatrix.length - 1][i] === oldPixel && (
      coloredMatrix[coloredMatrix.length - 2][i] === color || coloredMatrix[coloredMatrix.length - 1][i - 1] === color || coloredMatrix[coloredMatrix.length - 1][i + 1] === color
    )) {
      coloredMatrix[coloredMatrix.length - 1][i] = color
    }
  }
  return coloredMatrix
}

function paintFirstAndLastColumn(coloredMatrix, oldPixel, color) {
  for (let i = 1; i < coloredMatrix.length - 1; i++) {
    if (coloredMatrix[i][0] === oldPixel && (
      coloredMatrix[i][1] === color || coloredMatrix[i - 1][0] === color || coloredMatrix[i + 1][0] === color
    )) {
      coloredMatrix[i][0] = color
    } else if (coloredMatrix[i][coloredMatrix[i].length - 1] === oldPixel && (
      coloredMatrix[i][coloredMatrix[i].length - 2] === color || coloredMatrix[i - 1][coloredMatrix[i].length - 1] === color || coloredMatrix[i + 1][coloredMatrix[i].length - 1] === color
    )) {
      coloredMatrix[i][coloredMatrix[i].length - 1] = color
    }
  }
  return coloredMatrix
}


console.log(printMatrix([0,1], 'o'));