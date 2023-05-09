namespace CreArt2 {
    window.addEventListener('load', function() {
        let width = 10;
      
        document.addEventListener('keydown', function(event) {
          if (event.which === 68) adjustWidth(1);
          else if (event.which === 65) adjustWidth(2);
        });
      
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        ctx.fillStyle = '#C1DAD6';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
      
        function adjustWidth(iw: number) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.fillStyle = '#C1DAD6';
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);
          ctx.fillStyle = 'grey';
          if (iw === 1) {
            width += 10;
            ctx.fillRect(0, 100, width + 10, 5);
          } else if (iw === 2) {
            width -= 10;
            if (width > 0) {
              ctx.fillRect(0, 100, width + 10, 5);
            }
          }
        }
      });
      






}