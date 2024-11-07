{
    type Circle = {
        shape: 'circle';
        radius: number;
    }
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number
    }

    type Shape = Circle | Rectangle

    function calculateShapeArea(shape: Shape): number {

        if (shape.shape === 'circle') {

            return Math.PI * shape.radius ** 2
        } else if (shape.shape === 'rectangle') {
            return shape.width * shape.height
        } else {
            console.log('Unknown the shape type');
        }
    }
    const circleArea:number = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea:number = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });

      console.log(circleArea.toFixed(2));
      console.log(rectangleArea);
}